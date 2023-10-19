let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
}

let isRaining = true
if (isRaining) {
  console.log('Remember to take your rain coat.')
}


if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  3 is a positive number

num = -3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  -3 is a negative number

if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// You need a rain coat.

isRaining = false
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// No need for a rain coat.

let a = 0
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}



let weather = 'sunny'
if (weather === 'rainy') {
  console.log('You need a rain coat.')
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny') {
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat.')
}

switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}

// Switch More Examples
let dayUserInput = 'Monday' //prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}
num=6;
switch (true) {
  case num > 0:
    console.log('Number is positive')
    break
  case num == 0:
    console.log('Numbers is zero')
    break
  case num < 0:
    console.log('Number is negative')
    break
  default:
    console.log('Entered value was not a number')
}

let isRaining2 = true
isRaining2
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

  for (let i = 0; i < 6; i++) {
    console.log(i)
  }
  let sum = 0
  for (let i = 0; i < 101; i++) {
    sum += i
  }
  
  console.log(sum)

  for (let i = 0; i < 101; i += 2) {
    sum += i
  }
  
  console.log(sum)
  
  // or another way
  
  let total = 0
  for (let i = 0; i < 101; i++) {
    if (i % 2 == 0) {
      total += i
    }
  }
  console.log(total)

  const nums = [1, 2, 3, 4, 5]
  for (let i = 0; i < 6; i++) {
    console.log(nums[i])
  }

  for (let i = 5; i >= 0; i--) {
    console.log(i)
  }
  const nums3 = [1, 2, 3, 4, 5]
  const lastIndex = nums3.length - 1
  const newArray = []
  for (let i = lastIndex; i >= 0; i--) {
    newArray.push(nums3[i])
  }
  
  console.log(newArray)

  let ccc = 4
  while (ccc > 0) {
    console.log(ccc)
    ccc--
  }

  let count = 4
  do {
    console.log(">>"+count)
    count++
  } while (count < 3)

  do {
    console.log(count)
    count++
  } while (count < 11)

  const numbers = [1, 2, 3, 4, 5]
  for (const number of numbers) {
    console.log(number)
  }
  
  const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
  for (const country of countries) {
    console.log(country.toUpperCase())
  }

  numbers.forEach((number, i) => {
    console.log(number, i)
  })
  

  countries.forEach((country, i, arr) => {
    console.log(i, country.toUpperCase())
  })


  const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
  }
  
  for (const key in user) {
    console.log(key, user[key])
  }