export function CheckGamesInfo (info) {
  const checkImage = (img) => {
    if (img.includes('default-16')) {
      return '../../src/assets/No_Image_Available.jpg'
    }

    return img
  }

  const filteredRepeatedItems = info.filter((game, index, array) => {
    return array.findIndex(obj => obj.name === game.name) === index
  })

  const checkRelease = (release) => {
    if (!release) return 'Unknown'

    if (typeof release === 'string') {
      return release
    }

    const [year, month, day] = release

    if (!release.length) return 'Unknown'

    if (release.length === 1) {
      return year
    }

    if (month === null || day === null) {
      return year
    }

    const releaseMonth = (('0' + month).slice(-2))
    const releaseDay = (('0' + day).slice(-2))

    return `${year}-${releaseMonth}-${releaseDay}`
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
    cover: checkImage(game.cover),
    release: checkRelease(game.release),
    description: checkDescription(game.description)
  }))
}
