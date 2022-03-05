import styles from './styles/App.module.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { MovieDetails } from './pages/MovieDetails';
import { LandingPage } from './pages/LandingPage';
import { NotFoundPage } from './pages/NotFoundPage'

export function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to='/'>
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path='/movies/:movieId' element={<MovieDetails />} />
          <Route path='/' element={<LandingPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
