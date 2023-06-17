import { useCallback, useState } from 'react'

export function useGames () {
  const [loading, setLoading] = useState(false)
  const [, setError] = useState(null)
  const [games, setGames] = useState([])

  const getGames = useCallback(async (search, fetchAPI) => {
    try {
      setLoading(true)
      setError(null)
      const newGames = await fetchAPI(search)
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
