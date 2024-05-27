import { ReservationsByDate } from "@/store/reservationsStore";

export const reservationLoader = async () => {
	const response = await fetch("https://devhyuck.github.io/dummy-data/reservation.json");
	const resData = await response.json();
	const reservations: ReservationsByDate = resData.reservation;

	return reservations;
};
