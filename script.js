var display;

function clickButton(valor) {
     display = document.getElementsByClassName('display')[0]
    if (isNaN(valor)) {
        switch (valor) {
            case 'C':
                display.innerHTML = ' ';
                break;
            
            case '=':
                calculaTudo();
                break;
            
            case '<':
                display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
                break;
            
            case '/':
                display.innerHTML += valor;
                break;
            
            case 'X':
                display.innerHTML += '*';
                break;
            
            case '-':
                display.innerHTML += valor;
                break;
            
            case '+':
                display.innerHTML += valor;
                break;
            
            case '.':
                display.innerHTML = ' ';
                break;
            
        }
    }
    else {
        display.innerHTML += valor;

    }
} 
function calculaTudo(valor) {
    var novoValor;
    display = document.getElementsByClassName('display')[0];
    novoValor = eval(display.innerHTML);
    display.innerHTML = novoValor;
    if (novoValor > 0) {
        display.classList.add('superior');
        display.classList.remove('inferior');
    }
    else{
        display.classList.add('inferior');
        display.classList.remove('superior');
    }
}   
var total = 0;