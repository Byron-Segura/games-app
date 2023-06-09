export const API_KEY = '5191f62bfe38d99afa126157a050966c2cdb1047'

export const getProxyUrl = (apiUrl) => {
  const proxyUrl = `http://localhost:3000/api-proxy?url=${encodeURIComponent(apiUrl)}`

  return proxyUrl
}

async function getGameId (search) {
  const API_URL = `https://www.giantbomb.com/api/search/?api_key=${API_KEY}&format=json&resources=game&query=${search}&field_list=id`

  try {
    const res = await fetch(getProxyUrl(API_URL))
    const json = await res.json()

    if (json.number_of_total_results === 0) {
      throw new Error('Game not found')
    }

    const gameId = json.results[0].id

    return gameId
  } catch (err) {
    throw new Error('Game not found')
  }
}

async function getSimilarGamesId (gameID) {
  const API_URL = `https://www.giantbomb.com/api/game/${gameID}/?api_key=${API_KEY}&format=json&limit=50&field_list=similar_games,name`

  try {
    const res = await fetch(getProxyUrl(API_URL))
    const json = await res.json()

    const similarGames = json.results.similar_games

    const iD = similarGames.map((game) => game.id)
    const gamesIDs = iD.join('|')

    return gamesIDs
  } catch (err) {
    throw new Error('Failed to get similar games')
  }
}

async function getSimilarGamesData (gamesIDs) {
  const API_URL = `https://www.giantbomb.com/api/games/?api_key=${API_KEY}&format=json&filter=id:${gamesIDs}&field_list=name,id,deck,image,original_release_date`

  try {
    const res = await fetch(getProxyUrl(API_URL))
    const json = await res.json()

    if (json.number_of_total_results === 0) {
      throw new Error('No similar games found')
    }

    const gameData = json.results

    return gameData.map((game) => ({
      name: game.name,
      id: game.id,
      cover: game.image?.medium_url,
      release: game.original_release_date,
      description: game.deck
    }))
  } catch (err) {
    if (err.message === 'Game not found') {
      throw new Error('Game not found. Please provide the complete game name for better accuracy.')
    } else if (err.message === 'No similar games found') {
      throw new Error('No similar games were found')
    } else {
      throw new Error('An error occurred :(')
    }
  }
}

export async function fetchSimilarGames (search) {
  const gameResult = await getGameId(search)
  const similarGamesResult = await getSimilarGamesId(gameResult)
  const data = await getSimilarGamesData(similarGamesResult)

  return data
}
