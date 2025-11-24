const display = document.querySelector('#display');
const numbers = document.querySelectorAll('button:not(.operator)')
const operators = document.querySelectorAll('.operator')
let operation = null
let values = []

const operations ={
    'sum': () => {return values[0] + values[1]},
    'sub': () => {return values[0] - values[1]},
    'mult': () => {return values[0] * values[1]},
    'div': () => {return values[0] / values[1]}
}

numbers.forEach((number)=> {
    number.addEventListener('click', (event) => {
        const digit = event.target.textContent
        display.textContent = display.textContent == '0' ? digit : display.textContent + digit
    })
})

operators.forEach((operator)=>{
    operator.addEventListener('click', (event)=> {
        values.push(Number(display.textContent))
        display.textContent = '0'
        if(event.target.textContent !== '='){
            operation = event.target.getAttribute('data-op')
        } else {
            display.textContent = operations[operation]()
            values = []
            operation = null
        }
    })
})

