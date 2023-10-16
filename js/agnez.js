const body = document.getElementsByTagName('body')[0]
body.style.overflow = 'hidden'

function loadAfterTime() { 
    console.log('Шапка уменьшена');
	body.style.overflow = 'scroll'
    const tinyagnez = document.querySelector('#header');
    tinyagnez.style.height = '13%'
}

document.querySelector('#agnez').onclick=loadAfterTime

window.onload = function(){
    setTimeout(loadAfterTime, 1000)
};

function ScrollUp() {
    const elem = document.querySelector('#fsf')
    const scrollHeightY = elem.offsetHeight
    scrollTo(0, scrollHeightY)
}



let box1 = document.getElementsByClassName('col-md-5').length
for (let i =1; i < box1+1; i++){
	children = document.getElementById(`stroka_${i}`).childElementCount
	if ((children) === 4) {
		document.getElementById(`stroka_${i}`).classList.add("four-products")
	}
	if ((children) === 3) {
		document.getElementById(`stroka_${i}`).classList.add("three-products")
	}
	if ((children) === 2) {
		document.getElementById(`stroka_${i}`).classList.add("two-products")
	}
	if ((children) === 1) {
		document.getElementById(`stroka_${i}`).classList.add("one-products")
	}
}

let dexp = document.getElementsByClassName('col-md-4').length
for (let i =1; i < dexp+1; i++){
	children1 = document.getElementById(`strochka_${i}`).childElementCount
	if ((children1) === 4) {
		document.getElementById(`strochka_${i}`).classList.add("four-products")
	}
	if ((children1) === 3) {
		document.getElementById(`strochka_${i}`).classList.add("three-products")
	}
	if ((children1) === 2) {
		document.getElementById(`strochka_${i}`).classList.add("two-products")
	}
	if ((children1) === 1) {
		document.getElementById(`strochka_${i}`).classList.add("one-products")
	}
}


const stock = document.getElementById('InStock')
for (let i =1; i < stock.childNodes.length*box1*2; i++){
	document.getElementById(`open_mod_${i}`).addEventListener("click", function() {
		document.getElementById(`mod`).classList.add("open")
		let image = document.querySelector(`#open_mod_${i} .imageprod`).innerHTML
		let text = document.querySelector(`#open_mod_${i} .info > h3`).innerHTML
		let price = document.querySelector(`#open_mod_${i} .price`).innerHTML
		let about = document.querySelector(`#open_mod_${i} .aboutjewelry`).innerHTML
		document.querySelector(`#mod .mod-image`).innerHTML = image
		document.querySelector(`#mod .mod-opis > h2`).innerHTML = text
		document.querySelector(`#mod .mod-prise`).innerHTML = price
		document.querySelector(`#mod .mod-opis > p`).innerHTML = about
		body.style.overflow = 'hidden'
	})

	window.addEventListener('keydown', (e) => {
		if (e.key === "Escape") {
			document.getElementById(`mod`).classList.remove("open");
			body.style.overflow = 'scroll';
		}
	});
	document.querySelector(`#mod .modal_box`).addEventListener('click', event => {
		event._isClickWithInModal = true;
	});
	document.getElementById(`mod`).addEventListener('click', event => {
		if (event._isClickWithInModal) return;
		event.currentTarget.classList.remove('open');
		body.style.overflow = 'scroll';
	}); 

	document.getElementById(`close-my-modal`).addEventListener("click", function() {
		document.getElementById(`mod`).classList.remove("open");
		body.style.overflow = 'scroll';
	})	
}

const stock2 = document.getElementById('jewelry_all').childElementCount
for (let i =1; i < stock2*box2*3; i++){
	document.getElementById(`openmod_${i}`).addEventListener("click", function() {
		document.getElementById(`mod`).classList.add("open")
		let image = document.querySelector(`#openmod_${i} .imageprod`).innerHTML
		let text = document.querySelector(`#openmod_${i} .info > h3`).innerHTML
		let price = document.querySelector(`#openmod_${i} .price`).innerHTML
		let about = document.querySelector(`#openmod_${i} .aboutjewelry`).innerHTML
		document.querySelector(`#mod .mod-image`).innerHTML = image
		document.querySelector(`#mod .mod-opis > h2`).innerHTML = text
		document.querySelector(`#mod .mod-prise`).innerHTML = price
		document.querySelector(`#mod .mod-opis > p`).innerHTML = about
		body.style.overflow = 'hidden'
	})

	window.addEventListener('keydown', (e) => {
		if (e.key === "Escape") {
			document.getElementById(`mod`).classList.remove("open");
			body.style.overflow = 'scroll';
		}
	});
	document.querySelector(`#mod .modal_box`).addEventListener('click', event => {
		event._isClickWithInModal = true;
	});
	document.getElementById(`mod`).addEventListener('click', event => {
		if (event._isClickWithInModal) return;
		event.currentTarget.classList.remove('open');
		body.style.overflow = 'scroll';
	}); 

	document.getElementById(`close-my-modal`).addEventListener("click", function() {
		document.getElementById(`mod`).classList.remove("open");
		body.style.overflow = 'scroll';
	})	
}
