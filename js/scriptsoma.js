function calcularSoma() {
  // Variáveis que armazenam o conteudo dos inputs em forma de número
  var A1 = Number(document.getElementById('a1-soma').value.replace(',', '.'))
  var An = Number(document.getElementById('an-soma').value.replace(',', '.'))
  var N = Number(document.getElementById('n-soma').value.replace(',', '.'))
  var Sn = Number(document.getElementById('sn').value.replace(',', '.'))

  // Variáveis que armazenam o conteudo dos inputs em forma de texto
  var A1txt = document.getElementById('a1-soma').value.replace(',', '.')
  var Antxt = document.getElementById('an-soma').value.replace(',', '.')
  var Ntxt = document.getElementById('n-soma').value.replace(',', '.')
  var Sntxt = document.getElementById('sn').value.replace(',', '.')

  // variavel resultado
  var res = document.getElementById('result-soma')

  res.innerHTML = '<b>Resultado</b>: ' // zera o resultado

  if (
    isNaN(An) == true ||
    isNaN(A1) == true ||
    isNaN(N) == true ||
    isNaN(Sn) == true
  ) {
    //testa se o usuário digitou caractéries inválidos
    window.alert('Preencha os campos apenas com números')
  } else if (Ntxt.length > 0 && N < 0) {
    //testa se o usuário digitou N sendo negativo
    window.alert(
      'Esta progressão é inválida. A posição do termo(N) não pode ser negativa.'
    )
  } else if (
    Antxt.length == 0 &&
    A1txt.length > 0 &&
    Ntxt.length > 0 &&
    Sntxt.length > 0
  ) {
    // calcula An
    var An = (Sn * 2 - A1 * N) / N
    res.innerHTML += `A<sub>n</sub> = ${An}`
  } else if (
    A1txt.length == 0 &&
    Antxt.length > 0 &&
    Ntxt.length > 0 &&
    Sntxt.length > 0
  ) {
    // calcula A1
    var A1 = (Sn * 2 - An * N) / N
    res.innerHTML += `A<sub>1</sub> = ${A1}`
  } else if (
    Ntxt.length == 0 &&
    A1txt.length > 0 &&
    Antxt.length > 0 &&
    Sntxt.length > 0
  ) {
    // calcula N
    var N = (Sn * 2) / (A1 + An)
    res.innerHTML += `N = ${N}`
  } else if (
    Sntxt.length == 0 &&
    A1txt.length > 0 &&
    Antxt.length > 0 &&
    Ntxt.length > 0
  ) {
    // calcula Sn
    var Sn = ((A1 + An) * N) / 2
    res.innerHTML += `Sn = ${Sn}`
  } else {
    window.alert('Deixe em branco apenas o valor que deseja descobrir') // testa se o usuário deixou mais de um ou nenhum espaço em branco
  }
}
// faz a tecla enter pressionar o botão
function enter(event) {
  var tecla = event.charCode
  if (tecla == 13) {
    calcular()
  }
}
document.body.addEventListener('keypress', enter)
