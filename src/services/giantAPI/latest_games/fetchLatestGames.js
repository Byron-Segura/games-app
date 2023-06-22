import { getDates } from '../../helpers/getDates'
import { API_KEY, getProxyUrl } from '../similar_games/fetchSimilarGames'

async function getRecentReleases () {
  const { lastMonthDate, currentDate } = getDates()
  const API_URL = `https://www.giantbomb.com/api/releases/?api_key=${API_KEY}&format=json&filter=release_date:${lastMonthDate}|${currentDate}&field=name,id,deck,image,release_date,description,game`

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
      release: game.release_date.slice(0, 10)
    }))
  } catch (err) {
    console.log(err)
    return null
  }
}

export async function fetchLatestGames () {
  try {
    const gamesDataResult = await getRecentReleases()
    const data = gamesDataResult

    return data
  } catch (err) {
    console.log(err)
    return null
  }
}
