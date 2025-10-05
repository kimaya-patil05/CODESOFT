// Calculator state
let currentOperand = '0';
let previousOperand = '';
let operation = null;
let resetScreen = false;

// DOM elements
const currentOperandElement = document.querySelector('.current-operand');
const previousOperandElement = document.querySelector('.previous-operand');
const buttons = document.querySelectorAll('button');

// Event listeners for buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.dataset.number !== undefined) {
            appendNumber(button.dataset.number);
        } else if (button.dataset.action !== undefined) {
            handleAction(button.dataset.action);
        }
        updateDisplay();
    });
});

// Append number to current operand
function appendNumber(number) {
    if (currentOperand === '0' || resetScreen) {
        currentOperand = number;
        resetScreen = false;
    } else {
        // Prevent multiple decimal points
        if (number === '.' && currentOperand.includes('.')) return;
        currentOperand += number;
    }
}

// Handle calculator actions
function handleAction(action) {
    switch (action) {
        case 'clear':
            clear();
            break;
        case 'add':
        case 'subtract':
        case 'multiply':
        case 'divide':
            chooseOperation(action);
            break;
        case 'calculate':
            calculate();
            break;
    }
}

// Clear calculator
function clear() {
    currentOperand = '0';
    previousOperand = '';
    operation = null;
}

// Choose operation
function chooseOperation(op) {
    if (currentOperand === '') return;
    
    if (previousOperand !== '') {
        calculate();
    }
    
    operation = op;
    previousOperand = currentOperand;
    resetScreen = true;
}

// Perform calculation
function calculate() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    
    if (isNaN(prev) || isNaN(current)) return;
    
    switch (operation) {
        case 'add':
            computation = prev + current;
            break;
        case 'subtract':
            computation = prev - current;
            break;
        case 'multiply':
            computation = prev * current;
            break;
        case 'divide':
            if (current === 0) {
                alert("Cannot divide by zero!");
                clear();
                return;
            }
            computation = prev / current;
            break;
        default:
            return;
    }
    
    // Format the result to avoid long decimal numbers
    currentOperand = formatResult(computation);
    operation = null;
    previousOperand = '';
    resetScreen = true;
}

// Format the result to avoid long decimal numbers
function formatResult(value) {
    // If it's a whole number, return as is
    if (value % 1 === 0) {
        return value.toString();
    }
    
    // For decimal numbers, limit to 8 decimal places
    return parseFloat(value.toFixed(8)).toString();
}

// Update display
function updateDisplay() {
    currentOperandElement.textContent = currentOperand;
    
    if (operation) {
        const operatorSymbols = {
            'add': '+',
            'subtract': '−',
            'multiply': '×',
            'divide': '÷'
        };
        previousOperandElement.textContent = `${previousOperand} ${operatorSymbols[operation]}`;
    } else {
        previousOperandElement.textContent = '';
    }
}

// Initialize calculator
clear();
updateDisplay();