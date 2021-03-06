import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { get } from '../utils/httpClient';
import { getMovieImage } from '../utils/getMovieImage'
import { Spinner } from '../components/Spinner';
import styles from '../styles/MovieDetails.module.css'

export const MovieDetails = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        get(`/movie/${movieId}`).then(data => {
            setMovie(data)
            setIsLoading(false)
        })
    }, [movieId])

    if (isLoading) return <Spinner />
    
    const { title, genres, overview, poster_path } = movie
    const imageUrl = getMovieImage(poster_path, 500)

    return (
        <div className={styles.detailsContainer}>
            <img
                className={styles.movieImage}
                src={imageUrl}
                alt={title}
            />
            <div  className={styles.movieDetails}>
                <p>
                    <strong>Title:</strong> {title}
                </p>
                <p>
                    <strong>Genres:</strong>{' '}
                    {genres.map(genre => genre.name).join(', ')}
                </p>
                <p>
                    <strong>Description:</strong> {overview}
                </p>
            </div>
        </div>
    );
}