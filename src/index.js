// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.querySelector('header')                  
const logoTitle = document.querySelector('#logoTitle')          
const firstCard = document.querySelector('.card:nth-of-type(1)')
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector('img')   
const titleFirstCard = firstCard.querySelector('h2')   
const subtitleFirstCard = firstCard.querySelector('h3')
const textFirstCard = firstCard.querySelector('p')     
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling  
const link2FirstCard = link1FirstCard.nextElementSibling


// 👉 2- Finding collections of elements in the DOM
// A- find all the anchor tags inside the nav element
const links = document.querySelectorAll('nav a')
// B- loop over the links and console.log their text content
links.forEach(link => console.log(link.textContent))
// C- turn the collection of links into a real array
const linksRealArray = Array.from(links)
// D- use .filter to find the anchor tag with the textContent of "Home"
console.log(linksRealArray.find(link => link.textContent === 'Home'))
const homeLink = links[0];
console.log(homeLink)

// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
//  B- Have the students research online the difference between textContent and innerText
logoTitle.textContent = 'Lambda Dog';
titleFirstCard.textContent = 'Dog pic';
subtitleFirstCard.textContent = 'Doggy subtitle';
textFirstCard.textContent = 'stuff about Dogs';

// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
homeLink.textContent = 'Puppy Palace'
imageFirstCard.src = 'https://herepup.com/wp-content/uploads/2015/12/Dog-Advice-1-1.jpg'
//  B- Using .setAttribute to change a few attributes
link1FirstCard.setAttribute('href', 'https://www.pexels.com/search/dog/')
link2FirstCard.setAttribute('href', 'https://doggoipsum.com/')

// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
header.classList.add('sky')
header.classList.remove('sky')
setInterval(() => {
    header.classList.toggle('sky')
}, 1000)

//  B- By manipulating inline styles on the element
header.style.fontSize = '2em';

// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogLink = document.createElement('a')
blogLink.textContent = 'Blog'
blogLink.href = '#'
console.log(blogLink)

// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times


// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
