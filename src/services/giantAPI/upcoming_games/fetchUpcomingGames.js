import { getDates } from '../../helpers/getDates'
import { API_KEY, getProxyUrl } from '../similar_games/fetchSimilarGames'

async function getRecentReleases () {
  const { nextYearDate, currentDate } = getDates()
  const API_URL = `https://www.giantbomb.com/api/releases/?api_key=${API_KEY}&format=json&filter=release_date:${currentDate}|${nextYearDate}`

  const checkDate = (year, month, day) => {
    if (year && month && day) {
      return year + '-' + month + '-' + day
    }
    if (year === null) {
      return 'Unkown'
    }

    if (month === null || day === null) {
      return year
    }
  }

  try {
    const res = await fetch(getProxyUrl(API_URL))
    const json = await res.json()

    const gameData = json.results

    const filteredItems = gameData.filter((game, index, array) => {
      return array.findIndex(obj => obj.name === game.name) === index
    })

    return filteredItems.map(game => ({
      name: game.name,
      id: game.id,
      cover: game.image.medium_url,
      release: checkDate(game.expected_release_year, game.expected_release_month, game.expected_release_day)
    }))
  } catch (err) {
    console.log(err)
    return null
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
