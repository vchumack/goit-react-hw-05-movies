import { getTrendingMovies } from 'api/movieDBApi';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Home() {
	const [movies, setMovies] = useState(null);
	const location = useLocation();

	useEffect(() => {
		getTrendingMovies()
			.then(({ data }) => {
			console.log(data.results);
			setMovies(data.results);
			})
			.catch(console.log);
	}, []);



	return (
		<>
			<h2>Trending Today</h2>
			<ul>
				{movies &&
					movies.map(({ id, title }) => (
						<li key={id}>
							<Link to={`/movies/${id}`} state={{from : location}}>{title}</Link>
						</li>
					))}
			</ul>
		</>
	);
}
