let currentInput = '';
let leftResult = '';
let rightResult = '';
let currentOperator = '';
let result = document.getElementById('result');

const compute = () => {
    let computedResult = 0;
    if (currentOperator === '+') {
        computedResult = parseFloat(leftResult) + parseFloat(rightResult);
    } else if (currentOperator === '-') {
        computedResult = parseFloat(leftResult) - parseFloat(rightResult);
    }

    leftResult = computedResult.toString();
    rightResult = '';
    currentOperator = '';
    currentInput = leftResult;
    
    result.innerText = computedResult;
};

const displayValue = (char) => {
    if (char === 'ac') {
        currentInput = leftResult = rightResult = currentOperator = '';
        result.innerText = '0';
        return;
    }
    
    if (char === 'de') {
        if (currentInput.length > 0) {
            currentInput = currentInput.slice(0, -1);
            result.innerText = currentInput || '0';
        }
        return;
    }
    
    if (!isNaN(char) || char === '.') {
        if (currentOperator) {
            rightResult += char;
        } else {
            leftResult += char;
        }
        currentInput += char;
        result.innerText = currentInput;
        return;
    }
    
    if (char === '+' || char === '-') {
        if (currentOperator) {
            compute();
        }
        currentOperator = char;
        currentInput += char;
        result.innerText = currentInput;
        return;
    }

    if (char === '=') {
        if (leftResult && rightResult && currentOperator) {
            compute();
        }
        return;
    }
};
