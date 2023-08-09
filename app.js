'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')



function mudarCor () {
    forma1.classList.toggle('vermelho')
}

function mudarForma (){
    forma2.classList.toggle('circulo')
}
function mudarImagem (){
    forma3.classList.toggle('imagem')
}
function Triangular (){
    forma4.classList.toggle('triangulou')
}
function Aumentar (){
    forma5.classList.toggle('aumento')
}
function Diminuir (){
    forma6.classList.toggle('diminuo')
}
function Achatar (){
    forma7.classList.toggle('achatar')
}
function Escurecer (){
    forma8.classList.toggle('escurecer')
}


forma1.addEventListener('click', mudarCor)
forma2.addEventListener('click', mudarForma)
forma3.addEventListener('click', mudarImagem)
forma4.addEventListener('click', Triangular)
forma5.addEventListener('click', Aumentar)
forma6.addEventListener('click', Diminuir)
forma7.addEventListener('click', Achatar)
forma8.addEventListener('click', Escurecer)