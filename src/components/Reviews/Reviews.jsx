import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviewsById } from '../../api/movieDBApi';
import { Loader } from 'components/Loader';
import {ReviewLink, ReviewTitle, ReviewText} from './Reviews.styled'

export function Reviews() {
	const [review, setReview] = useState(null);
	const {movieId} = useParams();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getMovieReviewsById(movieId)
			.then(({ data }) => {
				setReview(data.results);
				console.log(data.results);
			})
			.catch(console.log)
			.finally(() => {
				setIsLoading(false);
			});
	}, [movieId]);

	return (
		<ReviewLink>
			{isLoading && <Loader/>}
			{review?.length ? (
            review.map(({ id, author, content }) => {
               return (
					<li key={id}>
                  <ReviewTitle>Author: {author}</ReviewTitle>
                  <ReviewText> {content}</ReviewText>
					</li>
				)
            })):
            (<p>We don't have any reviews for this movie</p>)
            
            
            }
		</ReviewLink>
	);
}
