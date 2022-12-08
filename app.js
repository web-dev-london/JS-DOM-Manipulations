// const title = document.querySelector('#main-heading');

// title.style.color = 'orange';

// // List Items
// const listItems = Array.from(
//   document.querySelectorAll('.list-item'),
// );

// listItems.forEach((item) => {
//   item.style.fontSize = '1.8rem';
//   item.style.color = 'tomato';
// });

// // Creating Element
// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// // Adding Element
// ul.append(li);

// // Modifying Element
// li.innerText = 'X-Men';

// li.classList.add('list-item');

// console.log(li.classList.contains('list-item'));

// li.remove();

// Event Probagation
// Has 3 Phases
// 1.Event Capturing
// 2.Target
// 3.Event Bubbling

// window.addEventListener(
//   'click',
//   function () {
//     console.log('Window');
//   },
//   false,
// );

// document.addEventListener(
//   'click',
//   function () {
//     console.log('Document');
//   },
//   false,
// );

// document.querySelector('.div2').addEventListener(
//   'click',
//   function () {
//     // e.stopPropagation();
//     console.log('div 2');
//   },
//   { once: true },
// );

// document.querySelector('.div1').addEventListener(
//   'click',
//   function () {
//     console.log('div 1');
//   },
//   false,
// );

// document.querySelector('.button').addEventListener(
//   'click',
//   function (e) {
//     e.preventDefault();
//     console.log(
//       (e.target.innerText = 'Changed to clicked'),
//     );
//   },
//   false,
// );

// Event Delegation.
// It allows users to append a SINGLE event listener to a parent element
// that adds it to all of its present AND future descendants that match a selector.

// document
//   .querySelector('#football')
//   .addEventListener('click', (e) => {
//     console.log('Football is clicked');

//     const target = e.target;

//     if (target.matches('li')) {
//       target.style.backgroundColor = '#ba0000';
//     }
//   });

document
  .querySelector('#sports')
  .addEventListener('click', function (e) {
    console.log(
      e.target.getAttribute('id') + 'is clicked',
    );

    const target = e.target;

    if (target.matches('li')) {
      target.style.backgroundColor = 'orange';
    }
  });

// Create Element
const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'rugby';
newSport.setAttribute('id', 'rugby');

sports.appendChild(newSport);
