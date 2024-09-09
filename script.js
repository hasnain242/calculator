const input = document.getElementById("inp");

function displayword(button) {
  const lastChar = input.value.slice(-1);

  const operators = ["+", "-", "*", "/", "."];

  if (operators.includes(button.value)) {
    if (operators.includes(lastChar)) {
      input.value = input.value.slice(0, -1) + button.value;
    } else {
      input.value += button.value;
    }
  } else {
    input.value += button.value;
  }
}
function equals() {
  input.value = eval(input.value);
}
function clearall() {
  input.value = "";
}
function clearbtn() {
  input.value = input.value.slice(0, -1);
}
