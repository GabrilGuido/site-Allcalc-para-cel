var btnSequenciaGeometrica = document.querySelector(
  '#botao-sequencia-geometrica'
)
var containerSequenciaGeometrica = document.querySelector(
  '#calc_geometrica_sequencia'
)
var btn1TermogeralGeometrica = document.querySelector(
  '#botao-termogeral-geometrica'
)
var container1TermogeralGeometrica = document.querySelector(
  '#calc_geometrica_termogeral'
)
var btn2SomaGeometrica = document.querySelector('#botao-soma-geometrica')
var container2SomaGeometrica = document.querySelector('#calc_geometrica_soma')

btnSequenciaGeometrica.addEventListener('click', function () {
  if (containerSequenciaGeometrica.style.display === 'none') {
    containerSequenciaGeometrica.style.display = 'block'

    container1TermogeralGeometrica.style.display = 'none'

    container2SomaGeometrica.style.display = 'none'
  } else {
    containerSequenciaGeometrica.style.display = 'none'
  }
})

btn1TermogeralGeometrica.addEventListener('click', function () {
  if (container1TermogeralGeometrica.style.display === 'none') {
    container1TermogeralGeometrica.style.display = 'block'

    containerSequenciaGeometrica.style.display = 'none'

    container2SomaGeometrica.style.display = 'none'
  } else {
    container1TermogeralGeometrica.style.display = 'none'
  }
})

btn2SomaGeometrica.addEventListener('click', function () {
  if (container2SomaGeometrica.style.display === 'none') {
    container2SomaGeometrica.style.display = 'block'

    container1TermogeralGeometrica.style.display = 'none'

    containerSequenciaGeometrica.style.display = 'none'
  } else {
    container2SomaGeometrica.style.display = 'none'
  }
})
