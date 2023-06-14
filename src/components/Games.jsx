function ListOfGames ({ games }) {
  return (
    <ul className='grid grid-cols-1 md:ml-4 md:flex md:flex-wrap '>
      {
        games.map(game => (
          <li key={game.id} className='mx-auto mt-6 bg-white shadow-md rounded-md p-4 max-w-sm md:flex md:items-center md:flex-row-reverse md:min-w-full'>
            <div className=' md:ml-4'>
              <h3 className='text-xl font-bold'>{game.name}</h3>
              <p className='mt-2 min-w-full'>{game.description}</p>
            </div>
            <img src={game.cover} alt={game.title} className='mx-auto h-80 w-80 object-contain' />
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
