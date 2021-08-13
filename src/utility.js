import writeVisor from './ui.js';

export const calculate = (operation) => {
  let isResult = true;
  if (operation.match(/[0-9,.,+,\-,/,*]/g)) {
    const result = eval(operation);
    return { isResult, result };
  }
  isResult = false;
  return { isResult, result: 'Invalid operation' };
};

export const getClickedButton = (e) => {
  const { target } = e;
  const clickedButton = target.closest('.btn');
  if (!clickedButton) return null;
  return clickedButton;
};

export const controleButtonClick = (clickedButton) => {
  if (!clickedButton) return;
  const buttonValue = clickedButton.value;
  const regExp = /[0-9,.,+,\-,/,*]/g;
  const signRegExp = /[+,\-,/,*]/g;
  if (buttonValue.match(regExp)) {
    const isResult = false;
    writeVisor(isResult, buttonValue);
  }
};
