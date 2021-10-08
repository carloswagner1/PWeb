/*
* Atividade 8 
* Disciplina de Programação Web
* Fatec Sorocaba
* 
* @author: Carlos Wagner Rodrigues da Silva
*/

var idade,
    media = 0, 
    cont = 0,
    sexo,
    opiniao,
    maisVelho = 0,
    maisNovo = 150, 
    qtdePessimo = 0,
    percBomOtimo = 0,
    qtdeMulheres=0;
    qtdeHomens=0;


function addDados(){

    if(cont < 45){
        if(document.getElementById('feminino').checked == false && document.getElementById('masculino').checked == false) {
            alert("Selecione todas as opções")            
        }else{
            dadosIdade()
            dadosSexo()
            dadosOpiniao()
            limpar()
            cont++            
            document.getElementById('contador').
            innerText = 'Pessoas entrevistadas ' + cont + '/45'          
        }

    }else{
        document.getElementById("confirmar").disabled = true;
        document.getElementById('contador').innerText = 'Limite Total de pesquisas necessárias. Clique em exibir resultados' 
    }

}

function dadosIdade(){     
    idade = Number.parseInt(document.getElementById('idade').value)
    media += parseFloat(idade, 2)
    if(idade > maisVelho){
        maisVelho = idade;
    }

    if(idade < maisNovo){
        maisNovo = idade;
    }

}

function dadosSexo(){
    if(document.querySelector('#feminino').checked == true){
        qtdeMulheres++ 
    }
    if (document.querySelector('#masculino').checked == true){
        qtdeHomens++
    }
}

function dadosOpiniao(){
    if(document.querySelector('#otimo').checked == true || document.querySelector('#bom').checked == true){
        percBomOtimo++ 
    }
    if (document.querySelector('#pessimo').checked == true){
        qtdePessimo++
    }
}

function limpar(){
    document.getElementById('idade').value = ""
    document.querySelector('#feminino').checked = false
    document.querySelector('#masculino').checked = false
    document.querySelector('#otimo').checked = false
    document.querySelector('#bom').checked = false
    document.querySelector('#regular').checked = false
    document.querySelector('#pessimo').checked = false
    document.getElementById('h2').innerText =""
    document.getElementById('p').innerText =""

}

function finalizar(){    
    if(cont < 4){
        document.getElementById('h2').innerText = "Resultado Parcial"
    }else{
        document.getElementById('h2').innerText = "Resultado Final"
    }

    document.getElementById('p').innerText = `Média das idades: ${media/cont}\nIdade do mais velho: ${maisVelho}\nIdade do mais novo: ${maisNovo}\nQuantidade de avaliações "Péssimo": ${qtdePessimo}\nPercentual de opiniões "Bom ou Otimo": ${(100*percBomOtimo/cont)}%\nQuantidade de mulheres: ${qtdeMulheres}\nQuantidade de homens: ${qtdeHomens}`
}

