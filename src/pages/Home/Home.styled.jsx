import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WrapperHome = styled.div`
	max-width: 1170px;
	padding: 0 15px;
	margin: 0 auto;
	text-align: center;
`;

export const Title = styled.h2`
	padding: 10px 20px;
	margin: 1em 0 0.5em 0;

	color: #f4f2f0;
	font-size: 20px;
	line-height: 40px;
	font-weight: 100;
	text-transform: uppercase;
	font-family: 'Josefin Sans', sans-serif;
	letter-spacing: 1px;
`;

export const HomeList = styled.ul`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 20px;
	list-style: none;
`;

export const HomeItem = styled.li`
	/* width: 20%; */
`;

export const StyledLink = styled(Link)`
	text-decoration: none;

	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;

export const HomeImg = styled.img`
	display: block;
	width: 300px;
	height: 450px;
	border-radius: 20px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
		rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const HomeText = styled.p`
	font-family: 'Scada', sans-serif;
	font-size: 16px;
	color: white;

	&:focus,
	&:hover {
		color: #de6b10;
	}
`;
