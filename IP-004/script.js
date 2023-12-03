function capturarInformacoes(botao) {
    var elemento = botao.parentElement;
    var cidade = elemento.querySelector('h3').textContent;
    var preco = elemento.querySelector('h2').textContent;
    var detalhes = elemento.querySelectorAll('ul li');

    var pacoteTuristico = {
        cidade: cidade,
        preco: preco,
        detalhes: []
    };

    detalhes.forEach(function (item) {
        pacoteTuristico.detalhes.push(item.textContent.trim());
    });

    console.log(JSON.stringify(pacoteTuristico, null, 2));
}
