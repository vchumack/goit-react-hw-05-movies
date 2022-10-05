import { getTrendingMovies } from 'api/movieDBApi';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


import {
	WrapperHome,
	Title,
	StyledLink,
	HomeList,
	HomeItem,
	HomeImg,
	HomeText
} from './Home.styled';
import { Loader } from 'components/Loader';

export function Home() {
	const [movies, setMovies] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setIsLoading(true);
		getTrendingMovies()
			.then(({ data }) => {
				console.log(data.results);
				setMovies(data.results);
			})
			.catch(console.log)
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	return (
		
		<WrapperHome>
			
				<Title>Trending Today</Title>
			{isLoading ? (
				<Loader />
			) : (
				<HomeList>
					{movies &&
						movies.map(({ id, title, poster_path }) => (
							<HomeItem key={id}>
								<StyledLink to={`/movies/${id}`} state={{ from: location }}>
									<HomeImg
										alt={title}
										src={`http://image.tmdb.org/t/p/w500${poster_path}`}
									/>
									<HomeText>{title}</HomeText>
								</StyledLink>
							</HomeItem>
						))}
				</HomeList>
			)}
			
			</WrapperHome>
			
	);
}
