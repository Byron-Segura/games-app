import { getDates } from '../../helpers/getDates'
import { API_KEY, getProxyUrl } from '../similar_games/fetchSimilarGames'

async function getRecentReleases () {
  const { lastMonthDate, currentDate } = getDates()
  const API_URL = `https://www.giantbomb.com/api/releases/?api_key=${API_KEY}&format=json&filter=release_date:${lastMonthDate}|${currentDate}&field=name,id,deck,image,release_date,description,game`

  try {
    const res = await fetch(getProxyUrl(API_URL))
    const json = await res.json()

    const gameData = json.results

    return gameData.map(game => ({
      name: game.name,
      id: game.id,
      cover: game.image.medium_url,
      release: [game.release_date.slice(0, 10)]
    }))
  } catch {
    throw new Error('Failed to find games :(')
  }
}

export async function fetchLatestGames () {
  const gamesDataResult = await getRecentReleases()
  const data = gamesDataResult

  return data
}
