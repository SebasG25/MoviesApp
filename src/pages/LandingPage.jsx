import { MoviesGrid } from '../components/MoviesGrid'
import { SearchBar } from '../components/SearchBar'
import { useQuery } from '../hooks/useQuery'
import { useDebounce } from '../hooks/useDebounce'

export const LandingPage = () => {
  const query = useQuery()
  const search = query.get('search')

  const debouncedSearch = useDebounce(search, 300)

  return (
    <div>
      <SearchBar />
      <MoviesGrid key={debouncedSearch} search={debouncedSearch}/>
    </div>
  )
}
