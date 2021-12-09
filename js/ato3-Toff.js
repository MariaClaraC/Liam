//final da pagina
var rodape = document.querySelector(".rodape") 
var botao = document.querySelector(".botao") 

//Primeira Seleção
var select1a = document.querySelector(".select1-a") 
var select1b = document.querySelector(".select1-b") 
var mkiSelect1 = document.querySelector(".mkiSelect1") 
var mkiSelect1a = document.querySelector(".mkiSelect1-a")
var mkiSelect1b = document.querySelector(".mkiSelect1-b") 
var select2a = document.querySelector(".select2-a") 
var select2b = document.querySelector(".select2-b")
var select1a_exp1 = document.querySelector('.select1a-exp1')
var select1b_exp1 = document.querySelector('.select1b-exp1')
var select1a_exp2 = document.querySelector('.select1a-exp2')
var select1b_exp2 = document.querySelector('.select1b-exp2')

//Segunda Seleção
var mkiSelect2a = document.querySelector(".mkiSelect2-a") 
var mkiSelect2acont = document.querySelector(".mkiSelect2-a-cont") 
var mkiSelect2b = document.querySelector(".mkiSelect2-b") 
var mkiSelect2bcont = document.querySelector(".mkiSelect2-b-cont") 
var select3a1 = document.querySelector(".select3-a1") 
var select3b1 = document.querySelector(".select3-b1") 
var select3a2 = document.querySelector(".select3-a2") 
var select3b2 = document.querySelector(".select3-b2") 
var selectc3a1pre = document.querySelector(".selectc3-a1-pre") 

//Terceira seleção
var mkiSelect3b1 = document.querySelector(".mkiSelect3-b1") 
var mkiSelect3a2 = document.querySelector(".mkiSelect3-a2") 
var mkiSelect3b2 = document.querySelector(".mkiSelect3-b2") 
var select3a21 = document.querySelector(".select3-a2-1") 
var select3b21 = document.querySelector(".select3-b2-1") 
var listaSelect3 = document.querySelector(".listaSelect3") 
var select4a = document.querySelector(".select4-a") 
var select4b = document.querySelector(".select4-b") 

//Quarta seleção

var mkiSelect4a = document.querySelector(".mkiSelect4-a") 
var mkiSelect4b = document.querySelector(".mkiSelect4-b") 
var prologo1etapa2 = document.querySelector(".prologo1-etapa2")
var prologo2etapa2 = document.querySelector(".prologo2-etapa2")
var etapa2 = document.querySelector('.etapa-2') 

select1a.addEventListener("click", function() {
	mkiSelect1.classList.remove("invisivel")
	mkiSelect1a.classList.remove("invisivel")
})

select1b.addEventListener("click", function() {
	mkiSelect1.classList.remove("invisivel")
	mkiSelect1b.classList.remove("invisivel")
})

select2a.addEventListener("click", function() {
	mkiSelect2a.classList.remove("invisivel")
	mkiSelect2acont.classList.remove("invisivel")
})

select2b.addEventListener("click", function() {
	mkiSelect2b.classList.remove("invisivel")
	mkiSelect2bcont.classList.remove("invisivel")
})

select3a1.addEventListener("click", function() {
	selectc3a1pre.classList.remove("invisivel")
})

select3b1.addEventListener("click", function() {
	mkiSelect3b1.classList.remove("invisivel")
	prologo1etapa2.classList.remove("invisivel")
	etapa2.classList.remove("invisivel")	
})

select3a2.addEventListener("click", function() {
	mkiSelect3a2.classList.remove("invisivel")
	listaSelect3.classList.remove("invisivel")
})

select3b2.addEventListener("click", function() {
	mkiSelect3b2.classList.remove("invisivel")
	listaSelect3.classList.remove("invisivel")
})

select3a21.addEventListener("click", function() {
	mkiSelect3a2.classList.remove("invisivel")
	listaSelect3.classList.remove("invisivel")
})

