function tabuada() {
  var number = document.getElementById('inputNumber').value
  var select = document.getElementById('selTab')

  if (number.length == 0) {
    window.alert('Por gentileza digitar algum número')
  } else {
      select.innerHTML = ""
      for (var c = 1; c <= 10; c++) {
        var resultado = document.createElement('option')
        resultado.text = `${number} x ${c} = ${number * c}`

      select.appendChild(resultado)
      }
    } 
}

