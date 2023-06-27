import { fetchSimilarGames } from '../../services/giantAPI/similar_games/fetchSimilarGames'
import { SearchForm } from '../../components/SearchForm'
import { Title } from '../shared/Title'

export function SimilarGames () {
  return (
    <section>
      <Title text='Discover Similar Games' />
      <p className='mt-4 text-base '>Search for your favourites video games and discover a list of similar titles.
      </p>
      <SearchForm fetchAPI={fetchSimilarGames} labelText='Search for similar Games' />
    </section>
  )
}
