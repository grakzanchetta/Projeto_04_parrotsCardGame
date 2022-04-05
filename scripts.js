document.querySelector("header h1").innerHTML="PARROT CARD GAME" 

function configurarJogo (){
    cartas = ['unicornparrot','unicornparrot', 'tripletsparrot', 'tripletsparrot', 'revertitparrot', 'revertitparrot', 'metalparrot', 'metalparrot', 'fiestaparrot', 'fiestaparrot', 'explodyparrot', 'explodyparrot', 'bobrossparrot','bobrossparrot'];

    numeroCartas = Number(prompt("Escolha o número de cartas que deseja iniciar o jogo. Obs: Apenas valores pares, entre 4 e 14."));

    while (numeroCartas %2 !== 0 || numeroCartas < 4 || numeroCartas > 14){
        numeroCartas = Number(prompt("Escolha o número de cartas que deseja iniciar o jogo. Obs: Apenas valores pares, entre 4 e 14."));
    }
    return(numeroCartas);
}

function cortarBaralho(numeroCartas){
    baralhoCortado = cartas.slice(0 , numeroCartas);
    return(baralhoCortado);
}

function comparador() { 
        return Math.random() - 0.5; 
    }

function embaralharCartas(){
    cartasEmbaralhadas = baralhoCortado.sort(comparador);
    return (cartasEmbaralhadas);
}

function montarTabuleiro(cartasEmbaralhadas){
    for (i = 0; i < cartasEmbaralhadas.length; i++){  
        document.querySelector(".tabuleiro").innerHTML+=`<div class='carta'><img class='traseira-carta' onclick='virarCarta(this)' src='arquivos/front.png'/><img class='frente-carta escondido' src='arquivos/${cartasEmbaralhadas[i]}.gif' /></div>`        }
}    

function virarCarta(cartaVirada){
        cartaVirada.querySelector(".traseira-carta").add("escondido");
        cartaVirada.querySelector(".frente-carta").remove("escondido");
}

configurarJogo();
cortarBaralho(numeroCartas);
comparador();
embaralharCartas(baralhoCortado);
montarTabuleiro(cartasEmbaralhadas);
