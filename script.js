function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolar = parseFloat(valor);

  var valorEmReal = valorEmDolar * 5.22;
  var valorEmBitcoin = valorEmDolar * 0.000024;
  console.log(valorEmReal);
  console.log(valorEmBitcoin);

  var elementoConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "Os valores são: Em Real R$" + valorEmReal + " Bitcoin " + valorEmBitcoin;
  elementoConvertido.innerHTML = valorConvertido;
}