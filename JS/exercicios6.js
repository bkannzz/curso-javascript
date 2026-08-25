/* EX01 */

let aluno = 'Isabela'
let nota1 = 8
let nota2 = 10

let media = (nota1 + nota2) / 2

if (media >= 7) {
    console.log(`${aluno}, você foi aprovada!`)
} else if (media >= 5){
    console.log(`${aluno}, você ficou de recuperação!`)
} else{
    console.log(`${aluno}, você foi reprovada!`)
}

console.log('-------------------------------------------------------------')
/* EX02 */

let senha = 1234
let teste = 1234

if (teste === senha){
    console.log('Acesso Permitido')
} else{
    console.log('Acesso Negado')
}

console.log('-------------------------------------------------------------')
/* EX03 */

let idade = 68

console.log('Situação de voto:')

if (idade < 16){
    console.log('Não pode votar')
} else if (idade <= 17 || idade >= 70){
    console.log('Voto opcional')
} else if (idade <= 69){
    console.log('Voto obrigatório')
} else{
    console.log('Voto opcional')
}