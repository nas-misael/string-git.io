entrada.addEventListener('keyup', contador)


function contador(e){
    let tamanhoStringSemEspaco = entrada.value.replace(/\s/g, "")
    numeroCaracEspaco.innerText = tamanhoStringSemEspaco.length
    let tamanhoStringComEspaco = entrada.value.length
    numeroCarac.innerText = tamanhoStringComEspaco
    console.log(e.code)
    let frase = (parseInt(numeroCarac.innerText) - parseInt(numeroCaracEspaco.innerText)) + 1
    frases.innerText = frase
    let linha = entrada.value.split(/\r\n|\r|\n/).length
    linhas.innerText = linha

    if(entrada.value == ""){
        linhas.innerText = "0"
        frases.innerText = "0"
    }
}
