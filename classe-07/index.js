let conteudoArquivo = "Estou aprendendo JavaScript na Cubos Academy"

const fs = require('fs');


fs.writeFile("./meuarquivo.txt", conteudoArquivo, () => {
    console.log("O arquivo foi escrito")
})