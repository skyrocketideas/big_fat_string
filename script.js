"use strict";
// window.addEventListener("DOMContentLoaded", init);

// get input from user
function getInput() {
  const formInput = document.getElementById("input").value;
  document.getElementById("output").textContent = `input was ${formInput}`;
  if (formInput === "graeme") {
    console.log(formInput.substring(2));
  }
}

// get dropdown menu index
const selector = document.getElementById("select");
const outputBox = document.getElementById("output");
selector.addEventListener("change", function() {
  const index = selector.selectedIndex;
  outputBox.textContent = "Index: " + index;
});
