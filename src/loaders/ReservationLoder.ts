import axios from "axios";
import { ReservationsByDate } from "@/store/reservationsStore";

export const reservationLoader = async () => {
	const response = await axios.get("https://devhyuck.github.io/dummy-data/reservation.json");
	const reservations: ReservationsByDate = response.data.reservation;

	return reservations;
};
