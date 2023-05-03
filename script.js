
// DŹWIGNIE DO ELEMENTÓW HTML - ZMIENNE ///////////////////

const currentNumber = document.querySelector('.currentNumber');
const numbersBtn = document.querySelectorAll('.number');
const operatorsBtn = document.querySelectorAll('.operator');
const equalsBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');
const display = document.querySelector('.display')
const backspaceBtn = document.querySelector('.backspace');
const dotBtn = document.querySelector('.dot');



// FUNKCJE /////////////////

function displayNumbers () {

    let numbers = currentNumber.innerHTML
    let lastSign = numbers[numbers.length - 1]

    
    if (this.textContent === '.' && currentNumber.innerHTML === '') {
        return currentNumber.innerHTML = '0.'
    }        
    currentNumber.innerHTML += this.textContent;

    
}

function operate () {

    let numbers = currentNumber.innerHTML
    let lastSign = numbers[numbers.length - 1]

    

    if (currentNumber.innerHTML === '' && this.textContent === '-') {

        currentNumber.innerHTML = '-' 
        return
       
    } else if (currentNumber.innerHTML === '') {
        return
    } else if (currentNumber.innerHTML === '-' && this.textContent === '+') {
        return
    } else if (currentNumber.innerHTML === '-' && this.textContent === 'x') {
        return
    } else if (currentNumber.innerHTML === '-' && this.textContent === ':') {
        return
    } else if (currentNumber.innerHTML === '-' && this.textContent === '2^') {
        return

    }   else if (currentNumber.innerHTML === '-') {
        return

    } else if (lastSign === '+' || lastSign === '-' || lastSign === '.' || lastSign === '/' || lastSign === '*') {
        return
    } else if (currentNumber.innerHTML === '.') {
        return

    }


    else if (this.textContent === '+') {
        currentNumber.textContent += '+'     
    } else if (this.textContent === '-') {
        currentNumber.textContent += '-'
    } else if (this.textContent === ':') {
        currentNumber.textContent += '/'
    } else if (this.textContent === 'x') {
        currentNumber.textContent += '*'
    }  else if (this.textContent === '2^') {
        currentNumber.textContent = Math.pow(numbers, 2)
        
    }  

    if (currentNumber.textContent === 'Infinity') {
        currentNumber.textContent = `Liczba nieskończona ∞`
        numbers.style.fontSize = '10px'
    }

    if (currentNumber.textContent === 'NaN') {
        currentNumber.textContent = `Niewłaściwa Operacja`
        currentNumber.textContent.style.fontSize = '6px'
    }
}



function equals () {
   let equal = eval(currentNumber.innerHTML)
    currentNumber.innerHTML = parseFloat(equal)

}

function clear () {
    currentNumber.textContent = ''
}


function backspace () {
    let result = currentNumber.innerHTML
    let sliced = result.slice(0, -1)
    currentNumber.innerHTML = sliced
}

function dot () {
    
    let numbers = currentNumber.innerHTML
    let lastSign = numbers[numbers.length - 1]
    
    if (this.textContent === '.' && lastSign !== '.' && lastSign !== '+' && lastSign !== '-' && lastSign !== '*' && lastSign !== '/') {
        currentNumber.innerHTML += '.'
    }
}



// NASŁUCHIWANIE NA CLICK'A /////////////

operatorsBtn.forEach(btn => {
    btn.addEventListener('click', operate)
})

numbersBtn.forEach(btn => {
    btn.addEventListener('click', displayNumbers)
})

equalsBtn.addEventListener('click', equals)

clearBtn.addEventListener('click', clear)

backspaceBtn.addEventListener('click', backspace)

dotBtn.addEventListener('click', dot)





