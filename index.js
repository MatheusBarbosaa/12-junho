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
