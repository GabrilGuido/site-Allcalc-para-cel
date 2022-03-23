function calcularTermoGeral() {
  // Variáveis que armazenam o conteudo dos inputs em forma de número
  var A1 = Number(
    document.getElementById('A1-termogeral').value.replace(',', '.')
  )
  var An = Number(
    document.getElementById('an-termogeral').value.replace(',', '.')
  )
  var N = Number(
    document.getElementById('n-termogeral').value.replace(',', '.')
  )
  var R = Number(
    document.getElementById('R-termogeral').value.replace(',', '.')
  )

  // Variáveis que armazenam o conteudo dos inputs em forma de texto
  var A1txt = document.getElementById('A1-termogeral').value.replace(',', '.')
  var Antxt = document.getElementById('an-termogeral').value.replace(',', '.')
  var Ntxt = document.getElementById('n-termogeral').value.replace(',', '.')
  var Rtxt = document.getElementById('R-termogeral').value.replace(',', '.')

  // variavel resultado
  var res = document.getElementById('result-termogeral')

  res.innerHTML = '<b>Resultado</b>: ' // zera o resultado

  if (
    isNaN(An) == true ||
    isNaN(A1) == true ||
    isNaN(N) == true ||
    isNaN(R) == true
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
    Rtxt.length > 0
  ) {
    // calcula An
    var An = A1 + (N - 1) * R
    res.innerHTML += `A<sub>n</sub> = ${An}`
  } else if (
    A1txt.length == 0 &&
    Antxt.length > 0 &&
    Ntxt.length > 0 &&
    Rtxt.length > 0
  ) {
    // calcula A1
    var A1 = An - (N - 1) * R
    res.innerHTML += `A<sub>1</sub> = ${A1}`
  } else if (
    Ntxt.length == 0 &&
    A1txt.length > 0 &&
    Antxt.length > 0 &&
    Rtxt.length > 0
  ) {
    // calcula N
    if (An < A1 && R > 0) {
      // impede N de resultar negativo
      window.alert(
        'Esta progressão é inválida. Lembre-se, caso a progressão seja decrescente a razão deve ser negativa.'
      )
    } else if (An > A1 && R < 0) {
      // impede N de resultar negativo
      window.alert(
        'Esta progressão é inválida. Lembre-se, caso a progressão seja crescente a razão deve ser positiva.'
      )
    } else {
      var N = (An - A1) / R + 1
      res.innerHTML += `N = ${N}`
    }
  } else if (
    Rtxt.length == 0 &&
    A1txt.length > 0 &&
    Antxt.length > 0 &&
    Ntxt.length > 0
  ) {
    // calcula R
    var R = (An - A1) / (N - 1)
    res.innerHTML += `R = ${R}`
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
