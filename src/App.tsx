import { Outlet } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import MainNav from "./components/layout/MainNav";

const App = () => {
	return (
		<>
			<GlobalStyle />
			<MainNav />
			<Outlet />
		</>
	);
};

export default App;
