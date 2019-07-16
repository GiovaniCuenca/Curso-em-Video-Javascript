let num = [5, 6, 8 ,9, 3]
num[5] = 1
num[6] = 7

num.push(10)
num.push(99)

/*
for (c = 0; c < num.length; c ++) {
    console.log(`a posição ${c} tem o número ${num[c]}`)
}

for ( c in num) {
    console.log(`a posição ${c} tem o número ${num[c]}`)
}
*/

// Verificar se o valor contem no Array

var buscar = 10

if (num.indexOf(buscar) == -1){
    console.log('Valor não encontrado')
} else {
    console.log(`O N° índice de ${buscar} é ${num.indexOf(buscar)}`)
}