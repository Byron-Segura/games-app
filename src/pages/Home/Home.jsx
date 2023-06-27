import { SearchForm } from '../../components/SearchForm'
import { fetchSearchGame } from '../../services/giantAPI/search_game/fetchSearchGames'
import { Title } from '../shared/Title'

export function Home () {
  return (
    <section>
      <Title text='Search for a specific game' />
      <SearchForm fetchAPI={fetchSearchGame} labelText='Search game info' />
    </section>
  )
}
