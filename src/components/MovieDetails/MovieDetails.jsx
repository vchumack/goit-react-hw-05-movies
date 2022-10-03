// import { Movies } from 'pages/Movies';
import { useEffect, useState } from 'react';
import { NavLink, useParams, Link, useLocation  } from 'react-router-dom';
import { getMovieById } from '../../api/movieDBApi';

export function MovieDetails({backPath}) {
	//вытаскиваем id фильма, на который нажали
	const { movieId } = useParams();
	console.log(movieId);

	// сохраняем данные из сервера
   const [movie, setMovie] = useState(null);
   
   const location = useLocation();
   // вызов useNavigate
   // const navigate = useNavigate();

	useEffect(() => {
		getMovieById(movieId)
			.then(({ data }) => {
				setMovie(data);
				console.log(data);
			})
			.catch(console.log);
   }, [movieId]);
   
   function getGenres(){
      // console.log((movie.genres));
      const result = movie.genres.map(genre => genre.name);
      // console.log(result.join(', '))
      return result.join(', ')
   }

  console.log(location.state.from.pathname)

	return (
		<>
         {/* <button type="button" onClick={handleBackBtnClick}>Go Back</button> */}
         <Link to={location.state.from.pathname}>Go Back</Link>
			{movie && (
				<div>
					<img alt={movie.title} src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} width={200}></img>
					<div>
						<h2>{movie.title} ({movie.release_date.slice(0, 4)})</h2>
						<p>User Score: {Math.round((Number(movie.vote_average)*100)/10)}%</p>
						<h3>Overview</h3>
                  <p>{movie.overview}</p>
						<h4>Genres</h4>
                  <p>{getGenres()}</p>
					</div>
				</div>
			)}
			<hr />
			<div>
				<p>Additional information</p>
				<ul>
					<li>
						<NavLink>Cast</NavLink>
					</li>
					<li>
						<NavLink>Reviews</NavLink>
					</li>
				</ul>
			</div>
			<hr />
		</>
	);
}
