function clearDisplay(){
    document.getElementsByName('display')[0].value = '';
}

function deleteByOne(){
    let display = document.getElementsByName('display')[0];
    display.value = display.value.toString().slice(0, -1);
}

function calcPercent(){
    let display = document.getElementsByName('display')[0];
    display.value = eval(display.value / 100);
}

function displayOperator(operator){
    document.getElementsByName('display')[0].value += operator;
    disableOperator();
}

function displayDigit(digit){
    document.getElementsByName('display')[0].value += digit;
}

function displayDecimalPoint(){
    let display = document.getElementsByName('display')[0];
    if(!display.value.includes('.')) display.value += '.';
}

function calcResult(){
    let display = document.getElementsByName('display')[0];
    display.value = eval(display.value);
    disableOperator();
}

function disableOperator(){
    let operators = document.querySelectorAll('input[type="button"][value="+"], input[type="button"][value="-"], input[type="button"][value="*"], input[type="button"][value="/"]');
    
    operators.forEach(operator => {
        operator.disabled = true;
    });
}