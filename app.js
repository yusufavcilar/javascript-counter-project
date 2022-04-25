const totalValue = document.getElementById("value")
const buttonDecrease = document.querySelector(".buttons-decrease")
const buttonReset = document.querySelector(".buttons-reset")
const buttonIncrease = document.querySelector(".buttons-increase")

let count = 0;
//increase button 
function increase() {
  count++;
  totalValue.innerHTML = count;
}
buttonIncrease.addEventListener("click", increase)
//decrease button 
function decrease() {
  if (count != 0) {
    count--;
    totalValue.innerHTML = count;
  }
}
//reset button 
buttonDecrease.addEventListener("click", decrease)

function reset() {
  count = 0;
  totalValue.innerHTML = count;
}

buttonReset.addEventListener("click", reset)