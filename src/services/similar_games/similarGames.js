const getProxyUrl = (apiUrl) => {
  const proxyUrl = `http://localhost:3000/api-proxy?url=${encodeURIComponent(apiUrl)}`

  return proxyUrl
}

export async function getGameIdBySearch (search) {
  console.log(search)
  const API_URL = `https://www.giantbomb.com/api/search/?api_key=5191f62bfe38d99afa126157a050966c2cdb1047&format=json&query=${search}&resources=game&field_list=name,id`

  try {
    const res = await fetch(getProxyUrl(API_URL))
    const json = await res.json()
    const gameId = json.results[0].id

    return { id: gameId }
  } catch (err) {
    console.log(err)
    return null
  }
}

export async function getSimilarGamesById (gameID) {
  const API_URL = `https://www.giantbomb.com/api/game/${gameID}/?api_key=5191f62bfe38d99afa126157a050966c2cdb1047&format=json&field_list=similar_games,name`

  try {
    const res = await fetch(getProxyUrl(API_URL))
    const json = await res.json()
    const similarGames = json.results.similar_games

    const iD = similarGames.map(game => game.id)
    const gamesIDs = iD.join('|')

    return { gamesIDs }
  } catch (err) {
    return new Error('No games found :(')
  }
}

export async function getSimilarGamesData (gamesIDs) {
  const API_URL = `https://www.giantbomb.com/api/games/?api_key=5191f62bfe38d99afa126157a050966c2cdb1047&format=json&filter=id:${gamesIDs}&field_list=name,id,deck,image,platforms`

  try {
    const res = await fetch(getProxyUrl(API_URL))
    const json = await res.json()

    const gameData = json.results

    return gameData.map(game => ({
      name: game.name,
      id: game.id,
      description: game.deck,
      platforms: game.platforms,
      cover: game.image.original_url
    }))
  } catch (err) {
    console.log(err)
    return null
  }
}

export async function fetchSimilarGames (search) {
  try {
    const gameResult = await getGameIdBySearch(search)
    const similarGamesResult = await getSimilarGamesById(gameResult.id)
    const gamesDataResult = await getSimilarGamesData(similarGamesResult.gamesIDs)

    return { gamesData: gamesDataResult }
  } catch (err) {
    console.log(err)
    return null
  }
}

// crash bandicoot
