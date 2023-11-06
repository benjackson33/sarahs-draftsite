const btn = document.querySelector('.font-btn');
const titleDiv = document.querySelector('.title')
const whichFont = document.createElement('p') 


const fonts = [
  'Cardo, serif',
  'Castoro, serif',
  'Cormorant Garamond, serif',
  'EB Garamond, serif',
  'Prata, serif',
];

let btnClicks = 0;

const handleClick = (e) => {
  let btn = e.target
  btnClicks++;

  // Check if we've gone past the end of the array, and reset if necessary
  if (btnClicks >= fonts.length) {
    btnClicks = 0;
  }

  // Apply the selected font to an element (you need to specify the element)
  const title = document.querySelector('.title'); // Replace with the actual target element
  title.style.fontFamily = fonts[btnClicks];
  whichFont.textContent = fonts[btnClicks]
  titleDiv.appendChild(whichFont)
//   console.log(fonts[btnClicks]);
};

btn.addEventListener('click', handleClick);
