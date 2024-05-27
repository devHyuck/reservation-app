import { useLoaderData, useNavigate } from "react-router-dom";
import useReservationsStore, { ReservationsByDate } from "../store/reservationsStore";
import ReservationsSummary from "../components/common/ReservationsSummary";
import styled from "styled-components";
import { useEffect } from "react";

const ReservationsList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const Reservations = () => {
	// 예약데이터 가져오기
	const loadedReservations = useLoaderData() as ReservationsByDate;
	const reservations = useReservationsStore((state) => state.reservations);
	const reservationsCompleted = useReservationsStore((state) => state.completedReservations);
	const setReservations = useReservationsStore((state) => state.setReservations);

	useEffect(() => {
		if (Object.keys(reservations).length === 0 && Object.keys(reservationsCompleted).length === 0) {
			setReservations(loadedReservations);
		}
	}, [loadedReservations, reservations, reservationsCompleted, setReservations]);

	// 날짜별 예약카드 클릭시 해당 날짜 예약들 페이지로 이동
	const navigate = useNavigate();
	const handleDateClick = (date: string) => {
		// 날짜에서 하이픈제거
		const address = date.replace(/-/g, "");
		navigate(`/reservations/${address}`);
	};

	// 완료된 예약 개수 계산
	const totalReservationsCount = Object.values(reservationsCompleted).reduce(
		(total, dayReservations) => total + dayReservations.length,
		0
	);

	// 날짜 순으로 예약 정렬
	const sortedReservations = Object.entries(reservations).sort(([dateA], [dateB]) => {
		return new Date(dateA).getTime() - new Date(dateB).getTime();
	});

	return (
		<ReservationsList>
			{sortedReservations
				.filter(([_, reservations]) => reservations.length > 0) // eslint-disable-line @typescript-eslint/no-unused-vars
				.map(([date, reservations]) => (
					<ReservationsSummary
						key={date}
						date={date}
						reservationsCount={reservations.length}
						onClick={() => handleDateClick(date)}
					/>
				))}
			<ReservationsSummary
				date='완료된 예약'
				reservationsCount={totalReservationsCount}
				onClick={() => navigate("/reservations/completed")}
			/>
		</ReservationsList>
	);
};

export default Reservations;
