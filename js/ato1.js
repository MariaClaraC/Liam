// final de ato
let botao = document.querySelector(".botao")
let rodape = document.querySelector(".rodape")

//lets do swiish
let mark_will = document.querySelector(".mark-will")
let mw_img = document.querySelector('.mw_img')
let ruby_will = document.querySelector(".ruby-will")
let rw_img = document.querySelector('.rw_img')
let rw_img2 = document.querySelector('.rw_img2')

let selection1 = document.querySelector('.selection1')
let select2_a = document.querySelector('.select2-a')
let select2_b = document.querySelector('.select2-b')
let selection2_a = document.querySelector('.selection2-a')
let selection2_b = document.querySelector('.selection2-b')

let select3_a1 = document.querySelector('.select3-a1')
let select3_b1 = document.querySelector('.select3-b1')
let selection3_a1 = document.querySelector('.selection3-a1')
let selection3_b1 = document.querySelector('.selection3-b1')

let select3_a2 = document.querySelector('.select3-a2')
let select3_b2 = document.querySelector('.select3-b2')
let selection3_a2 = document.querySelector('.selection3-a2')
let selection3_b2 = document.querySelector('.selection3-b2')

select2_a.addEventListener('click', function() {
	selection1.classList.add('invisivel')
	selection2_a.classList.remove('invisivel')
	selection2_a.classList.remove('blur')
	selection2_a.classList.add('no-blur')
})

mark_will.addEventListener('click', function() {
	mw_img.classList.remove('invisivel')
	mw_img.classList.remove('blur')
	mw_img.classList.add('no-blur')
})

select2_b.addEventListener('click', function() {
	selection1.classList.add('invisivel')
	selection2_b.classList.remove('invisivel')
	selection2_b.classList.remove('blur')
	selection2_b.classList.add('no-blur')
})

ruby_will.addEventListener('click', function() {
	rw_img.classList.remove('invisivel')
	rw_img.classList.remove('blur')
	rw_img.classList.add('no-blur')
	rw_img2.classList.remove('invisivel')
	rw_img2.classList.remove('blur')
	rw_img2.classList.add('no-blur')
})

select3_a1.addEventListener('click', function() {
	selection3_a1.classList.remove('invisivel')
	selection3_a1.classList.remove('blur')
	selection3_a1.classList.add('no-blur')

	botao.classList.remove('invisivel')
	botao.classList.remove('blur')
	botao.classList.add('no-blur')

	rodape.classList.remove('invisivel')
	rodape.classList.remove('blur')
	rodape.classList.add('no-blur')
})

select3_b1.addEventListener('click', function() {
	selection3_b1.classList.remove('invisivel')
	selection3_b1.classList.remove('blur')
	selection3_b1.classList.add('no-blur')

	botao.classList.remove('invisivel')
	botao.classList.remove('blur')
	botao.classList.add('no-blur')

	rodape.classList.remove('invisivel')
	rodape.classList.remove('blur')
	rodape.classList.add('no-blur')
})

select3_a2.addEventListener('click', function() {
	selection3_a2.classList.remove('invisivel')
	selection3_a2.classList.remove('blur')
	selection3_a2.classList.add('no-blur')

	botao.classList.remove('invisivel')
	botao.classList.remove('blur')
	botao.classList.add('no-blur')

	rodape.classList.remove('invisivel')
	rodape.classList.remove('blur')
	rodape.classList.add('no-blur')
})

select3_b2.addEventListener('click', function() {
	selection3_b2.classList.remove('invisivel')
	selection3_b2.classList.remove('blur')
	selection3_b2.classList.add('no-blur')

	botao.classList.remove('invisivel')
	botao.classList.remove('blur')
	botao.classList.add('no-blur')

	rodape.classList.remove('invisivel')
	rodape.classList.remove('blur')
	rodape.classList.add('no-blur')
})