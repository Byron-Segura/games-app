import { useCallback, useState } from 'react'
import { CheckGamesInfo } from './useCheckGames'

export function useGames () {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [games, setGames] = useState([])

  const getGames = useCallback(async (fetchAPI, search) => {
    try {
      setLoading(true)
      setError(null)
      setGames([])
      const newGames = await fetchAPI(search)
      const checkedGames = CheckGamesInfo(newGames)
      setGames(checkedGames)
    } catch (e) {
      setError(e)
      setGames([])
    } finally {
      setLoading(false)
    }
  }, [])

  return { loading, getGames, games, error }
}
