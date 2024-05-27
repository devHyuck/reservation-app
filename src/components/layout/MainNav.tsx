import { BiSolidFoodMenu } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { RiTimelineView } from "react-icons/ri";
import styled from "styled-components";
import NavMenu from "../common/NavMenu";

const NavBar = styled.nav`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	width: 80px;
	border-right: 1px solid #000;

	@media (max-width: 768px) {
		top: auto;
		right: 0;
		width: auto;
		height: 80px;
		border-right: none;
		border-top: 1px solid #000;
	}
`;

const NavMenuList = styled.ul`
	display: flex;
	flex-direction: column;

	@media (max-width: 768px) {
		flex-direction: row;
		height: 100%;
	}
`;

const MainNav: React.FC = () => {
	const navMenuItems = [
		{ icon: <RiTimelineView size={24} />, text: "예약관리", link: "/" },
		{ icon: <BiSolidFoodMenu size={24} />, text: "메뉴관리", link: "/menu" },
		{ icon: <FaSearch size={24} />, text: "검색", link: "/search" },
		{ icon: <IoSettingsSharp size={24} />, text: "설정", link: "/setting" },
	];

	return (
		<NavBar>
			<NavMenuList>
				{navMenuItems.map((item, idx) => (
					<NavMenu key={idx} icon={item.icon} text={item.text} link={item.link} />
				))}
			</NavMenuList>
		</NavBar>
	);
};

export default MainNav;
