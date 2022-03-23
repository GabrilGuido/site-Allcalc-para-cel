function calcular()
{
    var A1 = Number(document.getElementById('a1').value.replace(',','.'))
    var R = Number(document.getElementById('r').value.replace(',','.'))
    var F = Number((document.getElementById('final')).value.replace(',','.'))
    var res = document.getElementById('result')
    // --------------------------
    res.innerHTML = "<b>Resultado</b>: "
    if ((document.getElementsByClassName('input')[2].value).length == 0) // testa se há campos vazios
    {
       window.alert('Preencha todos os campos corretamente')
    }
    else
    { if(isNaN(A1) == true || isNaN(R) == true || isNaN(F) == true)
        {
            window.alert('Preencha os campos apenas com números')
        }
        else
        {
          if(R == 0)
            {
                c = A1
                res.innerHTML += `${c}.`
            }
            else
            {
                if (A1 >= F && R > 0)//testa se o usuário usou corretamente o sinal da razão
                {
                    window.alert("Esta progressão é inválida. Lembre-se, caso a progressão seja decrescente a razão deve ser negativa.")
                }
                else
                {
                    if(A1 <= F && R < 0 )
                    {
                        window.alert("Esta progressão é inválida. Lembre-se, caso a progressão seja crescente a razão deve ser positiva.")  
                    }
                    else
                    {
                        if (A1 < F)
                        {
                            for (var c = A1; c<= F; c += R)
                            {
                                if (c + R > F)
                                {res.innerHTML += ` ${c}.`}
                                else
                                {res.innerHTML += ` ${c} → `}
                            }
                        } 
                        else
                        {
                            for (var c = A1; c>= F; c += R)
                            {
                                if (c + R < F)
                                {res.innerHTML += ` ${c}`}
                                else
                                {res.innerHTML += ` ${c} → `}
                            }
                        }

                    }
                        
                }  
            }
             
        }            
    }
    
}