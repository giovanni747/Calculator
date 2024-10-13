let first = null;
let operator = '';
let second = null;

const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    return a / b;
};

// Select display area
const display = document.querySelector(".screen");
let display_text = document.createElement("div");
display_text.style.color = "white"; // Set text color
display_text.style.fontSize = "35px"; // Set font size
display_text.style.margin = "10px 5px"; // Set margin
display_text.textContent = ""; // Initialize empty content
display.appendChild(display_text);

// Handle number button clicks
const numbers = document.querySelectorAll(".btn");
numbers.forEach(function(button) {
    button.addEventListener('click', function() {
        display_text.textContent += this.textContent; 
    });
});


const operators = document.querySelectorAll(".btn_operator");
operators.forEach(function(button) {
    button.addEventListener('click', function() {
        if (this.textContent === '=') {
            if (first !== null && display_text.textContent) {
                second = parseFloat(display_text.textContent);
                let result;
                switch (operator) {
                    case '+':
                        result = add(first, second);
                        break;
                    case '-':
                        result = subtract(first, second);
                        break;
                    case 'x':
                        result = multiply(first, second);
                        break;
                    case '/':
                        result = divide(first, second);
                        break;
                    default:
                        return;
                }
                display_text.textContent = result; 
                first = null; 
                operator = ''; 
                second = null; 
            }
        } else {
            if (first === null) {
                first = parseFloat(display_text.textContent);
                operator = this.textContent;
                display_text.textContent = '';
            } else {
                if (display_text.textContent) {
                    second = parseFloat(display_text.textContent);
                    let result;
                    switch (operator) {
                        case '+':
                            result = add(first, second);
                            break;
                        case '-':
                            result = subtract(first, second);
                            break;
                        case '*':
                            result = multiply(first, second);
                            break;
                        case '/':
                            result = divide(first, second);
                            break;
                        default:
                            return; 
                    }
                    display_text.textContent = result; 
                    first = result;
                }
                operator = this.textContent; 
                display_text.textContent = ''; 
            }
        }
    });
});
const special = document.querySelectorAll(".btn_special");
special.forEach(function(button) {
    button.addEventListener('click', function() {
        if(this.textContent === 'C'){
            display_text.textContent = '';
            first = null;
            second = null;
            operator = ''; 
        }
        else{
            switch (this.textContent) {
                case '.':
                    display_text.textContent += '.';
                    break;
                case '+/-':
                    let temp  = (parseFloat(display_text.textContent) * -1).toString();
                    display_text.textContent  = temp;
                    break;
                case '%':
                    let temp1  = (parseFloat(display_text.textContent) / 100).toString();
                    display_text.textContent  = temp1;
                    break;
                default:
                    display_text.textContent  = display_text.textContent.slice(0,-1) || '0';
                    return; 
            }
        }
    });  
});
