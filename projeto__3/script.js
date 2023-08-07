document.addEventListener('keyup', function(){

    if (event.key === 'Enter'){
        const but = document.querySelector('#bu')
        but.click()    
    }
});

window.alert('Seja Bem-Vindo a nossa Plataforma!')