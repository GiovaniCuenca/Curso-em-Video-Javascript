function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

  } if (fsex[0].checked) {
    genero = 'Homem'
    if (idade >= 0 && idade < 10) {
      //Crianca
      img.setAttribute('src', 'homembebe.png')
    } else if (idade < 21) {
      //Jovem
      img.setAttribute('src', 'homemjovem.png')
    } else if (idade < 50) {
      img.setAttribute('src', 'homemadulto.png')
    } else {
      img.setAttribute('src', 'homemsenhor.png')
    }
  } else if (fsex[1].checked) {
    genero = 'Mulher'
    if (idade >= 0 && idade < 10) {
      //Crianca
      img.setAttribute('src', 'mulherbebe.png')
    } else if (idade < 21) {
      //Jovem
      img.setAttribute('src', 'mulherjovem.png')
    } else if (idade < 50) {
      //Adulto
      img.setAttribute('src', 'mulheradulta.png')
    } else {
      //Idoso
      img.setAttribute('src', 'mulhersenhora.png')
    }
  }

  res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
  res.appendChild(img)

}