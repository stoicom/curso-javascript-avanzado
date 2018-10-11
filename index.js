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

// console.log(removeRepeatedWords("barcelona madrid barcelona praga praga madrid barcelona ibiza madrid ibiza"))


function speakAsDaemon(string) {
  return string.split(' ').map(word => word.split('').reverse().join('')).join(" ")
}

// console.log(speakAsDaemon("hola que tal estas"))


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

// console.log(getBestLanguages(languages))


var companies = ["Amazon", "Apple", "Netflix", "Facebook", "Google"]
var cities = ["Washington", "Cupertino", "Los Gatos", "Menlo Park", "Mountain View"]

let count2 = 0

// while(count < companies.length) {
//   console.log(companies[count])
//   count++
// }

// for (let count = 0; count < cities.length; count++) {
//   console.log(cities[count])
// }


// console.log(companies.concat(cities))
// console.log([...companies, ...cities])

// for (let count = 0; count < cities.length; count++) {
//   console.log(`${companies[count]} - ${cities[count]}`)
// }


// cities.pop()
// companies.pop()
// console.log(cities, companies)

// console.log(companies.filter(company => company.charAt(0) === 'A'))
// console.log(cities.filter(city => city.length >= 10))


let people = [{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}]


function getStatusChat(people) {
  let online = people.filter(person => person.status === 'online' && person.lastActivity <= 10).map(person => person.username)
  let offline = people.filter(person => person.status === 'offline').map(person => person.username)
  let away = people.filter(person => person.status === 'online' && person.lastActivity > 10).map(person => person.username)
  return {
    online,
    offline,
    away
  }
}

//console.log(getStatusChat(people))

let peopleString = "485648, Sergio Zamarro, Adrian Fuentes, 904847"

function getUsers(peopleString) {
  let dataSet = peopleString.split(',').map(element => element.trim())
  let names = dataSet.filter(data => isNaN(data))
  let contacts = dataSet.filter(data => !isNaN(data))
  let users = []
  for (let count=0; count < names.length; count++) {
    users.push({
      username: names[count],
      contact: Number(contacts[count])
    })
  }
  return users

}

// console.log(getUsers(peopleString))
