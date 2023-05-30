import { useState } from 'react'

const initialValue = {
  text: ''
}

export function SearchForm () {
  const [value, setValue] = useState(initialValue)

  const handleChange = (event) => {
    const newValue = {
      ...value,
      text: event.target.value
    }

    setValue(newValue)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    setValue(initialValue)
  }

  return (
    <section>
      <form className='text-lg mt-6' onChange={() => handleChange()} onSubmit={() => handleSubmit()}>
        <label htmlFor='input' className='text-base text-rose-900'>
          Search for similar games
        </label>
        <br />
        <input name='input' id='input' className='border border-gray-300 focus:border-gray-700 outline-none focus:outline-none h-10 px-3 py-1 hover:outline-none min-w-full' autoComplete='off' type='text' />
      </form>
    </section>
  )
}
