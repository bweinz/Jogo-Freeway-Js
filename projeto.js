function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
  //.loop para continuar tocando em looping
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}