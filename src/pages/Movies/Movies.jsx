import { useState, useEffect, useRef } from 'react';

import { Link, useLocation } from 'react-router-dom';
import { getMoviesByQuery } from '../../api/movieDBApi';

export function Movies({ onSubmit }) {
	//для хранения значений с инпута
	const [query, setQuery] = useState('');

	// для хранения массива с сервера
   const [movies, setMovies] = useState(null);
   
   //для хранения ссылки на нашу форму
	const form = useRef();
	
	const location = useLocation();

	useEffect(() => {
		if (query) {
			getMoviesByQuery(query)
				.then(({ data }) => {
					console.log(data);
					setMovies(data.results);
				})
				.catch(console.log());
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
			<form ref={form} onSubmit={handleSubmitForm}>
				<input name="searchQuery"></input>
				<button type="submit">Search</button>
			</form>
         <ul>{movies && movies.map(({ id, title }) =>
            <li key={id}>
            <Link to={`/movies/${id}`} state={{from : location}}>{title}</Link>
         </li>)}</ul>
		</>
	);
}
