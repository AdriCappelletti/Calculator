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

const $switchInput = document.querySelector('#switch');
$switchInput.addEventListener('input', () => {
  const theme = $switchInput.value;
  switchTheme(theme);
});

const setTheme1 = () => {

};

const setTheme2 = () => {

};

const setTheme3 = () => {
  document.documentElement.style.setProperty('--main-bg', 'hsl(268, 75%, 9%)');
  document.documentElement.style.setProperty('--toggle-keypad-bg', ' hsl(268, 71%, 12%)');
  document.documentElement.style.setProperty('--visor-bg', ' hsl(268, 71%, 12%)');
  document.documentElement.style.setProperty('--header-text-color', ' hsl(52, 100%, 62%)');

  /* Default Buttons */
  document.documentElement.style.setProperty('--btn-default', 'hsl(268, 47%, 21%)');
  document.documentElement.style.setProperty('--btn-default-shadow', 'hsl(290, 70%, 36%)');
  document.documentElement.style.setProperty('--btn-default-shadow', 'hsl(290, 70%, 36%)');

  /* Erase Buttons */
  document.documentElement.style.setProperty('--btn-erase', 'hsl(281, 89%, 26%)');
  document.documentElement.style.setProperty('--btn-erase-shadow', 'hsl(285, 91%, 52%)');

  /* Reset Button */
  document.documentElement.style.setProperty('--btn-reset', '#00bcd4');
  document.documentElement.style.setProperty('--btn-reset-shadow', '#00bcd4');

  /* Equal Button */
  document.documentElement.style.setProperty('--btn-equal', 'hsl(176, 100%, 44%)');
  document.documentElement.style.setProperty('--btn-equal-shadow', 'hsl(177, 92%, 70%)');

  /* Button Color */
  document.documentElement.style.setProperty('--btn-color', 'hsl(52, 100%, 62%)');
};
// hsl(176, 100%, 44%)
const switchTheme = (theme) => {
  switch (theme) {
    case '3':
      setTheme3();
      break;

    default: location.reload();
      break;
  }
};
