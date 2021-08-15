import { controleButtonClick, calculate } from './utility.js';

const $calcBody = document.querySelector('#calc-body');
const $calcVisor = document.querySelector('#visor-container__visor');
const $equalBtn = document.querySelector('#equal');
const $deleteBtn = document.querySelector('#delete');
const $resetBtn = document.querySelector('#reset');
// export default writeVisor;

const getClickedButton = (e) => {
  const { target } = e;
  const clickedButton = target.closest('.btn');
  if (!clickedButton) return null;
  return clickedButton;
};

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

// Theme Settings //

const cssVariables = document.documentElement.style;

const setTheme1 = () => {
  cssVariables.setProperty('--main-bg', '');
  cssVariables.setProperty('--toggle-keypad-bg', '');
  cssVariables.setProperty('--visor-bg', '');
  cssVariables.setProperty('--header-text-color', '');

  /* Default Buttons */
  cssVariables.setProperty('--btn-default', '');
  cssVariables.setProperty('--btn-default-shadow', '');
  cssVariables.setProperty('--btn-default-shadow', '');

  /* Erase Buttons */
  cssVariables.setProperty('--btn-erase', '');
  cssVariables.setProperty('--btn-erase-shadow', '');

  /* Equal Button */
  cssVariables.setProperty('--btn-equal', '');
  cssVariables.setProperty('--btn-equal-shadow', '');

  /* Button Color */
  cssVariables.setProperty('--btn-default-color', '');
  cssVariables.setProperty('--btn-erase-color', '');
  cssVariables.setProperty('--btn-equal-color', '');
};

const setTheme2 = () => {
  cssVariables.setProperty('--main-bg', 'hsl(0, 0%, 90%)');
  cssVariables.setProperty('--toggle-keypad-bg', ' hsl(0, 5%, 81%)');
  cssVariables.setProperty('--visor-bg', ' hsl(0, 0%, 93%)');
  cssVariables.setProperty('--header-text-color', 'hsl(60, 10%, 19%)');

  /* Default Buttons */
  cssVariables.setProperty('--btn-default', 'hsl(45, 7%, 89%)');
  cssVariables.setProperty('--btn-default-shadow', 'hsl(35, 11%, 61%)');
  // cssVariables.setProperty('--btn-default-shadow', 'hsl(290, 70%, 36%)');

  /* Erase Buttons */
  cssVariables.setProperty('--btn-erase', 'hsl(185, 42%, 37%)');
  cssVariables.setProperty('--btn-erase-shadow', 'hsl(185, 58%, 25%)');

  /* Equal Button */
  cssVariables.setProperty('--btn-equal', 'hsl(25, 98%, 40%)');
  cssVariables.setProperty('--btn-equal-shadow', ' hsl(25, 99%, 27%)');

  /* Button Color */
  cssVariables.setProperty('--btn-color', 'hsl(0, 0, 100%)');
};

const setTheme3 = () => {
  cssVariables.setProperty('--main-bg', 'hsl(268, 75%, 9%)');
  cssVariables.setProperty('--toggle-keypad-bg', ' hsl(268, 71%, 12%)');
  cssVariables.setProperty('--visor-bg', ' hsl(268, 71%, 12%)');
  cssVariables.setProperty('--header-text-color', ' hsl(52, 100%, 62%)');

  /* Default Buttons */
  cssVariables.setProperty('--btn-default', 'hsl(268, 47%, 21%)');
  cssVariables.setProperty('--btn-default-shadow', 'hsl(290, 70%, 36%)');
  cssVariables.setProperty('--btn-default-shadow', 'hsl(290, 70%, 36%)');

  /* Erase Buttons */
  cssVariables.setProperty('--btn-erase', 'hsl(281, 89%, 26%)');
  cssVariables.setProperty('--btn-erase-shadow', 'hsl(285, 91%, 52%)');

  /* Equal Button */
  cssVariables.setProperty('--btn-equal', 'hsl(176, 100%, 44%)');
  cssVariables.setProperty('--btn-equal-shadow', 'hsl(177, 92%, 70%)');

  /* Button Color */
  cssVariables.setProperty('--btn-default-color', 'hsl(52, 100%, 62%)');
  cssVariables.setProperty('--btn-erase-color', '');
  cssVariables.setProperty('--btn-equal-color', 'hsl(198, 20%, 13%)');
};

const switchTheme = (theme) => {
  switch (theme) {
    case '3':
      setTheme3();
      break;
    case '2': setTheme2();
      break;
    default: setTheme1();
      break;
  }
};

const $switchInput = document.querySelector('#switch');
$switchInput.addEventListener('input', () => {
  const theme = $switchInput.value;
  switchTheme(theme);
});
