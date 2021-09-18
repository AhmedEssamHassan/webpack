import { addValues } from "./utils/addValues";
const addBtn = document.getElementById("add");
let firstValue = 0;
let secValue = 0;

export const add = () => {
  addBtn.addEventListener("click", () => addValues(firstValue, secValue));
};
