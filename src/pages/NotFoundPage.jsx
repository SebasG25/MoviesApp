import styles from '../styles/NotFoundPage.module.css'
import NotFoundImage from '../static/NotFoundImage.jpg'

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={NotFoundImage} alt='Not Found' />
      <h1 className={styles.title}>Oops :(!</h1>
    </div>
  )
}
