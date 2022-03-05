import placeholderImage from '../static/placeholder_image.jpg'

const IMAGE_API = 'https://image.tmdb.org/t/p/w'

export const getMovieImage = (path, width) => {
    return !path ? placeholderImage : `${IMAGE_API}${width}${path}`
}