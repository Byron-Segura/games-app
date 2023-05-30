import { SearchForm } from './SearchForm'

export function SimilarGames () {
  return (
    <section>
      <h2 className='text-rose-900  text-3xl text font-bold'>Discover Similar Games</h2>
      <p className='mt-4 text-base '>Search for video games recommendations, and discover a list of similar titles.
      </p>
      <SearchForm />
    </section>
  )
}
