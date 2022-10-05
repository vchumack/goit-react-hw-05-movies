import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import {  useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieById } from '../../api/movieDBApi';
import { Loader } from 'components/Loader';
import {
	StyledLink,
	MovieBox,
	MovieImg,
	MovieScoreText,
	MovieOverviewText,
	MovieGenresText,
	MovieAdditionalList,
	MovieAdditionalLink,
	// MovieAdditionalBox,
	MovieAdditionalTitle
	
} from './MovieDetails.styled';
import { Box } from '../../components/Box';

export function MovieDetails({ backPath }) {
	const [isLoading, setIsLoading] = useState(false);
	//вытаскиваем id фильма, на который нажали
	const { movieId } = useParams();
	console.log(movieId);

	// сохраняем данные из сервера
	const [movie, setMovie] = useState(null);

	const location = useLocation();
	const locationRef = location.state?.from ?? '/';

	// вызов useNavigate
	// const navigate = useNavigate();

	useEffect(() => {
		setIsLoading(true);
		getMovieById(movieId)
			.then(({ data }) => {
				setMovie(data);
				console.log(data);
			})
			.catch(console.log)
			.finally(() => {
				setIsLoading(false);
			});
	}, [movieId]);

	function getGenres() {
		// console.log((movie.genres));
		const result = movie.genres.map(genre => genre.name);
		// console.log(result.join(', '))
		return result.join(', ');
	}

	//   console.log(location.state.pathname)

	return (
		<Box width="800px" ml="auto" mr="auto" pb={2} pt={2} pl={6} pr={6}>
			<StyledLink to={locationRef}>Go Back</StyledLink>
			{isLoading && <Loader />}
			{movie && (
				<MovieBox>
					<MovieImg
						alt={movie.title}
						src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
						
					></MovieImg>
					<div>
						<h2>
							{movie.title} ({movie.release_date.slice(0, 4)})
						</h2>
						<MovieScoreText>
							User Score: {Math.round((Number(movie.vote_average) * 100) / 10)}%
						</MovieScoreText>
						<h3>Overview</h3>
						<MovieOverviewText>{movie.overview}</MovieOverviewText>
						<h4>Genres</h4>
						<MovieGenresText>{getGenres()}</MovieGenresText>
					</div>
				</MovieBox>
			)}
			
			<div>
				<MovieAdditionalTitle>Additional information</MovieAdditionalTitle>
				<MovieAdditionalList>
					<li>
						<MovieAdditionalLink to="cast" state={{ from: location }}>
							Cast
						</MovieAdditionalLink>
					</li>
					<li>
						<MovieAdditionalLink to="reviews" state={{ from: location }}>
							Reviews
						</MovieAdditionalLink>
					</li>
				</MovieAdditionalList>
			</div>

			
			<Suspense fallback={<Loader />}>
				<Outlet />
			</Suspense>
		</Box>
	);
}
