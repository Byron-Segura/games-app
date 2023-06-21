import { useGames } from '../hooks/useGames'
import { useSearch } from '../hooks/useSearch'
import { Games } from './Games'

export function SearchForm ({ fetchAPI, labelText }) {
  const { search, updateSearch, error } = useSearch()
  const { getGames, games, loading } = useGames()

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    getGames(search, fetchAPI)
    updateSearch('')
  }

  return (
    <section>
      <form className='text-lg mt-6' onSubmit={handleSubmit}>
        <label htmlFor='input' className='text-base text-rose-900'>
          {labelText}
        </label>
        <br />
        <input onChange={handleChange} name='input' id='input' className='border border-gray-300 focus:border-gray-700 outline-none focus:outline-none h-10 px-3 py-1 hover:outline-none min-w-full mb-4' autoComplete='off' type='text' value={search} required />

        {error && <p className='text-red-600'>{error}</p>}
      </form>
      <main>
        {loading ? 'Cargando...' : ''}
        {games.length > 0 ? <Games games={games} /> : ''}
      </main>
    </section>
  )
}
