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

let box1 = document.getElementsByClassName('col-md-5').length;

const stock = document.getElementById('InStock')
for (let i =1; i < stock.childNodes.length+1; i++){
	document.getElementById(`open_mod_${i}`).addEventListener("click", function() {
		document.getElementById(`mod_${i}`).classList.add("open")
	})

	window.addEventListener('keydown', (e) => {
		if (e.key === "Escape") {
			document.getElementById(`mod_${i}`).classList.remove("open")
		}
	});
	document.querySelector(`#mod_${i} .modal_box`).addEventListener('click', event => {
		event._isClickWithInModal = true;
	});
	document.getElementById(`mod_${i}`).addEventListener('click', event => {
		if (event._isClickWithInModal) return;
		event.currentTarget.classList.remove('open');
	}); 

	document.getElementById(`close-my-modal-btn${i}`).addEventListener("click", function() {
		document.getElementById(`mod_${i}`).classList.remove("open")
	})	
}

