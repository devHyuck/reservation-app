import { Outlet } from "react-router-dom";
import GlobalStyle from "@/styles/GlobalStyle";
import MainNav from "@/components/layout/MainNav";
import { PaddingLayout } from "@/components/layout/PaddingLayout";

const App = () => {
	return (
		<>
			<GlobalStyle />
			<MainNav />
			<PaddingLayout>
				<Outlet />
			</PaddingLayout>
		</>
	);
};

export default App;
