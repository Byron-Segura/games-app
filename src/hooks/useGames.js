import { useCallback, useState } from 'react'
import { fetchSimilarGames } from '../services/similar_games/similarGames'

export function useGames () {
  const [loading, setLoading] = useState(false)
  const [, setError] = useState(null)
  const [games, setGames] = useState([])

  const getGames = useCallback(async (search) => {
    try {
      setLoading(true)
      setError(null)
      const newGames = await fetchSimilarGames(search)
      setGames(newGames)
    } catch (e) {
      setError(e)
      console.log('error')
    } finally {
      setLoading(false)
    }
  }, [])

  return { loading, getGames, games }
}
