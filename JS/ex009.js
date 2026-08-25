const alunoSenai ={ /* Objeto */
    nome:"carlos",
    idade: 30,
    curso: "javascript",
    estudar: function(materia){
        console.log('ESTOU ESTUDANDO...', materia)
    } 
}

console.log(alunoSenai)
alunoSenai.estudar("Objetos")
alunoSenai.estudar("Javascript no navegador")