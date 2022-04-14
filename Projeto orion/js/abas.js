var liCadastro = document.querySelector("#entrarLi")

liCadastro.addEventListener("click", function(){})

var liHome = document.querySelector("#homeLi")
liHome.addEventListener("click", function(){})



var abas=document.querySelector(".abas")
abas.style.display="none"

var caixaItensAbas1=document.querySelector(".caixaItensAbas1")
caixaItensAbas1.style.display="none"

var caixaItensAbas2=document.querySelector(".caixaItensAbas2")
caixaItensAbas2.style.display="none"

var caixaItensAbas3=document.querySelector(".caixaItensAbas3")
caixaItensAbas3.style.display="none"

var caixaItensAbas4=document.querySelector(".caixaItensAbas4")
caixaItensAbas4.style.display="none"


var cabeca= document.querySelector(".cabeça")
cabeca.addEventListener("mouseover", function(){
    DesativarBarra()
})
var homeLi=document.querySelector("#homeLi")

    homeLi.addEventListener("mouseover", function(){
        DesativarBarra()
    })

var imagemCarrocel= document.querySelector(".imagemCarrocel")
imagemCarrocel.addEventListener("mouseover", function(){
    DesativarBarra()
})
var imagemCarrocel2=document.querySelector("#imagemCarrocel2")
imagemCarrocel2.style.display="none"

var caixaMainArtigo=document.querySelector("#caixa-mainArtigo2")
caixaMainArtigo.addEventListener("mouseover", function(){
    DesativarBarra()
})

var MAIN=document.querySelector("#MAIN2")
MAIN.addEventListener("mouseover", function(){
    DesativarBarra()
})

function ativarBarraSistemaSolar(){
    caixaItensAbas2.style.display="none"
    caixaItensAbas4.style.display="none"
    caixaItensAbas3.style.display="none"
    abas.style.display="block"
    caixaItensAbas1.style.display="block"
}
function ativarBarraConstelacoes(){
    caixaItensAbas1.style.display="none"
    caixaItensAbas3.style.display="none"
    abas.style.display="block"
    caixaItensAbas2.style.display="block"
    caixaItensAbas4.style.display="none"
}
function ativarBarraEstrelas(){
    caixaItensAbas1.style.display="none"
    caixaItensAbas2.style.display="none"
    caixaItensAbas4.style.display="none"
    abas.style.display="block"
    caixaItensAbas3.style.display="block"
}
function ativarBarraAS(){
    caixaItensAbas1.style.display="none"
    caixaItensAbas2.style.display="none"
    caixaItensAbas3.style.display="none"
    abas.style.display="block"
    caixaItensAbas4.style.display="block"
}


function DesativarBarra(){
    abas.style.display="none"
    caixaItensAbas1.style.display="none"
    caixaItensAbas2.style.display="none"
    caixaItensAbas1.style.display="none"
}


var sitemaSolar= document.querySelector("#sitemaSolarLi")
sitemaSolar.addEventListener("mouseover", function(){

    ativarBarraSistemaSolar()
})
var constelacoes= document.querySelector("#constelacoesLi")
constelacoes.addEventListener("mouseover", function(){
 
    ativarBarraConstelacoes()
})
var estrelas= document.querySelector("#estrelasLi")
estrelas.addEventListener("mouseover", function(){
    ativarBarraEstrelas()
})
var AS= document.querySelector("#ASLi")
AS.addEventListener("mouseover", function(){
    ativarBarraAS()
})
