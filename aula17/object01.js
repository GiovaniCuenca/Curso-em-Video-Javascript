let amigo = {
    nome: 'Giovani',
    sexo: 'M',
    idade: 30,
    peso: 77.5,
    engordar(p = 0){
        console.log('Engordou')
        this.peso += p
    }
}

amigo.engordar(2)

console.log(`${amigo.nome} pesa ${amigo.peso}`)