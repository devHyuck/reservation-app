import useMenuStore from "@/store/menuStore";
import { useState } from "react";
import styled from "styled-components";

const StyledCard = styled.li`
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 16px;
	border: 1px solid #000;
`;

interface MenuCardProps {
	id: string;
	name: string;
	price: string;
}

const MenuCard = ({ id, name, price }: MenuCardProps) => {
	const menuItems = useMenuStore((state) => state.menu);
	const setMenu = useMenuStore((state) => state.setMenu);

	const [isEditing, setIsEditing] = useState(false);
	const [newName, setName] = useState(name);
	const [newPrice, setPrice] = useState(price);

	const handleEdit = () => {
		const newMenu = [...menuItems];
		const index = newMenu.findIndex((item) => item.id === id);
		newMenu[index] = { id, name: newName, price: newPrice };
		setMenu(newMenu);
		setIsEditing(false);
	};

	return (
		<StyledCard>
			{isEditing ? (
				<>
					<input type='text' value={newName} onChange={(e) => setName(e.target.value)} />
					<input type='text' value={newPrice} onChange={(e) => setPrice(e.target.value)} />
					<button onClick={handleEdit}>완료</button>
				</>
			) : (
				<>
					<p>{name}</p>
					<p>가격 : {price}</p>
					<button onClick={() => setIsEditing(true)}>수정</button>
				</>
			)}
		</StyledCard>
	);
};

export default MenuCard;
