import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { useQuery } from "../hooks/useQuery";
import styles from '../styles/SearchBar.module.css'

export const SearchBar = () => {
    const [textSearched, setTextSearched] = useState('')

    const query = useQuery()
    const search = query.get('search') ?? ''

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChangeInput = (e) => {
        const text = e.target.value
        setTextSearched(text)
        navigate(`/?search=${text}`)
    }

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input
                    className={styles.searchInput}
                    type='text'
                    value={textSearched}
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
