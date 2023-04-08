let input = '';

function appendNumber(number) {
  input += number;
  document.getElementById('result').value = input;
}

function calculate() {
  let result = eval(input);
  input = result;
  document.getElementById('result').value = input;
}

function allClearInput() {
  input = '';
  document.getElementById('result').value = input;
}
function clearInput() {
    input = input.substring(0, input.length-1);
    document.getElementById('result').value = input;
  }