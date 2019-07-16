var num = []

var imprimeResultado = document.getElementById('res')

function adicionar() {

    var selectNumbers = document.getElementById('selNumeros')   
    var inputNum = Number(document.getElementById('inputNumber').value)
    
    
    if (inputNum > 100 || num.indexOf(inputNum) != -1) {
        window.alert('Valor inválido ou já encontrado na lista!')

    } else {
        num.push(inputNum)
        
        var resultado = document.createElement('option')
        resultado.text = `Valor ${inputNum} adicionado`

        selectNumbers.appendChild(resultado)
        imprimeResultado.innerHTML = "Aguardando Finalizar"
    }

    inputNumber.value = ""
    inputNumber.focus()

}

function finalizar() {

    var sum = 0
    for (i = 0; i < num.length; i++){
        sum = sum + num[i]
    }

    imprimeResultado.innerHTML = `
    <p>Ao todo, temos ${num.length} números cadastrados.</p>
    <p>O maior valor informado foi ${Math.max(...num)}.</p>
    <p>O menor valor informado foi ${Math.min(...num)}.</p>
    <p>Somando todos os valores temos ${sum}</p>
    <p>A média dos valores digitados é ${sum / num.length}</p>
    `
}