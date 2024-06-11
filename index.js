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


/* CARTÃO */
const envelope = document.querySelector('.envelope-wrapper');
envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
});

/* SESSÃO DO QUIZ */

document.addEventListener('DOMContentLoaded', function () {
    // Obtém o formulário e o campo de entrada de mensagem
    const form = document.getElementById('form-contato');
    const mensagemInput = document.getElementById('mensagem');

    // Adiciona um ouvinte de evento para o envio do formulário
    form.addEventListener('submit', function (event) {
        // Impede o comportamento padrão do formulário de ser enviado
        event.preventDefault();

        // Obtém o valor da mensagem do campo de entrada
        const mensagem = mensagemInput.value;

        // Verifica se há uma mensagem válida
        if (mensagem.trim() !== '') {
            // Salva a mensagem no localStorage
            localStorage.setItem('mensagemContato', mensagem);

            // Limpa o campo de entrada para futuras mensagens
            mensagemInput.value = '';

            // Confirmação para o usuário
            alert('Mensagem de contato enviada com sucesso!');
        } else {
            // Se a mensagem estiver vazia, exibe um alerta informando ao usuário para inserir uma mensagem válida
            alert('Por favor, insira uma mensagem antes de enviar.');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Recupera a mensagem salva do localStorage
    const mensagemSalva = localStorage.getItem('mensagemContato');

    // Verifica se há uma mensagem salva e a exibe
    if (mensagemSalva) {
        // Aqui você pode escolher como deseja exibir a mensagem salva, por exemplo, pode adicioná-la a um elemento HTML existente
        const mensagemElement = document.createElement('p');
        mensagemElement.textContent = mensagemSalva;
        document.getElementById('mensagemSalva').appendChild(mensagemElement);
    } else {
        console.log('Nenhuma mensagem de contato salva encontrada.');
    }
});











