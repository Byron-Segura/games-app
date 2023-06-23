import { SearchForm } from '../../components/SearchForm'
import { fetchSearchGame } from '../../services/giantAPI/search_game/fetchSearchGames'

export function Home () {
  return (
    <section>
      <h2 className='text-rose-900  text-3xl text font-bold'>Search for a specific game</h2>
      <SearchForm fetchAPI={fetchSearchGame} labelText='Search game info' />
    </section>
  )
}
