import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
	display: flex;
	justify-content: center;
	padding: 10px 10px;

	font-size: 22px;

	background: linear-gradient(90deg, #000000, #0a0740);
	box-shadow: #de6b10 0px 1px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
		rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(165, 112, 6, 0.09) 0px 16px 8px,
		rgba(0, 0, 0, 0.09) 0px 32px 16px; ;
`;

export const HeaderList = styled.ul`
	display: flex;
	gap: 20px;
	list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
	text-decoration: none;

	font-family: 'Scada', sans-serif;
	/* text-shadow: 0 2px 0 rgba(255, 255, 255, 0.5); */
	font-size: 24px;
	line-height: 40px;

	color: #f4f4f7;

	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}

	&:focus,
	&:hover {
		color: #d28c539e;
	}
`;
