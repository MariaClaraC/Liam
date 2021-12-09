//opções do final da pagina
let botao = document.querySelector('.terminar') 
let rodape = document.querySelector('.rodape')

let select1 = document.querySelector('.select1') 
let select2 = document.querySelector('.select2') 
let selection1 = document.querySelector('.selection1') 
let selection2 = document.querySelector('.selection2')

let select1A = document.querySelector('.select1A') 
let select1B = document.querySelector('.select1B')
let select2A = document.querySelector('.select2A')
let select2B = document.querySelector('.select2B')

let selection1A__1B = document.querySelector('.selection1A--1B')
let dialog_s1a = document.querySelector('.dialog-s1a') 
let dialog_s1b = document.querySelector('.dialog-s1b') 
let select1A_c1 = document.querySelector('.select1A-c1') 
let select1B_c1 = document.querySelector('.select1B-c1')
let selection1A_c1 = document.querySelector('.selection1A-c1') 
let selection1B_c1 = document.querySelector('.selection1B-c1')  

let selection2A = document.querySelector('.selection2A')
let selection2B = document.querySelector('.selection2B') 

let ato4_part2 = document.querySelector('.ato4-part2')
let dialog_conflict1 = document.querySelector('.dialog-conflict1') 
let dialog_conflict2 = document.querySelector('.dialog-conflict2') 
let dialog_conflict3 = document.querySelector('.dialog-conflict3')
let dialog_conflict_esp = document.querySelector('.dialog-conflict-esp')


select1.addEventListener('click', function() {
	selection1.classList.remove('invisivel')
})

select2.addEventListener('click', function() {
	selection2.classList.remove('invisivel')
})

select1A.addEventListener('click', function() {
	selection1A__1B.classList.remove('invisivel')
	dialog_s1a.classList.remove('invisivel')
})

select1B.addEventListener('click', function() {
	selection1A__1B.classList.remove('invisivel')
	dialog_s1b.classList.remove('invisivel')
})

//você continuou com o Will
select1A_c1.addEventListener('click', function() {
	selection1A_c1.classList.remove('invisivel')
	ato4_part2.classList.remove('invisivel')
	dialog_conflict1.classList.remove('invisivel')
})

//você trocou para Emma
select1B_c1.addEventListener('click', function() {
	selection1B_c1.classList.remove('invisivel')
	ato4_part2.classList.remove('invisivel')
	dialog_conflict1.classList.remove('invisivel')
	dialog_conflict_esp.classList.remove('invisivel')
})

//você foi encontrar o Shawn e a Lis
select2A.addEventListener('click', function() {
	selection2A.classList.remove('invisivel')
	ato4_part2.classList.remove('invisivel')
	dialog_conflict2.classList.remove('invisivel')
})

//você ficou com o Mark e a Sarah
select2B.addEventListener('click', function() {
	selection2B.classList.remove('invisivel')
	ato4_part2.classList.remove('invisivel')
	dialog_conflict3.classList.remove('invisivel')
})

let conf1 = document.querySelector('.conf1') 
let conf2 = document.querySelector('.conf2')
let conflict1 = document.querySelector('.conflict1') 
let conflict2 = document.querySelector('.conflict2')

let conf2_a = document.querySelector('.conf2-a')
let conf2_b = document.querySelector('.conf2-b')
let conflict2_a = document.querySelector('.conflict2-a')
let conflict2_b = document.querySelector('.conflict2-b')

let conf2_a1 = document.querySelector('.conf2-a1')
let conf2_b1 = document.querySelector('.conf2-b1')
let conflict2_a1 = document.querySelector('.conflict2-a1')
let conflict2_b1 = document.querySelector('.conflict2-b1')

let conf2_a2 = document.querySelector('.conf2-a2')
let conf2_b2 = document.querySelector('.conf2-b2')
let conflict2_a2 = document.querySelector('.conflict2-a2')
let conflict2_b2 = document.querySelector('.conflict2-b2')

