
const firstMessage = [
    "Your favourite",
    "Your worst",
    "Your lowest",
    "Your highest"
]

const secondMessage = [
    "food is",
    "item of clothing is",
    "person is",
    "time of the year is",
    "holiday destination is",
    "animal is"
]

const thirdMessage = [
    "Emile Heskey",
    "Angelina Jolie",
    "patatas bravas",
    "Summer and Winter",
    "bangers and mash",
    "Spain",
    "Australia",
    "Denmark",
    "fish and chips",
    "magpies",
    "dolphins",
    "labradors"
]

const generateRandomNumber = (array) => {
    let randomNumber = Math.floor(Math.random() * array.length)

    return randomNumber
}

const generateRandomSentence = () => {
    const firstString = firstMessage[generateRandomNumber(firstMessage)]
    const secondString = secondMessage[generateRandomNumber(secondMessage)]
    const thirdString = thirdMessage[generateRandomNumber(thirdMessage)]

    console.log(`${firstString} ${secondString} ${thirdString}.`)
    
}

generateRandomSentence()