import { getClickedButton, controleButtonClick } from './utility.js';

const $calcBody = document.querySelector('#calc-body');
const $calcVisor = document.querySelector('#visor-container__visor');

$calcBody.addEventListener('click', (e) => {
  controleButtonClick(getClickedButton(e));
});

document.querySelector('#delete-btn').addEventListener('click', () => {
  $calcVisor.value = $calcVisor.value.slice(0, -1);
});

document.querySelector('#reset').addEventListener('click', () => {
  $calcVisor.value = '0';
});

export const writeVisor = (isResult, data) => {
  if (isResult) {
    $calcVisor.value = '';
  }
  $calcVisor.value === '0'
    ? ($calcVisor.value = data)
    : ($calcVisor.value += data);
};

export const getVisorValue = () => $calcVisor.value;
document.addEventListener('keypress', (e) => {
  writeVisor(false, e.key);
});
