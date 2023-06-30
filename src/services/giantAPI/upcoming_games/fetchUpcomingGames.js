import { getDates } from '../../helpers/getDates'
import { API_KEY, getProxyUrl } from '../similar_games/fetchSimilarGames'

async function getRecentReleases () {
  const { nextYearDate, currentDate } = getDates()
  const API_URL = `https://www.giantbomb.com/api/releases/?api_key=${API_KEY}&format=json&filter=release_date:${currentDate}|${nextYearDate}`

  try {
    const res = await fetch(getProxyUrl(API_URL))
    const json = await res.json()

    const gameData = json.results

    return gameData.map(game => ({
      name: game.name,
      id: game.id,
      cover: game.image.medium_url,
      release: [game.expected_release_year, game.expected_release_month, game.expected_release_day]
    }))
  } catch (err) {
    return new Error('Falied to find games :(')
  }
}

export async function fetchUpcomingGames () {
  try {
    const gamesDataResult = await getRecentReleases()
    const data = gamesDataResult

    return data
  } catch (err) {
    console.log(err)
    return null
  }
}
