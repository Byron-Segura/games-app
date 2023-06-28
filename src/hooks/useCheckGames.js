export function CheckGamesInfo (info) {
  const checkImage = (img) => {
    if (img.includes('default-16')) {
      console.log('no-image')
    }
  }

  const checkRelease = (year, month, day) => {
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

  const checkDescription = (description) => {
    if (description) {
      return description
    } else {
      return ''
    }
  }

  return info.map((game, index) => ({
    name: game.name,
    id: game.id,
    cover: checkImage(game.cover, index),
    release: checkRelease(game.release),
    description: checkDescription(game.description)
  }))
}
// <img src='../assets/No_Image_Available.jpg' alt='No image available' />

// const filterRepeatedGames = info.filter((game, index, array) => {
//   return array.findIndex(obj => obj.name === game.name) === index
// })
