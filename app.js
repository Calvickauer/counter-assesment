

// const entered = document.getElementById('input').value;
let currentValue = 1;

let startingValue = document.getElementById('input').value = 1;

 function add(){
    let input = parseInt(document.getElementById('input').value);
    currentValue = currentValue + input;
    if(currentValue > 0){
    let color = document.getElementById('result').style.color = 'black';
    color;
    document.getElementById('result').innerHTML = currentValue;
    } else {
        document.getElementById('result').innerHTML = currentValue;
    }
 }


 function subtract(){
    let input = parseInt(document.getElementById('input').value);
    currentValue = currentValue - input;
    if(currentValue < 0){
        let color = document.getElementById('result').style.color = 'red';
        color;
        document.getElementById('result').innerHTML = currentValue;
    } else {
        document.getElementById('result').innerHTML = currentValue;
    }


 }
