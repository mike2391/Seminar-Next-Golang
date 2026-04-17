let numArray1 = [];
let number1;
let numArray2 = [];
let number2;
let operator;
let state = "first";
let history = [];

screen1 = document.getElementById("screen1");
screen2 = document.getElementById("screen2");
screenResult = document.getElementById("screenResult");

screen1.style.display = "block";
screen2.style.display = "none";
screenResult.style.display = "none";

function numberClick(value) {
  if (state == "first") {
    if (numArray1.length === 0) {
      numArray1.push(value);
    } else {
      numArray1[0] = numArray1[0] * 10 + value;
    }
    screen1.innerHTML = numArray1[0].toLocaleString("id-ID");
  }

  if (state == "second") {
    if (numArray2.length === 0) {
      numArray2.push(value);
    } else {
      numArray2[0] = numArray2[0] * 10 + value;
    }
    screen2.innerHTML = numArray2[0].toLocaleString("id-ID");
  }
}

function operatorClick(symbol) {
  if (numArray2.length === 0) {
    operator = symbol;
    screen1.style.display = "none";
    screen2.style.display = "block";
    screenResult.style.display = "none";
    screen2.innerHTML = 0;

    state = "second";
    number1 = numArray1[0];
  } else {
    screen2.style.display = "block";
    screenResult.style.display = "none";
    screen2.innerHTML = 0;

    let previousOperator = operator;
    let tempResult = eval(number1 + previousOperator + numArray2[0]);
    saveHistory(number1, previousOperator, numArray2[0], tempResult);

    number1 = tempResult;
    numArray1 = [];
    numArray1.push(tempResult);
    numArray2 = [];
    operator = symbol;
    state = "second";
  }
}

function resultClick() {
  if (numArray2.length === 0) {
    return;
  } else {
    number2 = numArray2[0];
    let result = eval(number1 + operator + number2);
    console.log(result);
    screen2.style.display = "none";
    screenResult.style.display = "block";
    screenResult.innerHTML = result.toLocaleString("id-ID");

    saveHistory(number1, operator, number2, result);
    console.log(history);

    numArray1 = [];
    numArray1.push(result);
    number1 = numArray1[0];
    numArray2 = [];
    state = "first";
  }
}

function saveHistory(number1, operator, number2, result) {
  history.unshift(number1 + " " + operator + " " + number2 + " = " + result);
  document.getElementById("history").innerHTML = history.map((history) => `<li>${history}</li>`).join("");
}

function clearAll() {
  numArray1 = [];
  numArray2 = [];
  number1 = 0;
  number2 = 0;
  operator = "";
  state = "first";
  screen1.innerHTML = 0;
  screen2.innerHTML = 0;
  screenResult.innerHTML = 0;
  screen1.style.display = "block";
  screen2.style.display = "none";
  screenResult.style.display = "none";
}
