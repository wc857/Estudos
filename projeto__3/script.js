document.addEventListener('keyup', function(){

    if (event.key === 'Enter'){
        const but = document.querySelector('#bu')
        but.click()    
    }
});

function loading(){
    document.querySelector('.carregamento').style.display = 'none'
    document.querySelector('main').style.display = 'flex'
}