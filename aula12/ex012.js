var agora = new Date()
var horario = `${agora.getHours()}:${agora.getMinutes()}`

console.log(`Agora são exatamente ${horario} ${saudacao()}`)

function saudacao() {
if (horario <= 4) {
  return 'da madrugada!'
} else if (horario < 12) {
  return 'do dia!'
} else if (horario <= 18) {
  return 'da tarde!'
} else {
  return 'da noite!'
}
}