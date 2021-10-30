function clicar(imagem){
    imagem.src="images/telaquebrada.png"
    document.getElementById('text').innerHTML="Ops!!! Você usou força demais!!!"
}

function entrar(imagem){
    imagem.src="images/telainicial.png"
    document.getElementById('text').innerHTML="Clique em um ícone para iniciar a aplicação"            
}

function sair(imagem){
    imagem.src="images/telabloqueio.png"
    document.getElementById('text').innerHTML="Deslize o mouse sob a tela para desbloquear o aparelho"
}