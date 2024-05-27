import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Reservations from "./pages/Reservations";
import ReservationDetail from "./pages/ReservationDetail";
import CompletedReservations from "./pages/CompletedReservations";
import MenuList from "./pages/MenuList";
import { reservationLoader } from "./loaders/ReservationLoder";
import { MenuLoader } from "./loaders/MenuLoader";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to='/reservations' />, // 기본 경로로 들어왔을 때 리다이렉트
	},
	{
		path: "/reservations",
		element: <App />,
		children: [
			{
				path: "",
				element: <Reservations />,
				loader: reservationLoader,
			},
			{
				path: ":date",
				element: <ReservationDetail />,
			},
			{
				path: "completed",
				element: <CompletedReservations />,
			},
		],
	},
	{
		path: "/menu",
		element: <App />,
		children: [
			{
				path: "",
				element: <MenuList />,
				loader: MenuLoader,
			},
		],
	},
]);

export default router;
