const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

let novasCidades = cidades.filter (x => x.length < 9);

console.log(novasCidades)
