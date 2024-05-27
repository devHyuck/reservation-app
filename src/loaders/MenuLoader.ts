import axios from "axios";

export const MenuLoader = async (): Promise<unknown> => {
	const response = await axios.get("https://devhyuck.github.io/dummy-data/menu.json");
	const menu = response.data.menu;

	return menu;
};
