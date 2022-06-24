const alunos = [
    {nome: 'Joao', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

// Imperativa
let total1 = 0
for (let i=0; i<alunos.length; i++){
    total1+= alunos[i].nota
}

console.log(total1/alunos.length)

//declarativo

const getNota = aluno=> aluno.nota
const soma = (total,atual) => total+atual
const total2 = alunos.map(getNota).reduce(soma)
const media = total => total/alunos.length
console.log(media(total2))