select3b21.addEventListener("click", function() {
	mkiSelect3b2.classList.remove("invisivel")
	listaSelect3.classList.remove("invisivel")
})


select4a.addEventListener("click", function() {
	mkiSelect4a.classList.remove("invisivel")

	if(mkiSelect1a.classList.contains('invisivel') == false) {
		select1a_exp1.classList.remove('invisivel')
	}

	if(mkiSelect1b.classList.contains('invisivel') == false) {
		select1b_exp1.classList.remove('invisivel')
	}

	prologo2etapa2.classList.remove("invisivel")
	etapa2.classList.remove("invisivel")
})

select4b.addEventListener("click", function() {
	mkiSelect4b.classList.remove("invisivel")

	if(mkiSelect1a.classList.contains('invisivel') == false) {
		select1a_exp2.classList.remove('invisivel')
	}

	if(mkiSelect1b.classList.contains('invisivel') == false) {
		select1b_exp2.classList.remove('invisivel')
	}
	prologo2etapa2.classList.remove("invisivel")
	etapa2.classList.remove("invisivel")	
})

//etapa 2

//Quinta seleção
var select5a = document.querySelector('.select5-a') 
var select5b = document.querySelector('.select5-b') 
var mkiSelect5a = document.querySelector('.mkiSelect5-a') 
var mkiSelect5b = document.querySelector('.mkiSelect5-b') 
var select6a1v1 = document.querySelector('.select6-a1-v1') 
var select6b1v1 = document.querySelector('.select6-b1-v1') 
var select6a2 = document.querySelector('.select6-a2') 
var select6b2 = document.querySelector('.select6-b2') 
var mkiSelect6b2 = document.querySelector('.mkiSelect6-b2') 
var select6a1v2 = document.querySelector('.select6-a1-v2')
var select6b1v2 = document.querySelector('.select6-b1-v2') 

//Sexta seleção
var mkiSelect6a1 = document.querySelector('.mkiSelect6-a1') 
var select6a1pre1 = document.querySelector('.select6-a1-pre1') 
var select6a1pre2 = document.querySelector('.select6-a1-pre2') 
var mkiSelect6b1 = document.querySelector('.mkiSelect6-b1')
var select6b1pre = document.querySelector('.select6-b1-pre') 
var select6b1pre2 = document.querySelector('.select6-b1-pre2') 
var select6b1pre3 = document.querySelector('.select6-b1-pre3') 
var mkiSelect6a2 = document.querySelector('.mkiSelect6-a2') 

//Sexta seleção parte 2
var mkiSelect6part2 = document.querySelector('.mkiSelect6-part2') 
var mkiSelect6a1part2 = document.querySelector('.mkiSelect6-a1-part2') 
var select7ac1 = document.querySelector('.select7a-c1') 
var select7bc1 = document.querySelector('.select7b-c1') 
var mkiSelect7ac1 = document.querySelector('.mkiSelect7a-c1')
var select7ac2 = document.querySelector('.select7a-c2') 
var select7bc2 = document.querySelector('.select7b-c2') 
var mkiSelect7ac2 = document.querySelector('.mkiSelect7a-c2') 
var mkiSelect7bc2 = document.querySelector('.mkiSelect7b-c2') 
var mkiSelect7bc1 = document.querySelector('.mkiSelect7b-c1') 
var mkiSelect6b1part2 = document.querySelector('.mkiSelect6-b1-part2') 
var select7a2 = document.querySelector('.select7a2') 
var select7b2 = document.querySelector('.select7b2') 
var mkiSelect7a2 = document.querySelector('.mkiSelect7a2') 
var mkiSelect7b2 = document.querySelector('.mkiSelect7b2') 
var etapa3 = document.querySelector('.etapa-3')
var finalRescue_mw = document.querySelector('.finalRescue-mw')
var finalRescue_w = document.querySelector('.finalRescue-w')

