import { useCallback, useState } from 'react'
import { CheckGamesInfo } from './useCheckGames'

export function useGames () {
  const [loading, setLoading] = useState(false)
  const [, setError] = useState(null)
  const [games, setGames] = useState([])

  const getGames = useCallback(async (fetchAPI, search) => {
    try {
      setLoading(true)
      setError(null)
      const newGames = await fetchAPI(search)
      const checkedGames = CheckGamesInfo(newGames)
      console.log(newGames)
      setGames(checkedGames)
    } catch (e) {
      setError(e)
      console.log('error')
    } finally {
      setLoading(false)
    }
  }, [])

  return { loading, getGames, games }
}
