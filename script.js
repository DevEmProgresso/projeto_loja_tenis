let prevBtn = document.getElementById('prev')
let nextBtn = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .list-item')
let indicators = document.querySelector('.indicators')
let dots = indicators.querySelectorAll('ul li')


let active = 0
let firstposition = 0
let lastposition = items.length -1


function setSlider(){
    let itemOld = container.querySelector('.list .list-item.active')
    itemOld.classList.remove('active')

    let dotOld = indicators.querySelector('ul li.active')
    dotOld.classList.remove('active')
    dots[active].classList.add('active')

    indicators.querySelector('.numeros').innerHTML = active + 1
}


nextBtn.onclick =() =>{  
    active = active +1 > lastposition ? 0 : active + 1
    setSlider()
    items[active].classList.add('active')

    

}

prevBtn.onclick = ()=> {
    active = active - 1 < firstposition ? lastposition : active - 1
    setSlider()
    items[active].classList.add('active')

}

btnComprar.onclick = ()=>{
    console.log('teste')
}