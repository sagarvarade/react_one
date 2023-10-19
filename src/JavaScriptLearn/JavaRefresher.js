// Link to Learn javascript
//https://github.com/sagarvarade/30-Days-Of-React/blob/master/01_Day_JavaScript_Refresher/01_javascript_refresher.md

let firstName = 'Asabeneh'
firstName = 'Eyob'

const PI = 3.14 // Not allowed to reassign PI to a new value

// Arrays 
// syntax
const arr = Array()
// or
// let arr = new Array()
console.log(arr) // []

// syntax
// This the most recommended way to create an empty list
const arr2 = []
console.log(arr2)

//Array with initial values. We use length property to find the length of an array.
const numbers5 = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers5
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('numbers5:', numbers5)
console.log('Number of numbers5:', numbers5.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)


const arr3 = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
  ] // arr containing different data types
  console.log(arr3)

  //As we have seen in the earlier section, we can split a string at different positions, and we can change to an array. Let us see the examples below.

  let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')

console.log(words)
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

const fruits3 = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits3[0] // we are accessing the first item using its index

console.log(firstFruit) // banana

secondFruit = fruits3[1]
console.log(secondFruit) // orange

let lastFruit = fruits3[3]
console.log(lastFruit) // lemon
// Last index can be calculated as follows

let lastIndex2 = fruits3.length - 1
lastFruit = fruits3[lastIndex2]

console.log(lastFruit) // lemon

const numbers53 = [0, 3.14, 9.81, 37, 98.6, 100] // set of numbers5

console.log(numbers53.length) // => to know the size of the array, which is 6
console.log(numbers53) // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers53[0]) //  -> 0
console.log(numbers53[5]) //  -> 100

let lastIndex3 = numbers5.length - 1
console.log(numbers5[lastIndex3]) // -> 100


const webTechs2 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ] // List of web technologies
  
  console.log(webTechs2) // all the array items
  console.log(webTechs2.length) // => to know the size of the array, which is 7
  console.log(webTechs2[0]) //  -> HTML
  console.log(webTechs2[6]) //  -> MongoDB
  
  let lastIndex6 = webTechs2.length - 1
  console.log(webTechs2[lastIndex6]) // -> MongoDB


  const countries2 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ] // List of countries
  
  console.log(countries2) // -> all countries in array
  console.log(countries2[0]) //  -> Albania
  console.log(countries2[10]) //  -> Kenya
  
  let lastIndex4 = countries2.length - 1
  console.log(countries2[lastIndex4]) //  -> Kenya





  const shoppingCart = [
    'Milk',
    'Mango',
    'Tomato',
    'Potato',
    'Avocado',
    'Meat',
    'Eggs',
    'Sugar',
  ] // List of food products
  
  console.log(shoppingCart) // -> all shoppingCart in array
  console.log(shoppingCart[0]) //  -> Milk
  console.log(shoppingCart[7]) //  -> Sugar
  
  let lastIndex5 = shoppingCart.length - 1
  console.log(shoppingCart[lastIndex5]) //  -> Sugar



  const numbers6 = [1, 2, 3, 4, 5]
  numbers6[0] = 10 // changing 1 at index 0 to 10
  numbers6[1] = 20 // changing  2 at index 1 to 20
  
  console.log(numbers6) // [10, 20, 3, 4, 5]
  
  const countries3 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
  countries3[0] = 'Afghanistan' // Replacing Albania by Afghanistan
  let lastIndex = countries3.length - 1
  countries3[lastIndex] = 'Korea' // Replacing Kenya by Korea
  
  console.table(countries3)

//Creating static values with fill
//fill: Fill all the array elements with a static value
  const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
  console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']
  
  const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
  console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]
  
  const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
  console.log(four4values) // [4, 4, 4, 4]



// Concat

  const firstList = [1, 2, 3]
  const secondList = [4, 5, 6]
  const thirdList = firstList.concat(secondList)
  
  console.log(thirdList) // [1, 2, 3, 4, 5, 6]

  const fruitsAndVegetables = fruits.concat(vegetables) // concatenate the two arrays
  
  console.log(fruitsAndVegetables)



  const numbers = [1, 2, 3, 4, 5, 3, 1, 2]
