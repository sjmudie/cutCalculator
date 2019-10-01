let materialLength = document.querySelector("#materialLength");
const btnCalculate = document.getElementById("btnCalculate");
const btnAdd = document.getElementById("btnAdd");
const output = document.getElementById("output");
const btnClear = document.getElementById("btnClear");

function calculate() {
  let length = Array.from(document.querySelectorAll(".cutLength").values()); //gets all length values as nodelist
  let quantity = Array.from(document.querySelectorAll(".quantity").values()); //same with quantities
  let inputs = [];
  let sum = [];

  //gets values and pushes into array of objects with properties defining number and quantities
  for (i = 0; i < length.length; i++) {
    inputs.push({
      length: parseInt(length[i].value),
      quantity: parseInt(quantity[i].value)
    });
  }

  console.log(inputs);

  //adds each cut length input to each other and returns an array of objects
  for (i = 0; i < inputs.length; i++) {
    for (p = 0; p < inputs.length; p++) {
      sum.push({
        firstNum: inputs[i].length,
        secondNum: inputs[p].length,
        total: inputs[i].length + inputs[p].length
      });
    }
  }
  console.log(sum);

  //uses function to filter out duplicate values
  let filteredSum = removeDuplicates(sum, "total");

  console.log(filteredSum);
}

//adds new input box
function addItem() {
  let parent = document.getElementById("container");
  let input = document.createElement("input");
  let quantityInput = document.createElement("input");
  input.className = "cutLength";
  input.placeholder = "Cut length (mm)";
  quantityInput.className = "quantity";
  quantityInput.placeholder = "Quantity";
  parent.appendChild(input);
  parent.appendChild(quantityInput);
}

btnCalculate.addEventListener("click", () => {
  calculate();
});

btnAdd.addEventListener("click", () => {
  addItem();
});

btnClear.addEventListener("click", () => {
  let inputs = document.querySelectorAll("input");
  for (i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
    output.textContent = "";
  }
});

function removeDuplicates(originalArray, prop) {
  var newArray = [];
  var lookupObject = {};

  for (var i in originalArray) {
    lookupObject[originalArray[i][prop]] = originalArray[i];
  }

  for (i in lookupObject) {
    newArray.push(lookupObject[i]);
  }
  return newArray;
}
