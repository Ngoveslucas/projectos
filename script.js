//Funcao para limpar o display
function clearDisplay(){
    document.getElementById('display').value = '';
}

//funcao para add numeros e operadores ao display
function appendToDisplay(value){
    document.getElementById('display').value += value;
}

//funcao para calcular o resultadao da expressao no display
function calculate(){
    try {
        //obter o valor actual do display
        var expression = document.getElementById('display').value;

        //calcular o resultado da expressao
        var result = eval(expression);

        console.log('Resultado calculado:', result); //Adiciona mensagem de debug

        //exibir o resultado no display
        document.getElementById('display').value = result;
        console.log('Resultado:', document.getElementById('display').value);
    } catch (error) {
        //se houver um erro na expressao, exibir "Erro" no display
        document.getElementById('display').value = 'Erro';
    }
} 