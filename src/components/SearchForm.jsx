import { useSearch } from '../hooks/useSearch'

export function SearchForm ({ onSearch, labelText }) {
  const { search, updateSearch, error } = useSearch()

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    onSearch(search)
    updateSearch('')
  }

  return (
    <section className='md:ml-4'>
      <form className='text-lg mt-6' onSubmit={handleSubmit}>
        <label htmlFor='input' className='text-base text-rose-900'>
          {labelText}
        </label>
        <input onChange={handleChange} name='input' id='input' className='border border-gray-300 focus:border-gray-700 outline-none focus:outline-none h-10 px-3 py-1 hover:outline-none min-w-full mb-4' autoComplete='off' type='text' value={search} required />

        {error && <p className='text-red-600'>{error}</p>}
      </form>
    </section>
  )
}
