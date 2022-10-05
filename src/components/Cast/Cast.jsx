import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCastById } from '../../api/movieDBApi';
import { Loader } from 'components/Loader';
import { CastList, CastImg, CastName, CastCharacter } from './Cast.styled';

export function Cast() {
	const [cast, setCast] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const { movieId } = useParams();

	useEffect(() => {
		setIsLoading(true);
		getMovieCastById(movieId)
			.then(({ data }) => {
				setCast(data.cast);
				// console.log(data.cast);
			})
			.catch(console.log)
			.finally(() => {
				setIsLoading(false);
			});;
	}, [movieId]);

	return (
		<CastList>
			{isLoading && <Loader/>}
			{cast &&
            cast.map(({ id, name, character, profile_path }) => {

               const checkImage = profile_path ? `http://image.tmdb.org/t/p/w500${profile_path}` : 'https://archives.csusm.edu/student-newspapers/files/original/471bb8c5afdfe8e769c93f1aee2ad1c1.jpg'
               return (
					<li key={id}>
						<CastImg src={checkImage} alt={name} width={100} height={150} />
                  <CastName>{name}</CastName>
                  <CastCharacter>Character: { character}</CastCharacter>
					</li>
				)
            })}
		</CastList>
	);
}

