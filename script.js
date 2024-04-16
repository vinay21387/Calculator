let displayValue = '';
let history = ''; // Initialize history variable

function appendToDisplay(value) {
    if (value === '.' && displayValue.includes('.')) return; // Prevent adding multiple decimal points
    if (displayValue === '0' && value !== '.') displayValue = ''; // Remove leading zero

    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function clearHistory() {
    history = ''; // Clear the history
    updateHistory();
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function calculate() {
    try {
        const result = eval(displayValue);
        history += displayValue + ' = ' + result + '\n';
        displayValue = result.toString();
        updateDisplay();
        updateHistory(); // Call function to update history display
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateHistory() {
    document.getElementById('history').innerText = history;
}

function calculateSquareRoot() {
    const result = Math.sqrt(parseFloat(displayValue));
    displayValue = result.toString();
    updateDisplay();
}

function calculatePercentage() {
    const result = parseFloat(displayValue) / 100;
    displayValue = result.toString();
    updateDisplay();
}
