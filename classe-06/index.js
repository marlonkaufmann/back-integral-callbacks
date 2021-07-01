/* const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];

let t = 10000 / jogadores.length;
let i = 0;

function impressaoJogador() {
    if (i < jogadores.length) {
        console.log(jogadores[i]);
        i++;
    } else {
        console.log("A rodada terminou!")
        clearInterval(intervalID);
    }
};
impressaoJogador();
const intervalID = setInterval(impressaoJogador, t);*/


const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];
//rodada padrao 10s
let t = 10 //segundos
let tempoPorJogador = t / jogadores.length;
let i = 0;
let jogDaVez = function () {

    if (i < jogadores.length) {
        console.log(jogadores[i]);
        i++;
    } else {
        console.log("A rodada terminou!")
        clearInterval(intervalID);
    }
}

jogDaVez();
const intervalID = setInterval(jogDaVez, (tempoPorJogador * 1000));
