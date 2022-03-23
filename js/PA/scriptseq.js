function calcular() {
  //variáveis em número
  var contador = 0
  var A1 = Number(document.getElementById('a1').value.replace(',', '.'))
  var R = Number(document.getElementById('r').value.replace(',', '.'))
  var N = Number(document.getElementById('n').value.replace(',', '.'))
  //variáveis em texto
  var A1txt = document.getElementById('a1').value.replace(',', '.')
  var Rtxt = document.getElementById('r').value.replace(',', '.')
  var Ntxt = document.getElementById('n').value.replace(',', '.')
  var res = document.getElementById('result')
  // --------------------------
  res.innerHTML = '<b>Resultado</b>: '
  if (A1txt.length == 0 || Rtxt.length == 0 || Ntxt.length == 0) {
    // testa se há campos vazios
    window.alert('Preencha todos os campos corretamente')
  } else if (isNaN(A1) == true || isNaN(R) == true || isNaN(N) == true) {
    // testa se o usuário utilizou caracteries inválidos
    window.alert('Preencha os campos apenas com números')
  } else if (R == 0) {
    // calcula a progressão para razão igual à 0
    res.innerHTML += `${A1} → ${A1} → ${A1}...`
  } else {
    for (
      var c = A1;
      contador != N;
      c += R, contador++ // calcula a progressão
    ) {
      if (contador + 1 == N) {
        res.innerHTML += ` ${c}`
      } else {
        res.innerHTML += ` ${c} →`
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
