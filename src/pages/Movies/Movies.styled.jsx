import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`
	width: 500px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 15px;
	margin: 40px auto;
`;

export const Input = styled.input`
	display: block;
	width: 100%;
	margin: auto;
	padding: 13px;

	box-shadow: rgba(121, 121, 157, 0.25) 0px 30px 60px -12px inset,
		rgba(243, 240, 240, 0.3) 0px 18px 36px -18px inset;

	outline: none;
	border: 0;

	border-radius: 20px;

	font-family: 'Roboto', sans-serif;
	background: transparent;

	color: #de6b10;

	:-webkit-autofill {
		transition: all 5000s ease-in-out 0s;
	}
`;

export const Button = styled.button`
	width: 20%;
	height: 35px;
	padding: 5px 15px;

	font-size: 14px;
	font-weight: 500;

	opacity: 1;
	background-color: rgba(50, 50, 93, 0.25);
	
	border: none;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
border-radius: 20px;
	color: white;

	cursor: pointer;
	transition: transform 250ms linear;

	:hover {
		transform: scale(1.1);
	}
`;

export const MovieList = styled.ul`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 20px;
	list-style: none;
`;

export const MovieItem = styled.li`
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
	width: 290px;

	&:focus,
	&:hover {
		color: #de6b10;
	}
`;
