//Variaveis Ator
let yAtor = 366
let xAtor = 100
let alturaAtor = 30
let comprimentoAtor = 30

function mostraAtor(){
  image(imagemDoAtor,xAtor,yAtor,alturaAtor,comprimentoAtor)
}

function movimentaAtor (){
  if (keyIsDown(UP_ARROW)) { yAtor -= 3;
    
  } 
  if (keyIsDown(DOWN_ARROW)) { yAtor += 3;
    
  } 
}