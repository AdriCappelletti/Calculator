import { getClickedButton, controleButtonClick } from "./utility.js";

const $calcBody = document.querySelector("#calc-body");
const $calcVisor = document.querySelector("#visor-container__visor");

$calcBody.addEventListener("click", (e) => {
  controleButtonClick(getClickedButton(e));
});

document.querySelector("#delete-btn").addEventListener("click", () => {
  $calcVisor.value = $calcVisor.value.slice(0, -1);
});

export const writeVisor = (operation, data) => {
  if (operation) {
    $calcVisor.value = "";
  }
  $calcVisor.value === "0"
    ? ($calcVisor.value = data)
    : ($calcVisor.value += data);
};

export const getVisorValue = () => {
  return $calcVisor.value;
};

export const resetVisor = document
  .querySelector("#reset")
  .addEventListener("click", () => {
    $calcVisor.value="0"
  });
