



//coloque todos os eventos que ligam e desligam o menu 
var bordaColorida=[]
bordaColorida[0]=document.querySelector("#bordaColorida1")
bordaColorida[1]=document.querySelector("#bordaColorida2")
bordaColorida[2]=document.querySelector("#bordaColorida3")
bordaColorida[3]=document.querySelector("#bordaColorida4")
bordaColorida[4]=document.querySelector("#bordaColorida5")
bordaColorida[5]=document.querySelector("#bordaColorida6")

for(var x=0; x<6;x++){
    bordaColorida[x].style.display="none";
}

var caixaTer=[]
caixaTer[0]=document.querySelector("#caixaTer1")
caixaTer[1]=document.querySelector("#caixaTer2")
caixaTer[2]=document.querySelector("#caixaTer3")
caixaTer[3]=document.querySelector("#caixaTer4")
caixaTer[4]=document.querySelector("#caixaTer5")
caixaTer[5]=document.querySelector("#caixaTer6")


var y=[];




var y=0
var controle=0

for(var x=0;x<6;x++){
controle=0

if(x==0){
    caixaTer[0].addEventListener("mouseover",function(){
        bordaColorida[0].style.display="block"
    });
    caixaTer[0].addEventListener("mouseout",function(){
        bordaColorida[0].style.display="none"
    });
}
    if(x==1){
        caixaTer[1].addEventListener("mouseover",function(){
            bordaColorida[1].style.display="block"
        });
        caixaTer[1].addEventListener("mouseout",function(){
            bordaColorida[1].style.display="none"
        });
    }
    if(x==2){
        caixaTer[2].addEventListener("mouseover",function(){
            bordaColorida[2].style.display="block"
        });
        caixaTer[2].addEventListener("mouseout",function(){
            bordaColorida[2].style.display="none"
        });
    }

    if(x==3){
        caixaTer[3].addEventListener("mouseover",function(){
            bordaColorida[3].style.display="block"
        });
        caixaTer[3].addEventListener("mouseout",function(){
            bordaColorida[3].style.display="none"
        });
    }

    if(x==4){
        caixaTer[4].addEventListener("mouseover",function(){
            bordaColorida[4].style.display="block"
        });
        caixaTer[4].addEventListener("mouseout",function(){
            bordaColorida[4].style.display="none"
        });
    }
    if(x==5){
        caixaTer[5].addEventListener("mouseover",function(){
            bordaColorida[5].style.display="block"
        });
        caixaTer[5].addEventListener("mouseout",function(){
            bordaColorida[5].style.display="none"
        });
    }
   
}


function linkSaturno(){
    window.open('file:///C:/Users/Dougrinha/Desktop/TCC%20secundario/Projeto%20orion%20beta/saturno.html',"_self")
}
function linkMov(){
    window.open('file:///C:/Users/Dougrinha/Desktop/TCC%20secundario/Projeto%20orion%20beta/MovTerra.html',"_self")
}
function linkMarte(){
    window.open('file:///C:/Users/Dougrinha/Desktop/TCC%20secundario/Projeto%20orion%20beta/Marte.html',"_self")
}
function linkMateria(){
    window.open('file:///C:/Users/Dougrinha/Desktop/TCC%20secundario/Projeto%20orion%20beta/matEscura.html',"_self")
}
function linkSol(){
    window.open('file:///C:/Users/Dougrinha/Desktop/TCC%20secundario/Projeto%20orion%20beta/Sol.html',"_self")
}

function linkYT6(){
    window.open('https://www.youtube.com/watch?v=WKEP4vp0IJQ&t=2s',"_self")
}
function linkYT5(){
    window.open('https://www.youtube.com/watch?v=_vzEKXOI3BY',"_self")
}
function linkYT4(){
    window.open('https://www.youtube.com/watch?v=Hf7DEWvgQmY',"_self")
}
function linkYT3(){
    window.open('https://www.youtube.com/watch?v=B5cb2ysZMcQ',"_self")
}
function linkYT2(){
    window.open('https://www.youtube.com/watch?v=B5UKdZvK0E4',"_self")
}
function linkYT1(){
    window.open('https://www.youtube.com/watch?v=SpcPB_lzCxc&t=0s',"_self")
}








































