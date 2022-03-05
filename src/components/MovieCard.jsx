import { Link } from 'react-router-dom'
import { getMovieImage } from '../utils/getMovieImage'
import styles from '../styles/MovieCard.module.css'

export const MovieCard = ({ movie }) => {
    const { id, title, poster_path } = movie
    const imageUrl = getMovieImage(poster_path, 300)
    return (
        <li className={styles.movieCard}>
            <Link to={`/movies/${id}`}>
                <img
                    width={230}
                    height={345}
                    className={styles.movieImage}
                    src={imageUrl} alt={title}
                />
                <div>{title}</div>
            </Link>
        </li>
    )
}