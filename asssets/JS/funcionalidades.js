//Funcionalidade UpperCase
upperCase.addEventListener('click', funcUpper)

function funcUpper(e){
    saida.value = entrada.value.toUpperCase()
}

//Funcionalidade LowerCase
lowerCase.addEventListener('click', funcLower)

function funcLower(e){
    saida.value = entrada.value.toLowerCase()
}

//Funcionalidade CamelCase
camelCase.addEventListener('click', funcCamel)

function funcCamel(e){
    let txt = entrada.value
    let passou = false
    txt = txt.split("")
    let contadorDeEspacos = 0
    txt.forEach(function(valor, index, array){
        if(index == 0){
            array[index] = array[index].toUpperCase()
        } else if(array[index] == " "){
            contadorDeEspacos++
            console.log(contadorDeEspacos)
        } else if(contadorDeEspacos == 1){
            array[index] = array[index].toUpperCase()
            console.log('Passei')
            contadorDeEspacos = 0
        } else if (array[index] == "\n"){
            passou = true
        } else if (passou == true){
            array[index] = array[index].toUpperCase()
            passou = false
        } else {
            array[index] = array[index].toLowerCase()
        }

        saida.value = array.join("")
    })
}

//Funcionalidade Paragráfo
paragrafo.addEventListener('click', funcParagrafo)

function funcParagrafo(e){
    let novoArray = entrada.value
    let passou = false
    novoArray = novoArray.split("")
    novoArray.forEach(function(valor, index, array){
        if(index == 0){
            array[index] = array[index].toUpperCase()
        } else if (array[index] == "\n"){
            passou = true
        } else if (passou == true){
            array[index] = array[index].toUpperCase()
            passou = false
        }
        else {
            array[index] = array[index].toLowerCase()
        }
        saida.value = array.join("")
    })
}

//Funcionalidade Alternativo
alternativo.addEventListener('click',  funcAlternativo)

function funcAlternativo(e){
    let novoArray = entrada.value
    novoArray = novoArray.split("")
    novoArray.forEach(function(valor, index, array){
        let sorteador = Math.floor(Math.random() * 10 + 1)
        console.log(sorteador)
        if(sorteador % 2 == 0){
            array[index] = array[index].toUpperCase()
        } else {
            array[index] = array[index].toLowerCase()
        }
        let texto = array.join("")
        console.log(texto)
        saida.value = texto 
        
    })
}

//Funcionalidade Inverter
inverter.addEventListener('click', funcInverter)

function funcInverter(e){
    saida.value = entrada.value.split("").reverse().join("")
}

//Limpar
reset.addEventListener('click', limpar)

function limpar(e){
    saida.value = ""
    entrada.value = ""
    if(entrada.value == ""){
        linhas.innerText = "0"
        frases.innerText = "0"
        numeroCarac.innerText = "0"
        numeroCaracEspaco.innerText = "0"
    }
}

//Copiar para clipboard
copiar.addEventListener('click', (event) => {

    event.preventDefault()
    navigator.clipboard.writeText(saida.value)
    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + saida.value;
})