//você pegou o diario
select5a.addEventListener('click', function() {
	mkiSelect5a.classList.remove('invisivel')
	mkiSelect6b1.classList.remove('invisivel')
	select6b1pre2.classList.remove('invisivel')
	mkiSelect6part2.classList.remove('invisivel')
	mkiSelect6a1part2.classList.remove('invisivel')
})

//vc pegou o papel
select5b.addEventListener('click', function() {
	mkiSelect5b.classList.remove('invisivel')
})

//falar do esconderijo secreto
select6a2.addEventListener('click', function() {
	mkiSelect6a2.classList.remove('invisivel')
	mkiSelect6part2.classList.remove('invisivel')
	mkiSelect6a1part2.classList.remove('invisivel')
})

//não falar nada
select6b2.addEventListener('click', function() {
	mkiSelect6b2.classList.remove('invisivel')
	mkiSelect6b1.classList.remove('invisivel')
	select6b1pre3.classList.remove('invisivel')
	mkiSelect6part2.classList.remove('invisivel')
	mkiSelect6b1part2.classList.remove('invisivel')
})

//vc quer ir sozinho ate a base
select7ac1.addEventListener('click', function() {
	mkiSelect7ac1.classList.remove('invisivel')
})

//eu quero que vc se machuque -- ir sozinho
select7ac2.addEventListener('click', function() {
	mkiSelect7ac2.classList.remove('invisivel')
	etapa3.classList.remove('invisivel')
	finalRescue_w.classList.remove('invisivel')
})

//so quero ir sozinho -- ir sozinho
select7bc2.addEventListener('click', function() {
	mkiSelect7bc2.classList.remove('invisivel')
	etapa3.classList.remove('invisivel')
	finalRescue_mw.classList.remove('invisivel')
})

//vc vai com a Miko ate a base
select7bc1.addEventListener('click', function() {
	mkiSelect7bc1.classList.remove('invisivel')
	etapa3.classList.remove('invisivel')
	finalRescue_mw.classList.remove('invisivel')
})

//vc chamou a Miko para salvar a Laura
select7a2.addEventListener('click', function() {
	mkiSelect7a2.classList.remove('invisivel')
	etapa3.classList.remove('invisivel')
	finalRescue_mw.classList.remove('invisivel')
})

//vc não chamou a Miko para salvar a Laura
select7b2.addEventListener('click', function() {
	mkiSelect7b2.classList.remove('invisivel')
	etapa3.classList.remove('invisivel')
	finalRescue_w.classList.remove('invisivel')
})

// etapa 3

//escolhas finalRescue-mw
var mwOptA1 = document.querySelector('.mw-optA1') 
var mwOptB1 = document.querySelector('.mw-optB1') 
var mwOptionA1_B1 = document.querySelector('.mw-optionA1-B1') 
var mwOptA2 = document.querySelector('.mw-optA2') 
var mwOptB2 = document.querySelector('.mw-optB2') 
var mwOptionA2 = document.querySelector('.mw-optionA2') 
var mwOptionB2 = document.querySelector('.mw-optionB2') 
var mwOptA3 = document.querySelector('.mw-optA3') 
var mwOptB3 = document.querySelector('.mw-optB3') 
var mwOptionA3_B3 = document.querySelector('.mw-optionA3-B3') 
var mwOptA4 = document.querySelector('.mw-optA4') 
var mwOptB4 = document.querySelector('.mw-optB4') 
var mwOptionA4 = document.querySelector('.mw-optionA4') 
var mwOptionB4 = document.querySelector('.mw-optionB4') 
var mwSeq = document.querySelector('.mw-seq') 
var seqA = document.querySelector('.seqA') 
var seqB = document.querySelector('.seqB') 
var sequenceA = document.querySelector('.sequenceA') 
var sequenceB = document.querySelector('.sequenceB') 

