import data from './titanic-data.js'

// Get a reference to the #titanic
const titanic = document.querySelector('#titanic')

// Set some styles on the titanic
// display flex, justifyContent center, alignItems flex-end
titanic.style.display = 'grid'
// titanic.style.gridTemplateColumns = 'repeat(20, 10px)'
titanic.style.gridTemplateColumns = 'repeat(34, 15px)'
titanic.style.gridGap = '10px'

// Map over the data and make a new element for each passenger
const passengers = data.map((p, i) => {
  const el = document.createElement('div')
  el.classList.add("passenger")
  el.dataset.id = i
  titanic.appendChild(el)
  return el
})

// Let's loop over each passenger and set some styles 
passengers.forEach((p, i) => {
  const { pclass, survived, sex, embarked, fares, age } = data[i].fields
  // p.style.width = '10px'
  // p.style.height = '10px'
  p.style.width = '15px'
  p.style.height = '15px'
  p.style.opacity = survived === 'Yes' ? '100%' : '30%'

  if (embarked === "S") {
    p.style.backgroundColor = 'tomato'
  } else if (embarked === "C") {
    p.style.backgroundColor = 'cornflowerblue'
  } else if (embarked === "Q") {
    p.style.backgroundColor = 'gold'
  } else {
    p.style.backgroundColor = 'black'
  }

  if (age < 18) {
    p.style.transform = "scale(0.65, 0.65)"
  }

  if (pclass === 1) {
    p.style.borderStyle = "solid"
  } else if (pclass === 2) {
    p.style.borderStyle = "dotted"
  }

  p.style.borderRadius = sex === 'female' ? '50%' : 0
})

fields.sort((a, b) => {
  return a.fare - b.fare // 
})


const popup = document.createElement

document.body.addEventListener("mouseover", e => {
  if (e.target.matches(".passenger")) {
    console.log(data[e.target.dataset.id].fields.age)
  }
})


// OPTIONS: wrap forEach in function to make it interactive with buttons (use flags)


// Challenges - 

// DONE 

// Make the squares a little bigger 15px by 15px. 
// You'll need to change both the gridTemplateColumn on the
// titanic and the width and height of each passenger. 


// DONE 

// Change the number of columns on the titanic to 34


// DONE 

// Display each passenger as a circle if they are female. 
// Do this by setting the borderRadius of each passenger. 
// Match the passenger in passengers to the object data 
// in the data array by the index. 


// DONE 

// Display each passengers who did not survive as 
// opacity 0.5. 


// DONE

// Set the backgroundColor of each passenger by their 
// embarked value. There are three possible values: 
// 'S', 'C', and 'Q'



