import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { getMoviesByQuery } from '../../api/movieDBApi';
import {
	Form,
	Input,
	Button,
	MovieList,
	MovieItem,
	StyledLink,
	HomeImg,
	HomeText
} from './Movies.styled';
import { Loader } from 'components/Loader';


export function Movies() {
	//для хранения значений с инпута
	const [query, setQuery] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	// для хранения массива с сервера
	const [movies, setMovies] = useState(null);

	//для хранения ссылки на нашу форму
	const form = useRef();

	const location = useLocation();

	useEffect(() => {
		if (query) {
			setIsLoading(true);
			getMoviesByQuery(query)
				.then(({ data }) => {
					console.log(data);
					setMovies(data.results);
				})
				.catch(console.log())
				.finally(() => {
					setIsLoading(false);
				});
		}
	}, [query]);

	const handleSubmitForm = e => {
		e.preventDefault();
		const { searchQuery } = e.target.elements;
		setQuery(searchQuery.value);

		//чистка формы при помощи реф и свойства current
		form.current.reset();
	};

	return (
		<>
			<Form ref={form} onSubmit={handleSubmitForm}>
				<Input name="searchQuery" placeholder="Enter movie to search"></Input>
				<Button type="submit">Search</Button>
			</Form>

			{isLoading ? (
				<Loader />
			) : (
				<MovieList>
					{movies &&
						movies.map(({ id, title, poster_path }) => (
							<MovieItem key={id}>
								<StyledLink to={`/movies/${id}`} state={{ from: location }}>
									<HomeImg
										alt={title}
										src={`http://image.tmdb.org/t/p/w500${poster_path}`}
										// width={200}
									/>
									<HomeText>{title}</HomeText>
								</StyledLink>
							</MovieItem>
						))}
				</MovieList>
			)}
		</>
	);
}

