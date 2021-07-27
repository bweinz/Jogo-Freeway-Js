//código do ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;
    }
  }
}

function verificaColisao(){
  // parametros collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    //Se tem uma colisao, então o carrinho volta para a posição inicial, toca o som da colisao e se eu tiver pontos = 1 ou mais volta para 0
    if (colisao){
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

//Placar de pontos
function incluiPontos(){
  textAlign(CENTER); //centralizar texto
  textSize(25); //Alterar tamanho
  fill(color(255, 240, 60)) //Alterar cor do Placar
  text(meusPontos, width / 5, 27);
  //(variavel, comprimento e altura)comprimento da tela dividido por 5, altura
  
}

//Marcador de Pontos
//Se a altura da vaquinha for menor que 15 (chegar no final) adiciona um na variavel meus pontos, toca o audio do som do ponto e volta para a posição inicial
function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  //Return saber se é verdadeiro ou não, se a altura for menor 366 não pode descer
  return yAtor < 366;
}






