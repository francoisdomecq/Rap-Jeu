export function generateRandomNumber(length) {
    var arr = []
    while (arr.length < 4) {
      var r = Math.floor(Math.random() * length) + 1
      if (arr.indexOf(r) === -1) arr.push(r)
    }
    return arr
  }