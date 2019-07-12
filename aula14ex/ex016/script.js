function contar() {
  var inicio = Number(document.getElementById('iptInicio').value)
  var fim = Number(document.getElementById('iptFim').value)
  var passo = Number(document.getElementById('iptPasso').value)
  
  var res = document.getElementById('res');

  if (inicio == "") {
    res.innerHTML = 'Por gentileza determine um número de início'
  } else if (fim == "") {
    res.innerHTML = 'Por gentileza determine um número para término'
  } else if (passo == "" || 0) {
    res.innerHTML = 'Por gentileza determine o número de passos diferente de zero [0]'
  } else if (inicio < fim) {
    res.innerHTML = 'Contando:'

    for (contador = inicio; contador <= fim; contador += passo) {
      res.innerHTML += ` ${contador} \u{1F449} `
      res.innerHTML += ` \u{1F3C1}`  
    } 
  
  } else {
    res.innerHTML = 'Contando:'

    for (contador = inicio; contador >= fim; contador -= passo) {
      res.innerHTML += ` ${contador} \u{1F449} `
      res.innerHTML += ` \u{1F3C1}`  
    }
  }
}


