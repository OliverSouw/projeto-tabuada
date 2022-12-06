function tabuada() {
    var firstNum = document.getElementById('first-number');
    var secondNum = document.getElementById('second-number');

    var first = Number(firstNum.value);
    var second = Number(secondNum.value);

    var result = '';
    var showResult = document.getElementById('resultado'); 

    if (firstNum.value.length == 0 || secondNum.value.length == 0) {
        alert('[ERRO] Confira seus dados!')
    } else {
        showResult.innerHTML = `A tabuada do ${first} é: <br>`;

        for (let x = 0; x <= second; x++) {
            result = first * x;
            showResult.innerHTML += `${x} X ${first} = ${result} <br>`
        }
    } 
}