// Length
  console.log(numbers.indexOf(5)) // -> 4
  console.log(numbers.indexOf(0)) // -> -1
  console.log(numbers.indexOf(1)) // -> 0
  console.log(numbers.indexOf(6)) // -> -1

// Check contains in array
  let index = fruits.indexOf('banana') // 0

  if (index != -1) {
    console.log('This fruit does exist in the array')
  } else {
    console.log('This fruit does not exist in the array')
  }
  // This fruit does exist in the array
  
  // we can use also ternary here
  index != -1
    ? console.log('This fruit does exist in the array')
    : console.log('This fruit does not exist in the array')
  
  // let us check if a avocado exist in the array
  let indexOfAvocado = fruits.indexOf('avocado') // -1, if the element not found index is -1
  if (indexOfAvocado != -1) {
    console.log('This fruit does exist in the array')
  } else {
    console.log('This fruit does not exist in the array')
  }
  // This fruit does not exist in the array

  console.log(numbers.lastIndexOf(2)) // 7
  console.log(numbers.lastIndexOf(0)) // -1
  console.log(numbers.lastIndexOf(1)) //  6
  console.log(numbers.lastIndexOf(4)) //  3
  console.log(numbers.lastIndexOf(6)) // -1


  console.log(numbers.includes(5)) // true
  console.log(numbers.includes(0)) // false
  console.log(numbers.includes(1)) // true
  console.log(numbers.includes(6)) // false
  
  
  console.log(webTechs.includes('Node')) // true
  console.log(webTechs.includes('C')) // false

  //Checking array
  //Array.isArray:To check if the data type is an array

  console.log(Array.isArray(numbers)) // true


  const num = 100
  console.log(Array.isArray(num)) // false
  console.log(numbers.toString()) // 1,2,3,4,5
  const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
  console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook

  console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
  console.log(names.join('')) //AsabenehMathiasEliasBrook
  console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
  console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
  console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook
  console.log(webTechs.join()) // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
  console.log(webTechs.join(' # ')) // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"


  console.log(numbers.slice()) // -> it copies all  item
  console.log(numbers.slice(0)) // -> it copies all  item
  console.log(numbers.slice(0, numbers.length)) // it copies all  item
  console.log(numbers.slice(1, 4)) // -> [2,3,4] // it doesn't include the ending position
  console.log(numbers.splice()) // -> remove all items
  console.log(numbers.splice(0, 1)) // remove the first item

  console.log(numbers.splice(3, 3, 7, 8, 9)) // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items
// syntax
const arr4 = ['item1', 'item2', 'item3']
arr4.push('new item')

console.log(arr4)
// ['item1', 'item2','item3','new item']
numbers.push(6)

console.log(numbers) // -> [1,2,3,4,5,6]

numbers.pop() // -> remove one item from the end
console.log(numbers) // -> [1,2,3,4,5]
fruits.push('apple')

console.log(fruits) // ['banana', 'orange', 'mango', 'lemon', 'apple']

fruits.push('lime')
console.log(fruits) // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']
numbers.pop() // -> remove one item from the end

console.log(numbers) // -> [1,2,3,4]
numbers.shift() // -> remove one item from the beginning

console.log(numbers) // -> [2,3,4,5]
numbers.unshift(0) // -> add one item from the beginning

console.log(numbers) // -> [0,1,2,3,4,5]

numbers.reverse() // -> reverse array order

console.log(numbers) // [5, 4, 3, 2, 1]

numbers.reverse()
console.log(numbers) // [1, 2, 3, 4, 5]

webTechs.sort()
console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs.reverse() // after sorting we can reverse it
console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]


const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray = [
  [1, 2, 3],
  [1, 2, 3],
]
console.log(arrayOfArray[0]) // [1, 2, 3]

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack) // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length) // 2
console.log(fullStack[0]) // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]


























