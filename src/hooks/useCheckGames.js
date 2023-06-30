export function CheckGamesInfo (info) {
  /*   const checkImage = (img) => {
      if (img.includes('default-16')) {
        console.log('no-image')
      }
    } */

  const filteredRepeatedItems = info.filter((game, index, array) => {
    return array.findIndex(obj => obj.name === game.name) === index
  })

  const checkRelease = (release) => {
    const year = release[0]
    const month = release[1]
    const day = release[2]

    if (release[0] === null) return 'Unknown'

    if (release.length === 1) {
      return release
    }

    if (year && month && day) {
      return `${year}-${month}-${day}`
    }

    if (month === null || day === null) {
      return year
    }
  }

  const checkDescription = (description) => {
    if (description) {
      return description
    } else {
      return ''
    }
  }

  return filteredRepeatedItems.map((game) => ({
    name: game.name,
    id: game.id,
    cover: game.cover,
    release: checkRelease(game.release),
    description: checkDescription(game.description)
  }))
}
