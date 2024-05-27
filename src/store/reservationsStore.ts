import { create } from "zustand";

// Reservation 인터페이스 정의
interface Reservation {
	id: string;
	name: string;
	time: string;
	partySize: string;
	comment: string;
	menu: string[];
}

// 날짜별로 예약을 저장하는 구조 정의
interface ReservationsByDate {
	[date: string]: Reservation[];
}

// Zustand 상태 정의
interface ReservationsState {
	reservations: ReservationsByDate; // 활성 상태의 예약들
	completedReservations: ReservationsByDate; // 완료된 예약들
	setReservations: (reservations: ReservationsByDate) => void; // 예약 상태 설정
	reservationComplete: (date: string, id: string) => void; // 예약 완료 처리
	restoreReservation: (date: string, id: string) => void; // 완료된 예약 복원 처리
}

// Zustand 스토어 생성
const useReservationsStore = create<ReservationsState>((set) => ({
	// 초기 상태 정의
	reservations: {},
	completedReservations: {},

	// 예약 상태 설정 함수
	setReservations: (reservations) => set({ reservations }),

	// 예약 완료 처리 함수
	reservationComplete: (date, id) =>
		set((state) => {
			// 기존 예약과 완료된 예약 복사본 생성
			const updatedReservations = { ...state.reservations };
			const updatedCompletedReservations = { ...state.completedReservations };

			// 해당 날짜의 예약 중 완료할 예약 찾기
			const reservation = updatedReservations[date].find((res) => res.id === id);

			// 해당 예약을 완료된 예약에 추가하고, 활성 예약에서는 제거
			if (reservation) {
				updatedReservations[date] = updatedReservations[date].filter((res) => res.id !== id);

				// 해당 날짜에 더 이상 예약이 없다면 해당 날짜 삭제
				if (updatedReservations[date].length === 0) {
					delete updatedReservations[date];
				}

				// 완료된 예약에 추가
				if (!updatedCompletedReservations[date]) {
					updatedCompletedReservations[date] = [];
				}
				updatedCompletedReservations[date].push(reservation);
			}

			// 새로운 상태 반환
			return { reservations: updatedReservations, completedReservations: updatedCompletedReservations };
		}),

	// 완료된 예약 복원 처리 함수
	restoreReservation: (date, id) =>
		set((state) => {
			// 기존 예약과 완료된 예약 복사본 생성
			const updatedReservations = { ...state.reservations };
			const updatedCompletedReservations = { ...state.completedReservations };

			// 해당 날짜의 완료된 예약 중 복원할 예약 찾기
			const reservation = updatedCompletedReservations[date].find((res) => res.id === id);

			// 해당 예약을 활성 예약에 추가하고, 완료된 예약에서는 제거
			if (reservation) {
				updatedCompletedReservations[date] = updatedCompletedReservations[date].filter((res) => res.id !== id);

				// 해당 날짜에 더 이상 완료된 예약이 없다면 해당 날짜 삭제
				if (updatedCompletedReservations[date].length === 0) {
					delete updatedCompletedReservations[date];
				}

				// 활성 예약에 추가
				if (!updatedReservations[date]) {
					updatedReservations[date] = [];
				}
				updatedReservations[date].push(reservation);
			}

			// 새로운 상태 반환
			return { reservations: updatedReservations, completedReservations: updatedCompletedReservations };
		}),
}));

export default useReservationsStore;
export type { Reservation, ReservationsByDate };
