import { Reservation } from "@/store/reservationsStore";
import styled from "styled-components";

interface ReservationCardProps {
	reservation: Reservation;
	date?: string;
	handleComplete: (id: string) => void;
	state: string;
}

const StyledCard = styled.li`
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 16px;
	border: 1px solid #000;
`;

const ReservationCard: React.FC<ReservationCardProps> = ({ reservation, date, handleComplete, state }) => {
	return (
		<StyledCard>
			{date && <p>날짜: {date}</p>}
			<p>이름: {reservation.name}</p>
			<p>예약 시간: {reservation.time}</p>
			<p>예약 인원: {reservation.partySize}</p>
			<p>코멘트: {reservation.comment}</p>
			<p>메뉴: {reservation.menu.join(", ")}</p>
			<button onClick={() => handleComplete(reservation.id)}>{state}</button>
		</StyledCard>
	);
};

export default ReservationCard;
