var tempo = new Date
var hora = tempo.getHours()
var minuto = tempo.getMinutes()

const compri = document.querySelector('.b #pr h1')
const buttom = document.querySelector('.wal')

if (hora >= 6 && hora < 12){
    compri.textContent = 'Bom dia!'
}else if (hora >= 12 && hora < 18){
    compri.textContent = 'Boa tarde!'
}else if (hora >= 18 && hora <= 23){
    compri.textContent = 'Boa noite!'
}else if (hora >23 && hora < 6){
    compri.textContent = 'Bom dia!'
}


buttom.addEventListener('click', function (){
    buttom.classList.toggle('pert')
    const dis =  document.querySelector('.navega nav').style.display
    var modo = document.querySelector('.navega nav')

    if (dis == 'flex'){
        modo.style.display = 'none'
    }else{
        modo.style.display = 'flex'
    }

    
})

const temperatura = document.querySelector('.b #pb p strong')

if (hora >= 6 && hora == 11){
    temperatura.textContent = '24°C'
}else if (hora > 11 && hora <= 14){
    temperatura.textContent = '31°C'
}else if (hora > 14 && hora <= 17){
    temperatura.textContent = '32°C'
}else if (hora > 17 && hora <= 21){
    temperatura.textContent = '22°C'
}else if (hora > 21 && hora <= 23){
    temperatura.textContent = '19°C'
}else if (hora >= 1 && hora < 6){
    temperatura.textContent = '20°C'
}

if (minuto >= 1 && minuto <10){
    var mu = '0' + minuto
}else{
    var mu = minuto
}

const tim = document.querySelector('.circu p').textContent = `${hora}:${mu}`