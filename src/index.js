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
imageFirstCard.src = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.thesprucepets.com%2Fthmb%2FEBp990AJt94XwAp7oOAzUtdg9Xg%3D%2F2121x1193%2Fsmart%2Ffilters%3Ano_upscale()%2Fgolden-retriever-puppy-in-grass-923135452-5c887d4146e0fb00013365ba.jpg&imgrefurl=https%3A%2F%2Fwww.thesprucepets.com%2Fwhy-do-people-get-puppies-4047832&tbnid=aglKIQ5G2Jf3-M&vet=12ahUKEwj56eiG9truAhURcs0KHbCrAtYQMygAegUIARCRAg..i&docid=u20QYhEgv7gElM&w=2121&h=1193&q=puppy&ved=2ahUKEwj56eiG9truAhURcs0KHbCrAtYQMygAegUIARCRAg'
//  B- Using .setAttribute to change a few attributes


// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
//  B- By manipulating inline styles on the element


// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"


// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times


// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
