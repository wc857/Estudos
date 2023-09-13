const num = document.querySelector('.cabeca')
const buttons = document.querySelectorAll('.buto button')

buttons.forEach((item) => item.addEventListener('click', function(){
    if (item.textContent == 'DEL'){
        let conjunto = num.querySelector('h1').textContent.slice()

        var numero = ''
        
        for (let d = 0; d <= conjunto.length -2; d+=1){
            numero += conjunto[d]
        }
        
        if (numero != ''){
            num.querySelector('h1').textContent = numero
        }else{
            num.querySelector('h1').textContent = 0
        }
    }else if (item.textContent == 'C'){
        num.querySelector('h1').textContent = 0
        num.querySelector('#sub').textContent = 0
    }else if (item.textContent == '+' || item.textContent == '-' || item.textContent == 'X'){
        var operando = item.textContent
        var numero = Number(num.querySelector('h1').textContent)
        var numero_2 = Number(num.querySelector('#sub').textContent)

        if (operando == '+'){
            numero_2 += numero
            num.querySelector('h1').textContent = 0
            num.querySelector('#sub').textContent = numero_2
            num.querySelector('#operando').textContent = operando
        }else if (operando == '-' && numero_2 != 0){
            numero_2 -= numero
            num.querySelector('h1').textContent = 0
            num.querySelector('#sub').textContent = numero_2
            num.querySelector('#operando').textContent = operando
        }else if(operando == '-' && numero_2 == 0){
            numero -= numero_2
            num.querySelector('h1').textContent = 0
            num.querySelector('#sub').textContent = numero
            num.querySelector('#operando').textContent = operando

        }else if (operando == 'X' && numero_2 == 0){
            num.querySelector('h1').textContent = 0
            num.querySelector('#sub').textContent = numero
            num.querySelector('#operando').textContent = operando
        }else if (operando == 'X' && numero_2 !=0){
            numero_2 *= numero
            num.querySelector('h1').textContent = 0
            num.querySelector('#sub').textContent = numero_2
            num.querySelector('#operando').textContent = operando
        }
    }else if (item.textContent == '='){
        var operador = num.querySelector('#operando').textContent
        var n = num.querySelector('h1').textContent
        var n_1 = num.querySelector('#sub').textContent

        if (operador == '+' && n != 0){
            var soma = Number(n)
            var soma_1 = Number(n_1)
            var soma_2 = soma + soma_1
            num.querySelector('h1').textContent = soma_2
            num.querySelector('#sub').textContent = 0
            num.querySelector('#operando').textContent = '='
        }else if (operador == '-' && n != 0){
            var sub = Number(n)
            var sub_1 = Number(n_1)
            var sub_3 = sub_1 - sub
            num.querySelector('h1').textContent = sub_3
            num.querySelector('#sub').textContent = 0
            num.querySelector('#operando').textContent = '='
        }else if (operador == 'X' && n != 0){
            var mul = Number(n)
            var mul_1 = Number(n_1)
            var mul_2 = mul*mul_1
            num.querySelector('h1').textContent = mul_2
            num.querySelector('#sub').textContent = 0
            num.querySelector('#operando').textContent = '='
        }else if (n == 0){
            num.querySelector('h1').textContent = n_1
            num.querySelector('#sub').textContent = 0
        }
    }else{
        
        if (num.querySelector('h1').textContent == 0){
            var numeros = num.querySelector('h1').textContent = ''
            numeros += item.textContent
            num.querySelector('h1').textContent = numeros
        }else if (num.querySelector('#operando').textContent == '='){
            var numeros = num.querySelector('h1').textContent = ''
            numeros += item.textContent
            num.querySelector('h1').textContent = numeros

        }else{
            var numeros = num.querySelector('h1').textContent
            numeros += item.textContent
            num.querySelector('h1').textContent = numeros
        }
    }
}))