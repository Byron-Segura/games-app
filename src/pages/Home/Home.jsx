import { Games } from '../../components/Games'
import { Loading } from '../../components/Loading'
import { SearchForm } from '../../components/SearchForm'
import { useGames } from '../../hooks/useGames'
import { fetchSearchGame } from '../../services/giantAPI/search_game/fetchSearchGames'
import { Title } from '../shared/Title'

export function Home () {
  const { getGames, games, loading } = useGames()

  const handleSearch = async (search) => {
    await getGames(fetchSearchGame, search)
  }

  return (
    <section>
      <Title text='Search for a specific game' />
      <SearchForm onSearch={handleSearch} labelText='Search game info' />

      <main className='mt-8'>
        {loading ? <Loading /> : ''}
        {games.length > 0 ? <Games games={games} /> : ''}
      </main>
    </section>
  )
}
