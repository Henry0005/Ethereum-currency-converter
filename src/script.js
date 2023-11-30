var nomeUsuario = "Henrique";
var valorEmEthereum = 1;
var cotacaoEmEthereum = 9966.53; // Valor fixo, precisa ser atualizado manualmente
var valorEmReal = (valorEmEthereum * cotacaoEmEthereum).toFixed(2);
// valorEmReal = valorEmReal.toFixed(2);
alert('Olá ' + nomeUsuario + '! O valor em reais é de R$ '+ valorEmReal);
