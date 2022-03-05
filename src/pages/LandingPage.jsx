import { MoviesGrid } from '../components/MoviesGrid'
import { SearchBar } from '../components/SearchBar'
import { useQuery } from '../hooks/useQuery'

export const LandingPage = () => {
  const query = useQuery()
  const search = query.get('search')

  return (
    <div>
      <SearchBar />
      <MoviesGrid key={search} search={search}/>
    </div>
  )
}
