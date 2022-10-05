import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
	display: block;
	width: 70px;
	text-align: center;
	padding: 10px 20px;
	margin-top: 20px;
	margin-bottom: 20px;
	text-decoration: none;
	font-family: 'Scada', sans-serif;
	font-size: 16px;
	color: white;
	box-shadow: rgba(231, 158, 63, 0.17) 0px -23px 25px 0px inset,
		rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
		rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
		rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
		rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}

	&:focus,
	&:hover {
		color: #de6b10;
	}
`;

export const MovieBox = styled.div`
	display: flex;
	padding-bottom: 10px;
	border-bottom: 1px solid #de6b10;
`;

export const MovieImg = styled.img`
	margin-right: 30px;
	width: 300px;
	height: 400px;
`;

// export const MovieTitle = styled.h2`

// `;

export const MovieScoreText = styled.p`
	color: #e3cfbfed;
`;

export const MovieOverviewText = styled.p`
	padding: 0;
	display: flex;
	width: 100%;
	color: #e3cfbfed;
`;

export const MovieGenresText = styled.p`
	color: #e3cfbfed;
	font-size: 14px;
`;

// export const MovieAdditionalBox = styled.div`
// 	color: #e3cfbfed;
// 	font-size: 14px;
// `;

export const MovieAdditionalTitle = styled.h3`
	display: block;
	text-align: center;
	color: white;
	font-size: 24px;
	margin-bottom: 40px;
`;

export const MovieAdditionalList = styled.ul`
	list-style: none;
	display: flex;
	justify-content: space-around;
`;

export const MovieAdditionalLink = styled(NavLink)`
	display: block;
	margin-bottom: 10px;
	padding: 10px 20px;
	text-decoration: none;

	width: 70px;
	text-align: center;

	text-decoration: none;
	font-family: 'Scada', sans-serif;
	font-size: 16px;
	color: white;
	box-shadow: rgba(231, 158, 63, 0.17) 0px -23px 25px 0px inset,
		rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
		rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
		rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
		rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}

	&:focus,
	&:hover {
		color: #de6b10;
	}
`;

// export const MovieAdditionalBox = styled.div`
// 	list-style: none;
// `;
