import ReservationCard from "@/components/common/ReservationCard";
import useReservationsStore, { ReservationsByDate } from "@/store/reservationsStore";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const DetailPage = styled.section`
	& h2 {
		font-size: 32px;
		font-weight: 700;
		text-align: center;
		padding-bottom: 20px;
	}
`;

const ReservationList = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 16px;

	@media (max-width: 768px) {
		display: flex;
		flex-wrap: nowrap;
		flex-direction: column;
	}
`;

const ReservationDetail: React.FC = () => {
	// 상세주소에서 날짜가져오기
	const { date } = useParams<{ date: string }>();
	const navigate = useNavigate();

	// 예약데이터 가져오기
	const reservations: ReservationsByDate = useReservationsStore((state) => state.reservations);
	const completeReservation = useReservationsStore((state) => state.reservationComplete);

	// 하이픈 없는 날짜를 원래 형태로 변환
	const formattedDate = date ? date.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3") : "";

	// 해당 날짜에 해당하는 예약들
	const dateReservations = reservations[formattedDate] || [];

	const handleComplete = (id: string) => {
		if (date) {
			completeReservation(formattedDate, id);
		}
	};

	// 예약이 전부 사라지면 뒤로가기
	useEffect(() => {
		if (dateReservations.length === 0) {
			navigate(-1); // 이전 페이지로 이동
		}
	}, [dateReservations.length, navigate]);

	return (
		<DetailPage>
			<h2>{formattedDate}</h2>
			<ReservationList>
				{dateReservations.map((reservation) => (
					<ReservationCard
						key={reservation.id}
						reservation={reservation}
						handleComplete={handleComplete}
						state='완료'
					/>
				))}
			</ReservationList>
		</DetailPage>
	);
};

export default ReservationDetail;
