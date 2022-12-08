const btn = document.querySelector('#new-quote');
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');

const quotes = [
  {
    quote: `"The best way to find yourself is to lose yourself in the servise of others."`,
    person: `Mahatma Gandhi`,
  },
  {
    quote: `" If you want to live a happy life, tie it to a goal, not to people ot things"`,
    person: `Albert Einstein`,
  },
  {
    quote: `" Your time is limited, so do not waste it living someone else's life."`,
    person: `Stive Jobs`,
  },
  {
    quote: `"It does not matter how slowly you go al long as you do not stop."`,
    person: `Confucius`,
  },
];

btn.addEventListener('click', () => {
  const random = Math.floor(
    Math.random() * quotes.length,
  );

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
