document.querySelector("header h1").innerHTML="PARROT CARD GAME" 

const cartas = ['unicornparrot','unicornparrot', 'tripletsparrot', 'tripletsparrot', 'revertitparrot', 'revertitparrot', 'metalparrot', 'metalparrot', 'fiestaparrot', 'fiestaparrot', 'explodyparrot', 'explodyparrot', 'bobrossparrot','bobrossparrot'];
let numeroCartas = Number(prompt("Escolha o número de cartas que deseja iniciar o jogo. Obs: Apenas valores pares, entre 4 e 14."));
let baralhoCortado = cartas.slice(0 , numeroCartas);
let cartasEmbaralhadas = baralhoCortado.sort(comparador);
let primeiraCarta = null;
let segundaCarta = null;
let cartaVirada = null;

function configurarJogo (){
    while (numeroCartas %2 !== 0 || numeroCartas < 4 || numeroCartas > 14){
        numeroCartas = Number(prompt("Escolha o número de cartas que deseja iniciar o jogo. Obs: Apenas valores pares, entre 4 e 14."));
    }
    return(numeroCartas);
}

function cortarBaralho(numeroCartas){
    return(baralhoCortado);
}

function comparador() { 
    return Math.random() - 0.5; 
}

function embaralharCartas(){
    return (cartasEmbaralhadas);
}

function montarTabuleiro(cartasEmbaralhadas){
    for (i = 0; i < cartasEmbaralhadas.length; i++){  
        document.querySelector(".tabuleiro").innerHTML+=`<div class='carta' onclick='virarCarta(this)'><img class='traseira-carta'src='arquivos/front.png'/><img class='frente-carta escondido' src='arquivos/${cartasEmbaralhadas[i]}.gif' /></div>`        
    }
}    

function virarCarta(cartaVirada){
        cartaVirada.querySelector(".carta .traseira-carta").classList.add("escondido");
        cartaVirada.querySelector(".carta .frente-carta").classList.remove("escondido");
        if (primeiraCarta === null){
            primeiraCarta = cartaVirada;
        } else {
            segundaCarta = cartaVirada
        }
        igualdadeCartas();
}

function igualdadeCartas (){
    if (primeiraCarta.innerHTML === segundaCarta.innerHTML){
        primeiraCarta.classList.add("cartaOK");
        segundaCarta.classList.add("cartaOK");
        primeiraCarta.classList.remove("cartaNaoOK");
        segundaCarta.classList.remove("cartaNaoOK");
        alert("boa");
    } else {
        primeiraCarta.classList.add("cartaNaoOK");
        segundaCarta.classList.add("cartaNaoOK");
        primeiraCarta.classList.remove("cartaOK");
        segundaCarta.classList.remove("cartaOK");
    }
}

configurarJogo();
cortarBaralho(numeroCartas);
comparador();
embaralharCartas(baralhoCortado);
montarTabuleiro(cartasEmbaralhadas);