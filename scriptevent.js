

// console.log('Hello World');

// document.getElementById('paragraph').innerHTML = "Hello World!";

// let number1 = 20;
// let number2 = 30;

// let result = number1+number2;
// console.log(result);

// document.getElementById('result').innerHTML = result;

function sum(){
    let number1;
    let number2;

    number1 = document.getElementById('number1').value;
    number2 = document.getElementById('number2').value;

    let number1Coverted = parseFloat(number1);
    let number2Coverted = parseFloat(number2);


// console check done 
    // console.log('Number1='+number1);
    // console.log('Number2='+number2);

    let result = number1Coverted+number2Coverted;
    // console.log('Result='+result);
    document.getElementById('sumResult').innerHTML='The Result is = '+result;
}




