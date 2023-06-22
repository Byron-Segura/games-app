import { API_KEY, getProxyUrl } from '../similar_games/fetchSimilarGames'

async function getGameBySearch (search) {
  const API_URL = `https://www.giantbomb.com/api/search/?api_key=${API_KEY}&format=json&query=${search}&resources=game&field_list=name,id,image,original_release_date,deck`

  try {
    const res = await fetch(getProxyUrl(API_URL))
    const json = await res.json()

    const gameData = json.results

    return gameData.map(game => ({
      name: game.name,
      id: game.id,
      description: game.deck,
      cover: game.image.medium_url,
      release: game.original_release_date
    }))
  } catch (err) {
    console.log(err)
    return null
  }
}

export async function fetchSearchGame (search) {
  try {
    const gameDataResult = await getGameBySearch(search)
    const data = gameDataResult.slice(0, 1)

    return data
  } catch (err) {
    console.log(err)
    return null
  }
}
