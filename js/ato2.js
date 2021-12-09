//final do ato
var botao = document.querySelector(".botao");
var rodape = document.querySelector(".rodape");

// recapitulando
var optionM = document.querySelector(".optionM");
var optionR = document.querySelector(".optionR");
var mark = document.querySelector(".mark");
var optionMa = document.querySelector(".optionMa");
var optionMb = document.querySelector(".optionMb");
var ruby = document.querySelector(".ruby");
var optionRa = document.querySelector(".optionRa");
var optionRb = document.querySelector(".optionRb");
var titulo = document.querySelector(".titulo-principal");

//caminho mark A
var rotaM1 = document.querySelector(".rotaM1");
var rotaMa1 = document.querySelector(".rotaMa1");
var rotaMb1 = document.querySelector(".rotaMb1");

var rotaMac1 = document.querySelector(".rotaMa-c1");
var rMa1c1 = document.querySelector(".rMa1-c1");
var caminhoMikoA1c1 = document.querySelector(".caminhoMikoA1-c1");
var rMb1c1 = document.querySelector(".rMb1-c1");
var caminhoMikoB1c1 = document.querySelector(".caminhoMikoB1-c1");

var rotaMbc1 = document.querySelector(".rotaMb-c1");
var rMa2c1 = document.querySelector(".rMa2-c1");
var caminhoMikoA2c1 = document.querySelector(".caminhoMikoA2-c1");
var rMb2c1 = document.querySelector(".rMb2-c1");
var caminhoMikoB2c1 = document.querySelector(".caminhoMikoB2-c1");

//caminho mark b
var rotaM2 = document.querySelector(".rotaM2");
var rotaMa2 = document.querySelector(".rotaMa2");
var rotaMb2 = document.querySelector(".rotaMb2");

var rotaMac2 = document.querySelector(".rotaMa-c2");
var rMa1c2 = document.querySelector(".rMa1-c2");
var caminhoMikoA1c2 = document.querySelector(".caminhoMikoA1-c2");
var rMb1c2 = document.querySelector(".rMb1-c2");
var caminhoMikoB1c2 = document.querySelector(".caminhoMikoB1-c2");

var rotaMbc2 = document.querySelector(".rotaMb-c2");
var rMa2c2 = document.querySelector(".rMa2-c2");
var caminhoMikoA2c2 = document.querySelector(".caminhoMikoA2-c2");
var rMb2c2 = document.querySelector(".rMb2-c2");
var caminhoMikoB2c2 = document.querySelector(".caminhoMikoB2-c2");

//caminho ruby a
var rotaR1 = document.querySelector(".rotaR1");
var rotaRa1 = document.querySelector(".rotaRa1");
var rotaRb1 = document.querySelector(".rotaRb1");

var rotaRac1 = document.querySelector(".rotaRa-c1");
var rRa1c1 = document.querySelector(".rRa1-c1");
var caminhoMikoA1c3 = document.querySelector(".caminhoMikoA1-c3");
var rRb1c1 = document.querySelector(".rRb1-c1");
var caminhoMikoB1c3 = document.querySelector(".caminhoMikoB1-c3");

var rotaRbc1 = document.querySelector(".rotaRb-c1");
var rRa2c1 = document.querySelector(".rRa2-c1");
var caminhoMikoA2c3 = document.querySelector(".caminhoMikoA2-c3");
var rRb2c1 = document.querySelector(".rRb2-c1");
var caminhoMikoB2c3 = document.querySelector(".caminhoMikoB2-c3");

//caminho ruby b
var rotaR2 = document.querySelector(".rotaR2");
var rotaRa2 = document.querySelector(".rotaRa2");
var rotaRb2 = document.querySelector(".rotaRb2");

var rotaRac2 = document.querySelector(".rotaRa-c2");
var rRa1c2 = document.querySelector(".rRa1-c2");
var caminhoMikoA1c4 = document.querySelector(".caminhoMikoA1-c4");
var rRb1c2 = document.querySelector(".rRb1-c2");
var caminhoMikoB1c4 = document.querySelector(".caminhoMikoB1-c4");

var rotaRbc2 = document.querySelector(".rotaRb-c2");
var rRa2c2 = document.querySelector(".rRa2-c2");
var caminhoMikoA2c4 = document.querySelector(".caminhoMikoA2-c4");
var rRb2c2 = document.querySelector(".rRb2-c2");
var caminhoMikoB2c4 = document.querySelector(".caminhoMikoB2-c4");

//botões
let btn_Mk = document.querySelector('.btn-Mk')
let btn_Toff = document.querySelector('.btn-Toff')
let btn_Mact = document.querySelector('.btn-Mact')
let btn_LP = document.querySelector('.btn-LP')
let btn_NC = document.querySelector('.btn-NC')


//abre a seleção de caminho do mark
optionM.addEventListener("click", function() {
	mark.classList.remove("invisivel");
});

//abre o "ficar em casa"
optionMa.addEventListener("click", function() {
	titulo.classList.remove("invisivel");
	rotaM1.classList.remove("invisivel");
});

//abre o "falar com a ruby" do "ficar em casa"
rotaMa1.addEventListener("click", function() {
	rotaMac1.classList.remove("invisivel");
});

//abre o "leva-la para a sua casa" do "falar com a ruby"
rMa1c1.addEventListener("click", function() {
	caminhoMikoA1c1.classList.remove("invisivel");
	btn_Mact.classList.remove("invisivel");
	rodape.classList.remove("invisivel");
});

//abre o "leva-la para um hospital" do "falar com a ruby"
rMb1c1.addEventListener("click", function() {
	caminhoMikoB1c1.classList.remove("invisivel");
	btn_LP.classList.remove("invisivel");
	rodape.classList.remove("invisivel");
});

