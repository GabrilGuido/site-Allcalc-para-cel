var btn = document.querySelector('#botao-sequencia')
var container = document.querySelector('#calc_aritimetica_sequencia')  
var btn1 = document.querySelector('#botao-termogeral')
var container1 = document.querySelector('#calc_aritimetica_termogeral') 
var btn2 = document.querySelector('#botao-soma')
var container2 = document.querySelector('#calc_aritimetica_soma')    


btn.addEventListener('click', function() {
    if(container.style.display === 'none'){
        container.style.display = 'block';
        container1.style.display = 'none';
        container2.style.display = 'none';
    }else{
        container.style.display = 'none';
    } 
})

btn1.addEventListener('click', function() {
    if(container1.style.display === 'none'){
        container1.style.display = 'block';
        container.style.display = 'none';
        container2.style.display = 'none';
    }else{
        container1.style.display = 'none';
    } 
})

btn2.addEventListener('click', function() {
    if(container2.style.display === 'none'){
        container2.style.display = 'block';
        container1.style.display = 'none';
        container.style.display = 'none';

    }else{
        container2.style.display = 'none';
    } 
})

