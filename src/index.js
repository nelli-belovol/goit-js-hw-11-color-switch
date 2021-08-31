import './sass/main.scss';
import { colors } from './js/colors.js';
import refs from './js/refs.js';
import { randomIntegerFromInterval } from './js/randomColor.js';

const { start, stop, body } = refs;

let colorIndex;
let timerId;
start.addEventListener('click', () => {
  start.setAttribute('disabled', true);
  timerId = setInterval(() => {
    colorIndex = randomIntegerFromInterval(0, colors.length - 1);
    body.style.backgroundColor = colors[colorIndex];
  }, 1000);
});

stop.addEventListener('click', () => {
  start.setAttribute('disabled', false);
  clearInterval(timerId);
});
