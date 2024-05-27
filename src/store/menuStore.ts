import { create } from "zustand";

export interface MenuItem {
	id: string;
	name: string;
	price: string;
}

interface MenuStore {
	menu: MenuItem[];
	setMenu: (menu: MenuItem[]) => void;
}

const useMenuStore = create<MenuStore>((set) => ({
	menu: [],
	setMenu: (menu: MenuItem[]) => set({ menu }),
}));

export default useMenuStore;
