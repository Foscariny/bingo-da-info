<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./styles/style.css" />
    <title>Bingo da Informática</title>
</head>

<header>

</header>

<body>
    <div id="tabela">
        <table cellspacing=0 id="tab">
            <h1 id="TituloTabela">Bingo da Info</h1>
            <tr class="tabelinha">
                <td class="bloco"></td>
                <td class="bloco"></td>
                <td class="bloco"></td>
                <td class="bloco"></td>
                <td class="bloco"></td>
            </tr>
            <tr class="tabelinha">
                <td class="bloco"></td>
                <td class="bloco"></td>
                <td class="bloco"></td>
                <td class="bloco"></td>
                <td class="bloco"></td>
            </tr>
            <tr class="tabelinha">
                <td class="bloco"></td>
                <td class="bloco"></td>
                <td class="bloco"></td>
                <td class="bloco"></td>
                <td class="bloco"></td>
            </tr>
            <tr class="tabelinha">
                <td class="bloco"></td>
                <td class="bloco"></td>
                <td class="bloco"></td>
                <td class="bloco"></td>
                <td class="bloco"></td>
            </tr>
            <tr class="tabelinha">
                <td class="bloco"></td>
                <td class="bloco"></td>
                <td class="bloco"></td>
                <td class="bloco"></td>
                <td class="bloco"></td>
            </tr>

        </table>
    </div>

    <div id="mobile">
    <div id="PapelAmarelo">
        <h1>Numeros ja Sorteados</h1>
        <div class="sorteados"><p id="numerosSorteados"></p></div>
    </div>

    <div id="PapelRosa">
        <h1>Pontos</h1>
        <div class="pontos"><p id="pontuacao1"></p></div>
        <div class="pontos"><p id="pontuacao2"></p></div>
        <div class="pontos"><p id="pontuacao3"></p></div>
        <div class="pontos2"><p id="totalpontuacao">Total : 0 Pontos</p></div>
    </div>
    </div>

    <div id="PapelAmarelo2">
        <h1>Gerar Cartela</h1>
    </div>

    <div id="PapelAmarelo3" onclick="clique()">
        <h1>Sortear Numero</h1>
        <p class="contador">0/80</p>
    </div>

    <div id="PapelAzul">
        <h1>Regras</h1>
        <div class="regras"><p>- 25 números entre 1 e 99 serão gerados na tabela;</p></div>
        <div class="regras"><p>- Serão sorteados 80 números, em caso de sorteio de um dos números da tabela sua cor mudará e será recebido 1 ponto;</p></div>
        <div class="regras"><p>- Se uma linha horizontal ou vertical for completa serão recebidos mais 5 pontos, para linha diagonal receberá 7, e se a tabela for completa serão 50 pontos</p></div>
    </div>


    <script src="./scripts/script.js"></script>


</body>

</html>