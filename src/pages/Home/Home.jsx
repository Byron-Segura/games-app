import { Games } from '../../components/Games'
import { Loading } from '../../components/Loading'
import { SearchForm } from '../../components/SearchForm'
import { useGames } from '../../hooks/useGames'
import { fetchSearchGame } from '../../services/giantAPI/search_game/fetchSearchGames'
import { Title } from '../shared/Title'

export function Home () {
  const { getGames, games, loading, error } = useGames()

  const handleSearch = async (search) => {
    await getGames(fetchSearchGame, search)
  }

  return (
    <section>
      <Title text='Search for a specific game' />
      <SearchForm onSearch={handleSearch} labelText='Search game info' />

      <div className='mt-8'>
        {loading ? <Loading /> : <Games games={games} error={error} />}
      </div>
    </section>
  )
}
