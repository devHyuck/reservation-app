import styled from "styled-components";

interface ReservationSummaryProps {
	date: string;
	reservationsCount: number;
	onClick: (date: string) => void;
}

const StyledSummaryCard = styled.li`
	padding: 16px;
	border: 1px solid #000;
	cursor: pointer;
`;

const DateTitle = styled.h2`
	font-weight: 700;
	font-size: 24px;
	padding-bottom: 8px;
`;

const ReservationsSummary: React.FC<ReservationSummaryProps> = ({ date, reservationsCount, onClick }) => {
	return (
		<StyledSummaryCard onClick={() => onClick(date)}>
			<DateTitle>{date}</DateTitle>
			<p>{reservationsCount}개의 예약</p>
		</StyledSummaryCard>
	);
};

export default ReservationsSummary;
