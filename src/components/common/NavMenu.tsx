import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavMenu = styled.li`
	flex-grow: 1;
`;

const Link = styled(RouterLink)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 8px;
	padding: 8px 0;

	@media (max-width: 768px) {
		height: 100%;
	}
`;

interface NavMenuProps {
	icon: React.ReactNode;
	text: string;
	link: string;
}

const NavMenu: React.FC<NavMenuProps> = ({ icon, text, link }) => {
	return (
		<StyledNavMenu>
			<Link to={link}>
				{icon}
				<p>{text}</p>
			</Link>
		</StyledNavMenu>
	);
};

export default NavMenu;
