const display = document.getElementById('display');
const buttons = document.querySelectorAll('.number, .operator, .clear, .calculate');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentInput = '';
    } else if (value === '=') {
      try {
        currentInput = eval(currentInput);
      } catch (error) {
        currentInput = 'Error';
      }
    } else {
      currentInput += value;
    }

    display.value = currentInput;
  });
});
