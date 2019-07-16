function parimp(n) {
    if (n % 2 == 0) {
        return `Número ${n} é par`
    } else {
        return `Número ${n} é impar`
    }
}

console.log(parimp(7))

//Parâmetros Opcionais no n1 e n2 como Zero(0)

function somar (n1 = 0, n2 = 0) {
    return n1 + n2
}

console.log(somar(9))