let dialog_chase1 = document.querySelector('.dialog-chase1')
let conf2a_a3 = document.querySelector('.conf2a-a3')
let conf2a_b3 = document.querySelector('.conf2a-b3')
let conflict2a_a3 = document.querySelector('.conflict2a-a3')
let conflict2a_b3 = document.querySelector('.conflict2a-b3')
let conf2b_a3 = document.querySelector('.conf2b-a3')
let conf2b_b3 = document.querySelector('.conf2b-b3')
let conflict2b_a3 = document.querySelector('.conflict2b-a3')
let conflict2b_b3 = document.querySelector('.conflict2b-b3')

//botao over
let rewind1 = document.querySelector('.rewind1')
let rewind2 = document.querySelector('.rewind2')
let rewind3 = document.querySelector('.rewind3')
let rewind4 = document.querySelector('.rewind4')
let rewind5 = document.querySelector('.rewind5')

let ending = document.querySelector('.ending')

//falou que acabou de chegar -- game over 1
conf1.addEventListener('click', function() {
	conflict1.classList.remove('invisivel')
})

//botao do 1 over
rewind1.addEventListener('click', function() {
	event.preventDefault()

	conflict1.classList.add('invisivel')
})

//falou sobre a parte de "matar" -- segue a historia
conf2.addEventListener('click', function() {
	conflict2.classList.remove('invisivel')
})

//pular para o lado -- segue a historia
conf2_a.addEventListener('click', function() {
	conflict2_a.classList.remove('invisivel')
})

//pegar a faca da mão dela -- game over 2
conf2_b.addEventListener('click', function() {
	conflict2_b.classList.remove('invisivel')
})

//botao do 2 over
rewind2.addEventListener('click', function(event) {
	event.preventDefault()

	conflict2_b.classList.add('invisivel')
})

//desviar para o lado -- game over 3
conf2_a1.addEventListener('click', function() {
	conflict2_a1.classList.remove('invisivel')
})

//botao do 3 over
rewind3.addEventListener('click', function(event) {
	event.preventDefault()

	conflict2_a1.classList.add('invisivel')
})

//bater no braço dela -- segue a historia
conf2_b1.addEventListener('click', function() {
	conflict2_b1.classList.remove('invisivel')
})

//falar que gosta dela -- segue a historia
conf2_a2.addEventListener('click', function() {
	conflict2_a2.classList.remove('invisivel')

	if(dialog_s1a.classList.contains('invisivel') == false) {
		dialog_chase1.classList.remove('invisivel')
	}
})

//falar sobre o tempo que passaram juntos -- segue a historia
conf2_b2.addEventListener('click', function() {
	conflict2_b2.classList.remove('invisivel')
})

//ir abraçar ela -- finaliza a historia
conf2a_a3.addEventListener('click', function() {
	conflict2a_a3.classList.remove('invisivel')
	ending.classList.remove('invisivel')
	botao.classList.remove('invisivel')
	rodape.classList.remove('invisivel')
})

//falar que vai ajudar ela -- game over 4
conf2a_b3.addEventListener('click', function() {
	conflict2a_b3.classList.remove('invisivel')
})

//botao do 4 over
rewind4.addEventListener('click', function(event) {
	event.preventDefault()

	conflict2a_b3.classList.add('invisivel')
})

//se abaixar -- game over 5
conf2b_a3.addEventListener('click', function() {
	conflict2b_a3.classList.remove('invisivel')
})

//botao do 5 over
rewind5.addEventListener('click', function(event) {
	event.preventDefault()

	conflict2b_a3.classList.add('invisivel')
})

//correr para cima dela -- finaliza a historia
conf2b_b3.addEventListener('click', function() {
	conflict2b_b3.classList.remove('invisivel')
	ending.classList.remove('invisivel')
	botao.classList.remove('invisivel')
	rodape.classList.remove('invisivel')
})