const list = document.querySelectorAll('.list')

list.forEach((item) => item.addEventListener('click', () =>{
    let clases = item.classList.value.split(' ')
    const indicator = document.querySelector('.select')
    console.log(indicator)
    
    if (clases.length == 2){
        item.classList.remove('active')
        indicator.style.display = 'none'
    }else{
        let incid = indicator.classList

        if (incid.length > 1){
            indicator.classList.remove('selecta')
            indicator.classList.remove('selectb')
            indicator.classList.remove('selectc')
            indicator.classList.remove('selectd')
            indicator.classList.remove('selecte')
        }
        indicator.style.display = 'block'

        

        for (let d = 0; d <= list.length - 1 ; d +=1){

            if (list[d].classList.length == 2){

                list[d].classList.remove('active')
            }
        }

        item.classList.add('active')
        
        for (let d = 0; d<= list.length - 1; d += 1){
            
            if (list[d].classList.length == 2){
                console.log(d)
                if (d == 0){
                    indicator.style.display = 'block'
                }else if (d == 1){
                    indicator.classList.add('selecta')
                }else if ( d == 2){
                    indicator.classList.add('selectb')
                }else if (d == 3){
                    indicator.classList.add('selectc')
                }else if (d == 4){
                    indicator.classList.add('selectd')
                }
            }
        }
    }
}))