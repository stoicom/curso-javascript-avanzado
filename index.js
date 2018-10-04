function changeLetters(stringToChange) {
  return stringToChange.split("").map(letter => {
    if (letter === 'a') return "b"
    if (letter === 'b') return "a"
    return letter
  }).join("")
}

//console.log(changeLetters("aabbca"))

function removeCharacters(stringToChange) {
  return stringToChange.substring(1, stringToChange.length - 1)
}
// console.log(removeCharacters("hola"))

function canKillMouse(string) {
  return (string.indexOf('m') - 1) <= 3
}

//console.log(canKillMouse('C...m'))

function removeRepeatedWords(string) {
  return Array.from(new Set(string.split(" "))).join(" ")
}

console.log(removeRepeatedWords("barcelona madrid barcelona praga praga madrid barcelona ibiza madrid ibiza"))


function speakAsDaemon(string) {
  return string.split(' ').map(word => word.split('').reverse().join('')).join(" ")
}

console.log(speakAsDaemon("hola que tal estas"))


function getBestLanguages(languages) {
  let filtered = languages.filter(language => language.score >= 60)
  return filtered.sort((language1, language2) => {
    if (language1.score > language2.score) return false
    return true
  })
}

let languages = [
  {
    name: 'python',
    score: 60
  },
  {
    name: 'javascript',
    score: 50
  },
  {
    name: 'ruby',
    score: 80
  }
]

console.log(getBestLanguages(languages))

