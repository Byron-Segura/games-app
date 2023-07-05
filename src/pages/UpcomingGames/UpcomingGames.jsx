import { useEffect } from 'react'
import { useGames } from '../../hooks/useGames'
import { fetchUpcomingGames } from '../../services/giantAPI/upcoming_games/fetchUpcomingGames'
import { Games } from '../../components/Games'
import { Loading } from '../../components/Loading'
import { Title } from '../shared/Title'

export function UpcomingGames () {
  const { getGames, loading, games } = useGames()

  useEffect(() => {
    getGames(fetchUpcomingGames)
  }, [])

  return (
    <section>
      <Title text='Upcoming Games' />
      <p className='mt-4 text-base md:ml-4'>Upcoming videogames for the next months</p>

      <div className='mt-8'>
        {loading ? <Loading /> : ''}
        {games.length > 0 ? <Games games={games} /> : ''}
      </div>
    </section>
  )
}
