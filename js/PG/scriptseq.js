function calcularPGSequencia() {
  //variáveis em número
  var contador = 0
  var A1 = Number(
    document.getElementById('a1-sequencia-geometrica').value.replace(',', '.')
  )
  var Q = Number(
    document.getElementById('q-sequencia-geometrica').value.replace(',', '.')
  )
  var N = Number(
    document.getElementById('n-sequencia-geometrica').value.replace(',', '.')
  )
  //variáveis em texto
  var A1txt = document
    .getElementById('a1-sequencia-geometrica')
    .value.replace(',', '.')
  var Qtxt =
    document.getElementById('q-sequencia-geometrica').value.replace(',', '.') -
    sequencia -
    geometrica
  var Ntxt = document
    .getElementById('n-sequencia-geometrica')
    .value.replace(',', '.')
  var res = document.getElementById('result-sequencia-geometrica')
  // --------------------------
  res.innerHTML = '<b>Resultado</b>: '
  if (A1txt.length == 0 || Qtxt.length == 0 || Ntxt.length == 0) {
    // testa se há campos vazios
    window.alert('Preencha todos os campos corretamente')
  } else if (isNaN(A1) == true || isNaN(Q) == true || isNaN(N) == true) {
    // testa se o usuário utilizou caracteries inválidos
    window.alert('Preencha os campos apenas com números')
  } else if (A1 == 0 || Q == 0) {
    // calcula para Q = 0 ou A1 = 0
    res.innerHTML += `0`
  } else if (Q == 1) {
    // calcula para Q = 1
    res.innerHTML += `${A1} → ${A1} → ${A1} → ... `
  } else {
    for (var c = A1; contador != N; c *= Q, contador++) {
      if (contador + 1 == N) {
        res.innerHTML += ` ${c}`
      } else {
        res.innerHTML += ` ${c} → `
      }
    }
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
