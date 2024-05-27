import MenuCard from "@/components/common/MenuCard";
import useMenuStore, { MenuItem } from "@/store/menuStore";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";

const StyledMenuList = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 16px;

	@media (max-width: 768px) {
		display: flex;
		flex-wrap: nowrap;
		flex-direction: column;
	}
`;

const MenuList = () => {
	// 메뉴 데이터를 가져오기
	const loadedMenu = useLoaderData() as MenuItem[];
	const menuItems = useMenuStore((state) => state.menu);
	const setMenu = useMenuStore((state) => state.setMenu);

	useEffect(() => {
		if (menuItems.length === 0) {
			setMenu(loadedMenu);
		}
	}, [loadedMenu, menuItems, setMenu]);

	return (
		<StyledMenuList>
			{menuItems.map((item) => (
				<MenuCard key={item.id} id={item.id} name={item.name} price={item.price} />
			))}
		</StyledMenuList>
	);
};

export default MenuList;
