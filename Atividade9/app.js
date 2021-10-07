/**
 * Atividade 9 - Programação Web
 * @author Carlos Wagner   
 */


//função maior
function maior(){
    var num1 = parseFloat(document.getElementById("numero1").value); 
    var num2 = parseFloat(document.getElementById("numero2").value);
    var num3 = parseFloat(document.getElementById("numero3").value);

    if(num1 > num2){
        if(num2 > num3){
            document.getElementById('resposta').innerText = ' O maior número é ' + num1;
        }
    }else if(num2 > num3){
        document.getElementById('resposta').innerText = ' O maior número é ' + num2;
    }else{
        document.getElementById('resposta').innerText = ' O maior número é ' + num3;
    }  
}



//função em ordem

function ordem(){
    //entrada
    var num1 = parseFloat(document.getElementById("numero1").value); 
    var num2 = parseFloat(document.getElementById("numero2").value);
    var num3 = parseFloat(document.getElementById("numero3").value);

    //processamento

    var aux = num1;

    if(num1 > num2){
     aux=num2;
     num2=num1;
     num1=aux;
    }

    if(num3 < num1){
     aux=num3;
     num3=num1;
     num1=aux;
    }

    if(num3 < num2){
     aux=num3;
     num3=num2;
     num2=aux;
    }
    //saída    
    document.getElementById('resposta').innerText = 'Ordem Crescente: '  + num1 + '-' + num2 + '-' + num3;

}