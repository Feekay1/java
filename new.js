function calculator () {
    let firstvalue = prompt('WHAT IS YOUR FIRST VALUE')
    let operand = prompt('WHAT IS YOUR OPERATOR')
    let secondvalue = prompt('WHAT IS YOUR SECOND VALUE')


    if(operand === '+'){
        let sum = Number(firstvalue) + Number(secondvalue)

        console.log(`ADDITION OF ${firstvalue} AND  ${secondvalue} IS ${sum}`);
    }
}
calculator()

function calculator () {
    let first = prompt(`WHAT IS YOUR FIRST VALUE`)
    let operand = prompt(`WHAT IS YOUR OPERATOR`)
    let second = prompt(`WHAT IS YOUR SECOND VALUE`)


    if(operand === '*'){
        let multiplication = Number(first) * Number(second)

        console.log(`MULTIPLICATION OF ${first} AND ${second} IS ${multiplication}`);
    }
}
calculator()

function calculator () {
    let first = prompt(`WHAT IS YOUR FIRST VALUE`)
    let operand = prompt(`WHAT IS YOUR OPERATOR`)
    let second = prompt(`WHAT IS YOUR SECOND VALUE`)


    if(operand === '-'){
        let subtraction = Number(first) - Number(second)

        console.log(`SUBTRACTION OF ${first} AND ${second} IS ${subtraction}`);
    }
}
calculator()

function calculator () {
    let first = prompt(`WHAT IS YOUR FIRST VALUE`)
    let operand = prompt(`WHAT IS YOUR OPERATOR`)
    let second = prompt(`WHAT IS YOUR SECOND VALUE`)


    if(operand === '/'){
        let division = Number(first) / Number(second)

        console.log(`DIVISION OF ${first} AND ${second} IS ${division}`);
    }
}
calculator()