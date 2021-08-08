import { writeVisor, getVisorValue } from "./ui.js";

let operation = false;

export const getClickedButton = (e) => {
  const target = e.target;
  const clickedButton = target.closest(".btn");
  if (!clickedButton) return null;
  else return clickedButton;
};

export const controleButtonClick = (clickedButton) => {
  const buttonValue = clickedButton.value;
  if (!buttonValue) return;
  else if (buttonValue.match(/[0-9,\.,+,\-,\/,\*]/g)) {
    writeVisor(operation, buttonValue);
  } else if (buttonValue == "=") {
    operate(buttonValue);
  }
};

const operate = (operator) => {
  operation = true;
  switch (operator) {
    case "=":
      writeResult();
      break;
    default:
      null;
      break;
  }
};

const writeResult = () => {
  const result = eval(getVisorValue());
  writeVisor(operation, result);
  operation = false;
};
