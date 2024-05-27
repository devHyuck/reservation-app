import useReservationsStore from "@/store/reservationsStore";
import styled from "styled-components";
import ReservationCard from "@/components/common/ReservationCard";

const ReservationsList = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 16px;
`;

const CompletedReservations = () => {
	const reservations = useReservationsStore((state) => state.completedReservations);
	const restoreReservation = useReservationsStore((state) => state.restoreReservation);

	// 날짜별로 예약을 정렬
	const reservationEntries = Object.entries(reservations).flatMap(([date, dayReservations]) =>
		dayReservations.map((reservation) => ({ ...reservation, date }))
	);

	const handleRestore = (id: string, date: string) => {
		restoreReservation(date, id);
	};

	return (
		<ReservationsList>
			{reservationEntries.map((reservation) => (
				<ReservationCard
					key={reservation.id}
					reservation={reservation}
					date={reservation.date}
					handleComplete={(id) => handleRestore(id, reservation.date!)}
					state='복원'
				/>
			))}
		</ReservationsList>
	);
};

export default CompletedReservations;
