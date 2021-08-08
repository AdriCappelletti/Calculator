import { writeVisor, getVisorValue } from './ui.js';

let isResult = false;

const calculate = () => {
  isResult = true;
  const operation = getVisorValue();
  if (operation.match(/[0-9,.,+,\-,/,*]/g)) {
    const result = eval(operation);
    writeVisor(isResult, result);
  } else writeVisor(isResult, 'Invalid operation :)');
  isResult = false;
};

export const getClickedButton = (e) => {
  const { target } = e;
  const clickedButton = target.closest('.btn');
  if (!clickedButton) return null;
  return clickedButton;
};

export const controleButtonClick = (clickedButton) => {
  const buttonValue = clickedButton.value;
  if (!buttonValue) return;
  if (buttonValue.match(/[0-9,.,+,\-,/,*]/g)) {
    writeVisor(isResult, buttonValue);
  } else if (buttonValue == '=') {
    calculate();
  }
};

const writeResult = () => {

};
