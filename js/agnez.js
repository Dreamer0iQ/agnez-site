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




// mod1
document.getElementById("open_mod_1").addEventListener("click", function() {
    document.getElementById("mod_1").classList.add("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("mod_1").classList.remove("open")
    }
});

document.querySelector("#mod_1 .modal_box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("mod_1").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
}); 

document.getElementById("close-my-modal-btn1").addEventListener("click", function() {
    document.getElementById("mod_1").classList.remove("open")
})



// mod2
document.getElementById("open_mod_2").addEventListener("click", function() {
    document.getElementById("mod_2").classList.add("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("mod_2").classList.remove("open")
    }
});

document.querySelector("#mod_2 .modal_box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("mod_2").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
}); 

document.getElementById("close-my-modal-btn2").addEventListener("click", function() {
    document.getElementById("mod_2").classList.remove("open")
})


// mod3
document.getElementById("open_mod_3").addEventListener("click", function() {
    document.getElementById("mod_3").classList.add("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("mod_3").classList.remove("open")
    }
});

document.querySelector("#mod_3 .modal_box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("mod_3").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
}); 

document.getElementById("close-my-modal-btn3").addEventListener("click", function() {
    document.getElementById("mod_3").classList.remove("open")
})
