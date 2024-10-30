const display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        // Evaluate the expression in the display
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
