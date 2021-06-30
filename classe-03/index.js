const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

let resposta = frutas.map((x, index, array) => {

   xPeq = x.toLowerCase();
   xSemInicial = xPeq.substring(1)
   xInicialUpper = x[0].toUpperCase()
   xOK = xInicialUpper + xSemInicial
  
   return x = (`${index} - ${xOK}`)
   
})

console.log(resposta)