//escolhas finalRescue-w
let wOptA = document.querySelector('.w-optA') 
let wOptB = document.querySelector('.w-optB') 
let wOptionA = document.querySelector('.w-optionA') 
let wDialog1 = document.querySelector('.w_Dialog1') 
let wDialog2 = document.querySelector('.w_Dialog2')
let run_Out = document.querySelector('.runOut')

//prologo
let prologoV1 = document.querySelector('.prologoV1')
let prologoV2 = document.querySelector('.prologoV2')


//se abaixar
mwOptA1.addEventListener('click', function() {
	mwOptionA1_B1.classList.remove('invisivel')
})

//pular para o lado
mwOptB1.addEventListener('click', function() {
	mwOptionA1_B1.classList.remove('invisivel')
})

//desviar do ataque
mwOptA2.addEventListener('click', function() {
	mwOptionA2.classList.remove('invisivel')
})

//pegar a faca da mão dele
mwOptB2.addEventListener('click', function() {
	mwOptionB2.classList.remove('invisivel')
})

//pegar uma pedra
mwOptA3.addEventListener('click', function() {
	mwOptionA3_B3.classList.remove('invisivel')
	mwSeq.classList.remove('invisivel')
	prologoV2.classList.remove('invisivel')
	botao.classList.remove('invisivel')
	rodape.classList.remove('invisivel')
})

//chutar o braço dele
mwOptB3.addEventListener('click', function() {
	mwOptionA3_B3.classList.remove('invisivel')
	mwSeq.classList.remove('invisivel')
	prologoV2.classList.remove('invisivel')
	botao.classList.remove('invisivel')
	rodape.classList.remove('invisivel')
})

//derrubar ele no chão
mwOptA4.addEventListener('click', function() {
	mwOptionA4.classList.remove('invisivel')
	mwSeq.classList.remove('invisivel')
	prologoV2.classList.remove('invisivel')
	botao.classList.remove('invisivel')
	rodape.classList.remove('invisivel')
})

//continuar segurando ele
mwOptB4.addEventListener('click', function() {
	mwOptionB4.classList.remove('invisivel')
	mwSeq.classList.remove('invisivel')
	prologoV2.classList.remove('invisivel')
	botao.classList.remove('invisivel')
	rodape.classList.remove('invisivel')
})

// tacar uma pedra
wOptA.addEventListener('click', function() {
	wOptionA.classList.remove('invisivel')

	//libera a dialog da Miko ter deixado vc ir sozinho
	if (mkiSelect7ac2.classList.contains('invisivel') == false) {
		wDialog1.classList.remove('invisivel')
		prologoV1.classList.remove('invisivel')
		botao.classList.remove('invisivel')
		rodape.classList.remove('invisivel')
	}

	//libera a dialog de vc ter ido sem a Miko
	if (mkiSelect7b2.classList.contains('invisivel') == false) {
		wDialog2.classList.remove('invisivel')
		prologoV1.classList.remove('invisivel')
		botao.classList.remove('invisivel')
		rodape.classList.remove('invisivel')
	}
})

//correr para cima
wOptB.addEventListener('click', function() {
	wOptionA.classList.remove('invisivel')
	run_Out.classList.remove('invisivel')

	//libera a dialog da Miko ter deixado vc ir sozinho
	if (mkiSelect7ac2.classList.contains('invisivel') == false) {
		wDialog1.classList.remove('invisivel')
		prologoV1.classList.remove('invisivel')
		botao.classList.remove('invisivel')
		rodape.classList.remove('invisivel')
	}

	//libera a dialog de vc ter ido sem a Miko
	if (mkiSelect7b2.classList.contains('invisivel') == false) {
		wDialog2.classList.remove('invisivel')
		prologoV1.classList.remove('invisivel')
		botao.classList.remove('invisivel')
		rodape.classList.remove('invisivel')
	}
})