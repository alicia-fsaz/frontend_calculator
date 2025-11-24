const display = document.querySelector('#display');

let valor_1 = null;
let valor_2 = null;
let operator = null;

display.innerHTML = '0';

const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;
        if (valor_1 === null) {
            valor_1 = '';
        }
        if (valor_2 === null) {
            valor_2 = '';
        }
        if (buttonValue != '*' && buttonValue != '/' && buttonValue != '-' && buttonValue != '+' && buttonValue != '=') {
            if (operator === null){
                valor_1 += buttonValue; 
                display.innerHTML = valor_1;
            }
            if (operator !== null){
                valor_2 += buttonValue;
                display.innerHTML = valor_2;
            }
        } else{
            if(buttonValue !== '='){
                operator = buttonValue;
            }

            if (valor_1 !== '' && buttonValue != '=') {
                display.innerHTML = '0';
            }
            if (buttonValue == '=' && valor_1 != null && valor_2 != null) {
                valor_1 = Number(valor_1)
                valor_2 = Number(valor_2)
                switch(operador){
                    case '+':
                        display.innerHTML = valor_1 + valor_2;
                    break;
                    case '-':
                        display.innerHTML = valor_1 - valor_2
                    break;
                    case '*':
                        display.innerHTML = valor_1 * valor_2
                    break;
                    case '/':
                        display.innerHTML = valor_1 / valor_2
                    break;
                }
                valor_1 = display.innerHTML
                operador = null
                valor_2 = null
            }
        }
    })
});

document.querySelector('#clear').addEventListener('click', () => {
    valor_1 = null;
    valor_2 = null;
    operador = null;
    display.innerHTML = '0';
});

document.querySelector('#clear_entry').addEventListener('click', () => {
    if (valor_2 == null) {
        valor_1 = ''
        display.innerHTML = '0'
    }

    if(valor_2 != null){
        valor_2 = ''
        display.innerHTML = '0'
    }

    display.innerHTML = '0';
});