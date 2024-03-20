const name = "Aish"
const repoCount = 50

console.log(name +  repoCount + " Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `)

const  gameName = new String ('aishAk')

console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.charAt(2))
console.log(gameName.indexOf('55'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8,5)
console.log(anotherString)

// subnstring will not take negative values , if u will give it will not give you error , it will take 0 index

const newStr = "       aish    "
console.log(newStr.trim())

const url = "https://aish.com/aish%20kanodia"

console.log(url.replace('%20', '-'))

console.log(url.includes("ajsjkn"))

const newStri = "aish-kanodia-kanpur"
console.log(newStri.split('-'))