//abre o "ir embora" do "ficar em casa"
rotaMb1.addEventListener("click", function() {
	rotaMbc1.classList.remove("invisivel");
});

//abre o "salvar a garota" do "ir embora"
rMa2c1.addEventListener("click", function() {
	caminhoMikoA2c1.classList.remove("invisivel");
	btn_Mact.classList.remove("invisivel");
	rodape.classList.remove("invisivel");
});

//abre o "fingir que não viu" do "ir embora"
rMb2c1.addEventListener("click", function() {
	caminhoMikoB2c1.classList.remove("invisivel");
	btn_Mk.classList.remove("invisivel");
	rodape.classList.remove("invisivel");
});

//abre o "sair com mark e sarah"
optionMb.addEventListener("click", function() {
	titulo.classList.remove("invisivel");
	rotaM2.classList.remove("invisivel");
});

//abre o "ajudar a garota" do "sair com mark e sarah"
rotaMa2.addEventListener("click", function() {
	rotaMac2.classList.remove("invisivel");
});

//abre o "ir com a miko" de "ajudar a garota"
rMa1c2.addEventListener("click", function() {
	caminhoMikoA1c2.classList.remove("invisivel");
	btn_Mact.classList.remove("invisivel");
	rodape.classList.remove("invisivel");
});

//abre o "ir com a Ruby" do "ajudar a garota"
rMb1c2.addEventListener("click", function() {
	caminhoMikoB1c2.classList.remove("invisivel");
	btn_Toff.classList.remove("invisivel");
	rodape.classList.remove("invisivel");
});

//abre o "fingir que não viu" do "sair com mark e sarah"
rotaMb2.addEventListener("click", function() {
	rotaMbc2.classList.remove("invisivel");
});

//abre o "ir para a casa do mark" do "fingir que não viu"
rMa2c2.addEventListener("click", function() {
	caminhoMikoA2c2.classList.remove("invisivel");
	btn_Mk.classList.remove("invisivel");
	rodape.classList.remove("invisivel");
});

//abre o "ir para casa" do "finjir que não viu"
rMb2c2.addEventListener("click", function() {
	caminhoMikoB2c2.classList.remove("invisivel");
	btn_NC.classList.remove("invisivel");
	rodape.classList.remove("invisivel");
});


//abre a seleção de caminho da ruby
optionR.addEventListener("click", function() {
	ruby.classList.remove("invisivel");
});

//abre o "desistir da ruby"
optionRa.addEventListener("click", function() {
	titulo.classList.remove("invisivel");
	rotaR1.classList.remove("invisivel");
});

//abre o "pedir ajuda da miko" do "desistir da ruby"
rotaRa1.addEventListener("click", function() {
	rotaRac1.classList.remove("invisivel");
});

//abre o "falar que é o namorado" do "pedir ajuda da miko"
rRa1c1.addEventListener("click", function() {
	caminhoMikoA1c3.classList.remove("invisivel");
	btn_Mact.classList.remove("invisivel");
	rodape.classList.remove("invisivel");
});

//abre o "falar que é um amigo" do "pedir ajuda da miko"
rRb1c1.addEventListener("click", function() {
	caminhoMikoB1c3.classList.remove("invisivel");
	btn_LP.classList.remove("invisivel");
	rodape.classList.remove("invisivel");
});

//abre o "desistir assim mesmo" do "desistir da ruby"
rotaRb1.addEventListener("click", function() {
	rotaRbc1.classList.remove("invisivel");
});

//abre o "deixar a miko ficar" do "ainda sim desistir"
rRa2c1.addEventListener("click", function() {
	caminhoMikoA2c3.classList.remove("invisivel");
	btn_Mact.classList.remove("invisivel");
	rodape.classList.remove("invisivel");
});

//abre o "não deixar a miko ficar" do "ainda sim desistir"
rRb2c1.addEventListener("click", function() {
	caminhoMikoB2c3.classList.remove("invisivel");
	btn_Toff.classList.remove("invisivel");
	rodape.classList.remove("invisivel");
});

//abre o "tentar ficar com a ruby"
optionRb.addEventListener("click", function() {
	titulo.classList.remove("invisivel");
	rotaR2.classList.remove("invisivel");
});

//abre o "pedir ajuda da miko" do "tentar ficar com a ruby"
rotaRa2.addEventListener("click", function() {
	rotaRac2.classList.remove("invisivel");
});

//abre o "dormir no quarto" do "pedir ajuda da miko"
rRa1c2.addEventListener("click", function() {
	caminhoMikoA1c4.classList.remove("invisivel");
	btn_Mact.classList.remove("invisivel");
	rodape.classList.remove("invisivel");
});

//abre o "dormir na sala" do "pedir ajuda da miko"
rRb1c2.addEventListener("click", function() {
	caminhoMikoB1c4.classList.remove("invisivel");
	btn_LP.classList.remove("invisivel");
	rodape.classList.remove("invisivel");
});

//abre o "ajudar a miko" do "tentar ficar com a ruby"
rotaRb2.addEventListener("click", function() {
	rotaRbc2.classList.remove("invisivel");
});

//abre o "entrar na casa da miko" do "ajudar a miko"
rRa2c2.addEventListener("click", function() {
	caminhoMikoA2c4.classList.remove("invisivel");
	btn_Mact.classList.remove("invisivel");
	rodape.classList.remove("invisivel");
});

//abre o "ir embora" do "ajudar a miko"
rRb2c2.addEventListener("click", function() {
	caminhoMikoB2c4.classList.remove("invisivel");
	btn_Mact.classList.remove("invisivel");
	rodape.classList.remove("invisivel");
});

