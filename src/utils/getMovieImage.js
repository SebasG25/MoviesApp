import placeholderImage from '../static/placeholder_image.jpg'

const IMAGE_API = 'https://image.tmdb.org/t/p/w'

export const getMovieImage = (path, width) => {
    console.log(`${IMAGE_API}${width}${path}`)
    console.log(`https://image.tmdb.org/t/p/w500${path}`)
    return !path ? placeholderImage : `${IMAGE_API}${width}${path}`
}