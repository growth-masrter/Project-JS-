const result = document.getElementById('result');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operand1 = '';
let operand2 = '';
let operator = '';

// Core operations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return 'Error';
  return a / b;
}

function clearAll() {
  currentInput = '';
  operand1 = '';
  operand2 = '';
  operator = '';
  result.value = '';
}

function handleOperator(op) {
  if (currentInput === '') return;
  operand1 = currentInput;
  operator = op;
  currentInput = '';
}

function handleEqual() {
  if (operand1 === '' || currentInput === '') return;
  operand2 = currentInput;
  const a = parseFloat(operand1);
  const b = parseFloat(operand2);
  let output;

  switch (operator) {
    case '+': output = add(a, b); break;
    case '-': output = subtract(a, b); break;
    case '*': output = multiply(a, b); break;
    case '/': output = divide(a, b); break;
    default: output = 'Error';
  }

  result.value = output;
  currentInput = output.toString();
  operand1 = '';
  operand2 = '';
  operator = '';
}

// Event listener
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === null) return;

    if (value >= '0' && value <= '9' || value === '.') {
      currentInput += value;
      result.value = currentInput;
    } else if (['+', '-', '*', '/'].includes(value)) {
      handleOperator(value);
    } else if (button.id === 'equal') {
      handleEqual();
    } else if (button.id === 'clear') {
      clearAll();
    }
  });
});
