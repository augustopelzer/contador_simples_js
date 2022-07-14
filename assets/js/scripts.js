var currentNumberWrapper = document.getElementById("currentNumber"); //pega o elemento pelo id html que é 0 no index.html
var currentNumber = 0;

function increment() {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
    colorTest();
}

function decrement() {
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
    colorTest();
}

//função para formatação condicional da cor baseada no valor atual (seja incrementando ou decrementando).
function colorTest() {
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = "red";
    } else {
        currentNumberWrapper.style.color = "black";
    }
}