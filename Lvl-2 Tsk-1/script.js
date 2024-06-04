const display = document.getElementById('display');
let currentInput = '';
let lastResult = '';

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'clear') {
            currentInput = '';
            display.value = currentInput;
        } else if (value === 'del') {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
        } else if (value === 'ans') {
            currentInput += lastResult;
            display.value = currentInput;
        } else if (value === 'sqrt') {
            try {
                lastResult = Math.sqrt(eval(currentInput)).toString();
                display.value = lastResult;
                currentInput = lastResult;
            } catch (error) {
                display.value = 'Error';
                currentInput = '';
            }
        } else if (value === '%') {
            try {
                lastResult = (eval(currentInput) / 100).toString();
                display.value = lastResult;
                currentInput = lastResult;
            } catch (error) {
                display.value = 'Error';
                currentInput = '';
            }
        } else if (value === '=') {
            try {
                lastResult = eval(currentInput).toString();
                display.value = lastResult;
                currentInput = lastResult;
            } catch (error) {
                display.value = 'Error';
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});
