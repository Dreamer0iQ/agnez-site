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


sum_elem_strochki = document.getElementById(`strochki`).childElementCount
sum_elem_stroki = document.getElementById(`stroki`).childElementCount


for (let i =1; i < sum_elem_stroki+1; i++){
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
		console.log(document.getElementById('jewelry_all').childElementCount)
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

for (let i =1; i < sum_elem_strochki+1; i++){
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

function filterSelection(category) {
    var products = document.getElementsByClassName('product');
    for (var i = 0; i < products.length; i++) {
		if (products[i].getAttribute('data-category').slice(-2) === category.slice(-2)) {
			hideProduct(products[i]);
		}
		if (products[i].getAttribute('data-category').indexOf(category) > -1) {
			showProduct(products[i]);
      	}
		if ((category === 'all_IS') || (category === 'all_JA')) {
			if (products[i].getAttribute('data-category').slice(-2) === category.slice(-2)) {
				showProduct(products[i]);
			}
		}
    }
  }
  
  function hideProduct(element) {
    element.classList.add('hide');
    element.classList.remove('show');
  }
  
  function showProduct(element) {
    element.classList.add('show');
    element.classList.remove('hide');
  }
  
