import { useSearchParams } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import styles from '../styles/SearchBar.module.css'

export const SearchBar = () => {
    const [query, setQuery] = useSearchParams()

    const search = query.get('search') ?? ''

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChangeInput = (e) => {
        const text = e.target.value
        setQuery({search: text})
    }

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input
                    className={styles.searchInput}
                    type='text'
                    value={search}
                    autoFocus
                    placeholder='Search your favorite movie'
                    aria-label='Search Movies'
                    onChange={handleChangeInput}
                />
                <FaSearch size={20} color='black' className={styles.searchIcon} />
            </div>
        </form>
    )
}
