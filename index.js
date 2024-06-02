(function () {
    const snowContainer = document.getElementById('snowfall');
    const snowflakeCount = 100;

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.width = Math.random() * 5 + 2 + 'px';
        snowflake.style.height = snowflake.style.width;
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowContainer.appendChild(snowflake);

        snowflake.addEventListener('animationend', function () {
            snowflake.remove();
        });
    }

    for (let i = 0; i < snowflakeCount; i++) {
        setTimeout(createSnowflake, Math.random() * 5000);
    }

    setInterval(createSnowflake, 300);
})();





// Dados dos lugares para visitar
const lugaresParaVisitar = [
    {
        nome: "Paris, França",
        imagem: "img/paris.jpg",
        descricao: "Explore a Cidade Luz e seus pontos turísticos icônicos, como a Torre Eiffel e o Louvre."
    },
    // Adicione mais destinos conforme necessário
];

// Função para criar cartões de destino
function criarCartoesDeDestino() {
    const lugaresContainer = document.querySelector('#lugares .row');
    lugaresParaVisitar.forEach(lugar => {
        const cardHtml = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${lugar.imagem}" class="card-img-top" alt="${lugar.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${lugar.nome}</h5>
                        <p class="card-text">${lugar.descricao}</p>
                    </div>
                </div>
            </div>
        `;
        lugaresContainer.innerHTML += cardHtml;
    });
}

// Chame a função para criar os cartões quando a página carregar
window.addEventListener('load', criarCartoesDeDestino);
