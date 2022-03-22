var carta1 = {
    nome: "Penny",
    imagem: "https://jpimg.com.br/uploads/2020/04/kaley-cuoco-big-bang-theory.jpg",
    atributos: {
        beleza: 10,
        inteligência: 4,
        simpatia: 8
    }
};

var carta2 = {
    nome: "Sheldon",
    imagem: "https://s2.glbimg.com/9Uw5TKQFxeMTuliS3f4cS4LoiU4=/600x400/smart/e.glbimg.com/og/ed/f/original/2020/08/11/sheldon_cooper_the_big_bang_theory.jpg",
    atributos: {
        beleza: 7,
        inteligência: 10,
        simpatia: 2
    }
};

var carta3 = {
    nome: "Leonard",
    imagem: "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/lh5nrx3pk5cla2wq_1619679890.jpeg",
    atributos: {
        beleza: 5,
        inteligência: 8,
        simpatia: 10
    }
};

var carta4 = {
    nome: "Howard",
    imagem: "https://epipoca.com.br/wp-content/uploads/2021/07/Howard-Simon-Helberg-em-The-Big-Bang-Theory-Reproducaoz.jpg",
    atributos: {
        beleza: 4,
        inteligência: 9,
        simpatia: 8
    }
};

var carta5 = {
    nome: "Rajesh",
    imagem: "https://poltronanerd.com.br/wp-content/uploads/2018/05/89830133_rajeshs7.jpg",
    atributos: {
        beleza: 6,
        inteligência: 7,
        simpatia: 8
    }
};

var carta6 = {
    nome: "Bernadete",
    imagem: "https://s2.glbimg.com/thUpkNzigmY4OAZ-MA5GpXLJmRk=/620x413/top/e.glbimg.com/og/ed/f/original/2020/05/04/melissa-rauch.jpg",
    atributos: {
        beleza: 9,
        inteligência: 9,
        simpatia: 9
    }
};

var carta7 = {
    nome: "Amy",
    imagem: "https://www.tricurioso.com/wp-content/uploads/2019/07/saiba-quem-sao-os-atores-mais-ricos-da-serie-the-big-bang-theory-6.jpg",
    atributos: {
        beleza: 7,
        inteligência: 10,
        simpatia: 8
    }
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 7);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 7);
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 7);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirCartaJogador();
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");

    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value;
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");

    if (
        cartaJogador.atributos[atributoSelecionado] >
        cartaMaquina.atributos[atributoSelecionado]
    ) {
        htmlResultado = "<p class='resultado-final'>Venceu</p>";
    } else if (
        cartaJogador.atributos[atributoSelecionado] <
        cartaMaquina.atributos[atributoSelecionado]
    ) {
        htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
        htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }
    divResultado.innerHTML = htmlResultado;

    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;" > ';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }

    var nome = `<p class="carta-subtitle"> ${cartaJogador.nome}</p>`

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var moldura =
        '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto +=
            "<p type='text' name='atributo' value='" +
            atributo +
            "'>" +
            atributo +
            " " +
            cartaMaquina.atributos[atributo] +
            "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

