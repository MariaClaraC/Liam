let item1 = document.querySelector('.item1') 
let item2 = document.querySelector('.item2') 
let item3 = document.querySelector('.item3') 
let attc = document.querySelector('.attC') 
let attm = document.querySelector('.attM') 
let attp = document.querySelector('.attP')
let fechar = document.querySelector('.fechar')

item1.addEventListener('mouseenter', function() {
	attc.classList.remove('invisivel')
	attm.classList.add('invisivel')
	attp.classList.add('invisivel')
})

item2.addEventListener('mouseenter', function() {
	attm.classList.remove('invisivel')
	attc.classList.add('invisivel')
	attp.classList.add('invisivel')
})

item3.addEventListener('mouseenter', function() {
	attp.classList.remove('invisivel')
	attc.classList.add('invisivel')
	attm.classList.add('invisivel')
})

fechar.addEventListener('click', function() {
	attc.classList.add('invisivel')
	attm.classList.add('invisivel')
	attp.classList.add('invisivel')
})