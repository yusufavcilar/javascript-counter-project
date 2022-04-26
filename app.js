const totalValue = document.getElementById("value")
const buttonDecrease = document.querySelector(".buttons-decrease")
const buttonReset = document.querySelector(".buttons-reset")
const buttonIncrease = document.querySelector(".buttons-increase")

let count = 0;
//increase button 
function increase() {
  count++;
  totalValue.innerHTML = count;
  totalValue.style.color= "yellow"
}
buttonIncrease.addEventListener("click", increase)
//decrease button 
function decrease() {
  if (count != 0) {
    count--;
    totalValue.innerHTML = count;
    totalValue.style.color = "purple"
  }
}
buttonDecrease.addEventListener("click", decrease)

//reset button 
function reset() {
  count = 0;
  totalValue.innerHTML = count;
  totalValue.style.color = "black"
}

buttonReset.addEventListener("click", reset)