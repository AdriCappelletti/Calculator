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

export const controleButtonClick = (clickedButton) => {
  if (!clickedButton) return;
  const buttonValue = clickedButton.value;
  const regExp = /[0-9,.,+,\-,/,*]/g;
  if (buttonValue.match(regExp)) {
    const isResult = false;
    writeVisor(isResult, buttonValue);
  }
};
