import { useEffect } from 'react'
import { useGames } from '../../hooks/useGames'
import { fetchUpcomingGames } from '../../services/giantAPI/upcoming_games/fetchUpcomingGames'
import { Games } from '../../components/Games'

export function UpcomingGames () {
  const { getGames, loading, games } = useGames()

  useEffect(() => {
    getGames(fetchUpcomingGames)
  }, [])

  return (
    <section>
      <h2 className='text-rose-900  text-3xl text font-bold'>Upcoming Games</h2>
      <p className='mt-4 text-base '>Upcoming games for the next months</p>

      <main>
        {loading ? 'Cargando...' : ''}
        {games.length > 0 ? <Games games={games} /> : ''}
      </main>
    </section>
  )
}
