import { useEffect } from 'react'
import { useGames } from '../../hooks/useGames'
import { fetchLatestGames } from '../../services/giantAPI/latest_games/fetchLatestGames'
import { Games } from '../../components/Games'
import { Loading } from '../../components/Loading'
import { Title } from '../shared/Title'

export function LatestReleases () {
  const { getGames, loading, games } = useGames()

  useEffect(() => {
    getGames(fetchLatestGames)
  }, [])

  return (
    <section>
      <Title text='Latest Releases' />
      <p className='mt-4 text-base md:ml-4'>Discover the latest videogame releases</p>

      <div className='mt-8'>
        {loading ? <Loading /> : ''}
        {games.length > 0 ? <Games games={games} /> : ''}
      </div>
    </section>
  )
}
