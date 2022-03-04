import { MoviesGrid } from './MoviesGrid';
import styles from '../styles/App.module.css'

export const App = () => {
  return (
    <div className="App">
      <header>
        <h1 className={styles.title}>Movies</h1>
      </header>
      <main>
        <MoviesGrid />
      </main>
    </div>
  );
}
