import styles from '../styles/MovieCard.module.css'

export const MovieCard = ({ movie }) => {
    const { title, poster_path } = movie
    const imageUrl = `https://image.tmdb.org/t/p/w300${poster_path}`
    return (
        <li className={styles.movieCard}>
            <img
                width={230}
                height={345}
                className={styles.movieImage}
                src={imageUrl} alt={title}
            />
            <div>{title}</div>
        </li>
    )
}