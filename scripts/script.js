document.querySelector('#PapelAmarelo2').onclick = function () {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            for (var i = 0; i < 25; i++) {
                let resposta = this.response;
                document.querySelectorAll(".bloco")[i].innerHTML = resposta[i];
                //por algum motivo um erro aparece no console, aparentemente nao interfere em nd
                //20 minutos tentando resolver e nada

                document.querySelector("#PapelAmarelo3").style.display = "block";
                document.querySelector("#PapelAmarelo2").style.display = "none";
            }
        }
    }
    xhttp.open("GET", "./php/geradorTabela.php", true);
    xhttp.responseType = "json";
    xhttp.send();
}

var xhttpNUM = new XMLHttpRequest();
xhttpNUM.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        numerosSorteados = JSON.parse(this.responseText)
    }
}
xhttpNUM.open("GET", "./php/geradorDeNumero.php", true);
xhttpNUM.send();


var rodadas = 0;
var numerodeX = 0;
var pontos = 0;
var pontoscoluna = 0;
var pontoslinha = 0;
var flag1 = 0;
var flag2 = 0;
var flag3 = 0;
var flag4 = 0;
var flag5 = 0;
var flag6 = 0;
var flag7 = 0;
var flag8 = 0;
var flag9 = 0;
var flag10 = 0;
var posicao = document.querySelectorAll(".bloco");



function clique() {
    if (rodadas < 80) {

        for (var i = 0; i < 25; i++) {
            if (document.querySelectorAll(".bloco")[i].innerHTML == numerosSorteados[rodadas]) {
                document.querySelectorAll(".bloco")[i].innerHTML = "X"
                numerodeX++;
                pontos++;
                document.querySelector("#pontuacao1").innerHTML = "+" + numerodeX + " por acertar Números!";

            }
        }


        if (posicao[0].innerHTML == "X" && posicao[5].innerHTML == "X" && posicao[10].innerHTML == "X" && posicao[15].innerHTML == "X" && posicao[20].innerHTML == "X" && flag1 == 0) {
            pontoscoluna = pontoscoluna + 5;
            document.querySelector("#pontuacao2").innerHTML = "+" + pontoscoluna + " por acertar Colunas!";
            pontos = pontos + 5;
            flag1 = 1;
        }

        if (posicao[1].innerHTML == "X" && posicao[6].innerHTML == "X" && posicao[11].innerHTML == "X" && posicao[16].innerHTML == "X" && posicao[21].innerHTML == "X" && flag2 == 0) {
            pontoscoluna = pontoscoluna + 5;
            document.querySelector("#pontuacao2").innerHTML = "+" + pontoscoluna + " por acertar Colunas!";
            pontos = pontos + 5;
            flag2 = 1;
        }

        if (posicao[2].innerHTML == "X" && posicao[7].innerHTML == "X" && posicao[12].innerHTML == "X" && posicao[17].innerHTML == "X" && posicao[22].innerHTML == "X" && flag3 == 0) {
            pontoscoluna = pontoscoluna + 5;

            document.querySelector("#pontuacao2").innerHTML = "+" + pontoscoluna + " por acertar Colunas!";
            pontos = pontos + 5;
            flag3 = 1;
        }

        if (posicao[3].innerHTML == "X" && posicao[8].innerHTML == "X" && posicao[13].innerHTML == "X" && posicao[18].innerHTML == "X" && posicao[23].innerHTML == "X" && flag4 == 0) {
            pontoscoluna = pontoscoluna + 5;
            document.querySelector("#pontuacao2").innerHTML = "+" + pontoscoluna + " por acertar Colunas!";
            pontos = pontos + 5;
            flag4 = 1;
        }

        if (posicao[4].innerHTML == "X" && posicao[9].innerHTML == "X" && posicao[14].innerHTML == "X" && posicao[19].innerHTML == "X" && posicao[24].innerHTML == "X" && flag5 == 0) {
            pontoscoluna = pontoscoluna + 5;
            document.querySelector("#pontuacao2").innerHTML = "+" + pontoscoluna + " por acertar Colunas!";
            pontos = pontos + 5;
            flag5 = 1;
        }

        if (posicao[0].innerHTML == "X" && posicao[1].innerHTML == "X" && posicao[2].innerHTML == "X" && posicao[3].innerHTML == "X" && posicao[4].innerHTML == "X" && flag6 == 0) {
            pontoslinha = pontoslinha + 5;
            document.querySelector("#pontuacao3").innerHTML = "+" + pontoslinha + " por acertar Linhas!";
            pontos = pontos + 5;
            flag6 = 1;
        }

        if (posicao[5].innerHTML == "X" && posicao[6].innerHTML == "X" && posicao[7].innerHTML == "X" && posicao[8].innerHTML == "X" && posicao[9].innerHTML == "X" && flag7 == 0) {
            pontoslinha = pontoslinha + 5;
            document.querySelector("#pontuacao3").innerHTML = "+" + pontoslinha + " por acertar Linhas!";
            pontos = pontos + 5;
            flag7 = 1;
        }

        if (posicao[10].innerHTML == "X" && posicao[11].innerHTML == "X" && posicao[12].innerHTML == "X" && posicao[13].innerHTML == "X" && posicao[14].innerHTML == "X" && flag8 == 0) {
            pontoslinha = pontoslinha + 5;
            document.querySelector("#pontuacao3").innerHTML = "+" + pontoslinha + " por acertar Linhas!";
            pontos = pontos + 5;
            flag8 = 1;
        }

        if (posicao[15].innerHTML == "X" && posicao[16].innerHTML == "X" && posicao[17].innerHTML == "X" && posicao[18].innerHTML == "X" && posicao[19].innerHTML == "X" && flag9 == 0) {
            pontoslinha = pontoslinha + 5;
            document.querySelector("#pontuacao3").innerHTML = "+" + pontoslinha + " por acertar Linhas!";
            pontos = pontos + 5;
            flag9 = 1;
        }

        if (posicao[20].innerHTML == "X" && posicao[21].innerHTML == "X" && posicao[22].innerHTML == "X" && posicao[23].innerHTML == "X" && posicao[24].innerHTML == "X" && flag10 == 0) {
            pontoslinha = pontoslinha + 5;
            document.querySelector("#pontuacao3").innerHTML = "+" + pontoslinha + " por acertar Linhas!";
            pontos = pontos + 5;
            flag10 = 1;
        }

        if (rodadas == 0) {
            document.querySelector('#numerosSorteados').innerHTML += numerosSorteados[rodadas];
        } else {
            document.querySelector('#numerosSorteados').innerHTML += ", " + numerosSorteados[rodadas];
        }

        if (numerodeX == 25) {
            pontos = pontos + 25;
        }
        document.querySelector("#totalpontuacao").innerHTML = "Total : " + pontos + " Pontos";
        rodadas++;
        document.querySelector('.contador').innerHTML = rodadas + "/80";
    } else {
        window.alert("Parabéns você pontoou um total de " + pontos + " pontos! :)\nPara jogar novamente clique OK");
        window.location.reload();

    }
}