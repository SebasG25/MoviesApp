import { MoviesGrid } from '../components/MoviesGrid'
import { SearchBar } from '../components/SearchBar'
import { useSearchParams } from 'react-router-dom'
import { useDebounce } from '../hooks/useDebounce'

export const LandingPage = () => {
  const [query] = useSearchParams()
  const search = query.get('search')

  const debouncedSearch = useDebounce(search, 300)

  return (
    <div>
      <SearchBar />
      <MoviesGrid key={debouncedSearch} search={debouncedSearch}/>
    </div>
  )
}
