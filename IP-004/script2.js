function inserirDestino() {
    var formulario = document.getElementById('formularioViagem');
    var cidade = formulario.elements['cidade'].value;
    var detalhes = formulario.elements['detalhes'].value;
    var preco = formulario.elements['preco'].value;
    var imagemURL = formulario.elements['imagemURL'].value;

    // Cria um novo elemento div com a classe 'elementos' para representar o destino
    var novoDestino = document.createElement('div');
    novoDestino.className = 'elementos';

    // Conteúdo do novo destino
    novoDestino.innerHTML = `
        <header>
            <img src="${imagemURL}" alt="${cidade}">
            <h3>${cidade}</h3>
        </header>
        <main>
            <ul>
                ${detalhes.split('\n').map(d => `<li>${d}</li>`).join('')}
            </ul>
            <div>
                <h2>${preco}</h2>
                <span>Taxas inclusas</span>
                <span>Em até 10x sem Juros</span>
            </div>
        </main>
        <button>Comprar</button>
    `;

    // Adiciona o novo destino ao container destinos
    var destinosContainer = document.getElementById('destinosContainer');
    destinosContainer.appendChild(novoDestino);

    formulario.reset();
}
