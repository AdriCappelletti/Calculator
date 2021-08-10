import { getClickedButton, controleButtonClick, calculate } from './utility.js';

const $calcBody = document.querySelector('#calc-body');
const $calcVisor = document.querySelector('#visor-container__visor');
const $equalBtn = document.querySelector('#equal');
const $deleteBtn = document.querySelector('#delete');
const $resetBtn = document.querySelector('#reset');
// export default writeVisor;

$calcBody.addEventListener('click', (e) => {
  controleButtonClick(getClickedButton(e));
});

$deleteBtn.addEventListener('click', () => {
  $calcVisor.value = $calcVisor.value.slice(0, -1);
});

$resetBtn.addEventListener('click', () => {
  $calcVisor.value = '0';
});

const writeVisor = (isResult = false, data) => {
  if (isResult) {
    $calcVisor.value = '';
  }
  $calcVisor.value === '0'
    ? ($calcVisor.value = data)
    : ($calcVisor.value += data);
};

export default writeVisor;

const getVisorValue = () => $calcVisor.value;
document.addEventListener('keypress', (e) => {
  if (!e.key.match(/[a-z]/)) { writeVisor(false, e.key); }
});

$equalBtn.addEventListener('click', () => {
  const result = calculate(getVisorValue());
  writeVisor(result.isResult, result.result);
});
