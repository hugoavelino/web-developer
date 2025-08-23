// Definindo o tamnho do tabuleiro
let altura = 0;
let largura = 0;
let vidas = 1

function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)

}
ajustaTamanhoPalcoJogo()

//Definindo posições ramdomicas
function posicaoRamdomica(){

	//remover o mosquito anterior caso exista
	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()

		//alterando a Imagem docoração cheio para Vazio
		if (vidas > 3){

			window.location.href = 'fim_de_jogo.html'
		}else{
			document.getElementById('v' + vidas).src='imagens/coracao_vazio.png'
		
			vidas++
		}
	
	}
	

	let posicaoX = Math.floor(Math.random() * largura) - 90
	let posicaoY = Math.floor(Math.random() * altura) - 90
	

	//operador ternario
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY


	//criar o elemento html
	let mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		this.remove()
	}

	document.body.appendChild(mosquito)




}
//Gera tamanhos aleatórios para os mosquitos
function tamanhoAleatorio(){
	let classe = Math.floor(Math.random() * 3)
	
	switch(classe){
		case 0:
			return 'mosquito1'

		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}
}

//Seleciona aleatóriamente a direção que o mosquito olha
function ladoAleatorio() {
	let classe = Math.floor(Math.random() * 2)
	
	switch(classe){
		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'

		
	}
}