import { MovieCard } from './MovieCard'
import movies from '../static/movies.json'
import styles from '../styles/MoviesGrid.module.css'

export const MoviesGrid = () => {
    return (
        <ul className={styles.moviesGrid}>
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </ul>
    )
}