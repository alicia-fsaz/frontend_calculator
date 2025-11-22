const display = document.querySelector('#display');

let valor_1 = null;
let valor_2 = null;
let operador = null;

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
        if (buttonValue == '=') {
            
        }
        if (buttonValue != '*' && buttonValue != '/' && buttonValue != '-' && buttonValue != '+' && buttonValue != '=') {
            if (operador === null){
                valor_1 += buttonValue;
                display.innerHTML = valor_1;
            }
            if (operador !== null){
                valor_2 += buttonValue;
                display.innerHTML = valor_2;
            }
        } else{
            operador = buttonValue;
            if (valor_1 !== '') {
                display.innerHTML = '0';
            }
        }
    })
});

document.querySelector('#clear_entry').addEventListener('click', () => {
    valor_1 = null;
    valor_2 = null;
    operador = null;
    display.innerHTML = '0';
});