import { fetchSimilarGames } from '../../services/giantAPI/similar_games/fetchSimilarGames'
import { SearchForm } from '../../components/SearchForm'
import { Title } from '../shared/Title'
import { useGames } from '../../hooks/useGames'
import { Loading } from '../../components/Loading'
import { Games } from '../../components/Games'

export function SimilarGames () {
  const { getGames, games, loading } = useGames()

  const handleSearch = async (search) => {
    await getGames(fetchSimilarGames, search)
  }

  return (
    <section>
      <Title text='Discover Similar Games' />
      <p className='mt-4 text-base md:ml-4'>Search for your favorites video games and discover a list of similar titles.
      </p>
      <SearchForm onSearch={handleSearch} labelText='Search for similar Games' />

      <div className='mt-8'>
        {loading ? <Loading /> : ''}
        {games.length > 0 ? <Games games={games} /> : ''}
      </div>
    </section>
  )
}
