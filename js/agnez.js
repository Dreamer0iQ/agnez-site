document.querySelector('#agnez').onclick=function TinyAgnez() {
    console.log('Шапка уменьшена');
    const tinyagnez = document.querySelector('#header');
    tinyagnez.style.height = '13%'
    const tinyagnez1 = document.querySelector('#headerfikt');
    tinyagnez1.style.height = '13%'
}

window.onload = function(){

    setTimeout(loadAfterTime, 1000)
};

function loadAfterTime() { 
    console.log('Шапка уменьшена');
    const tinyagnez = document.querySelector('#header');
    tinyagnez.style.height = '13%'
    const tinyagnez1 = document.querySelector('#headerfikt');
    tinyagnez1.style.height = '13%'
    }
    

function ScrollUp() {
    const elem = document.querySelector('#fsf')
    const scrollHeightY = elem.offsetHeight
    scrollTo(0, scrollHeightY)
}

let box1 = document.getElementsByClassName('col-md-5').length;

console.log(box1);