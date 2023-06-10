import { useCallback, useState } from 'react'
import { fetchSimilarGames } from '../services/similar_games/similar-games'

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
    } finally {
      setLoading(false)
      console.log(games)
    }
  }, [])

  return { loading, getGames, games }
}
