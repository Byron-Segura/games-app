function ListOfGames ({ games }) {
  return (
    <ul className='grid grid-cols-1 md:ml-4 md:flex md:flex-wrap '>
      {
        games.map((game) => (
          <li key={game.id} className='mt-6 mx-auto bg-white shadow-md justify-between p-6 rounded-lg max-w-sm md:flex md:flex-row-reverse md:min-w-full'>
            <div className=' md:ml-4 md:flex-1'>
              <h3 className='text-xl font-bold text-rose-900 border-b-2 border-rose-700 w-fit'>{game.name}</h3>
              <p className='min-w-full mt-4'>{game.description}</p>
              <p className='mt-6'><strong className='text-rose-900'>Release Date: </strong>{game.release || 'Unknown'}</p>
            </div>
            <img src={game.cover} alt={game.title} className='mx-auto w-56 object-contain md:mr-4' />
          </li>
        ))
      }
    </ul>
  )
}

function NoGames () {
  return (
    <h2>No games found</h2>
  )
}

export function Games ({ games }) {
  const hasGames = games.length > 0

  return (
    hasGames
      ? <ListOfGames games={games} />
      : <NoGames />
  )
}
