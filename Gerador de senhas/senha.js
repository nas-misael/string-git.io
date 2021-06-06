let button = document.getElementById('but')
let radios = document.getElementsByName('valores')
let checkboxes = document.getElementsByName('inclusao')
let input = document.getElementById('tamanho')
let arrCheckBoxes = []
let arrAlphabet = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let caracEspeciais = ["@" ,"*" ,"!" ,"%" ,";",":","#"]
let numbers = ["0","1","2","3","4","5","6","7","8","9"]
let arrAlphabetM = ["A", "B", "C", "D", "E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let copyText = document.getElementById("resultado");
let buttonCopiar = document.getElementById("Cpy")

button.addEventListener('click', gerarSenha)
buttonCopiar.addEventListener('click', myFunction)

function gerarSenha(e){
    let atribuiValorRadio = ''
    let objAlphabet = { 1: arrAlphabet}
    let objEspeciais = { 2: caracEspeciais}
    let objNumbers = { 3: numbers}
    let objAlphabetM = { 4: arrAlphabetM}
    let arrSorteador = []
    let incremento = 0
    let result = new String
    
    if(arrCheckBoxes.length > 0){
        arrCheckBoxes.splice(0, arrCheckBoxes.length)
    } 
    atribuiValorRadio = pegaValorRadios()
    
    addArrayCheckbox()
    console.log(atribuiValorRadio)
    while (incremento < input.value){
        if(incremento == 0){
            switch(atribuiValorRadio){
                case "1":
                    let sorteiaNumero =  Math.floor(Math.random() * 26)
                    if(sorteiaNumero == arrAlphabet.indexOf(arrAlphabet[sorteiaNumero])){
                        arrSorteador.push(1) 
                    }
                    break
                case "2":
                    let sorteiaNumero1 =  Math.floor(Math.random() * 7)
                    if(sorteiaNumero1 == caracEspeciais.indexOf(caracEspeciais[sorteiaNumero1])){
                        arrSorteador.push(2) 
                    }
                    break
                case "3":
                    let sorteiaNumero2 =  Math.floor(Math.random() * 10)
                    if(sorteiaNumero2 == numbers.indexOf(numbers[sorteiaNumero2])){
                        arrSorteador.push(3) 
                    }
                    break
                case "4":
                    let sorteiaNumero3 =  Math.floor(Math.random() * 26)
                    if(sorteiaNumero3 == arrAlphabetM.indexOf(arrAlphabetM[sorteiaNumero3])){
                        arrSorteador.push(4) 
                    }
                    break
            }
            incremento++
        } else {
            let sorteiaPrimeiroGrupo = arrCheckBoxes[Math.floor(Math.random() * arrCheckBoxes.length)]
            console.log(sorteiaPrimeiroGrupo)   
            arrSorteador.push(sorteiaPrimeiroGrupo)
            incremento++
            
        }
    }

    console.log(arrSorteador)
    let pegaAlphabet = alphabet(objAlphabet)
    console.log(pegaAlphabet)
    let pegaAlphabetM = alphabetM(objAlphabetM)
    let pegaNumeros = numeros(objNumbers)
    let pegaEspeciais = especiais(objEspeciais)

    console.log(atribuiValorRadio, arrCheckBoxes)
    
    for(let i = 0; i < arrSorteador.length; i++){
        
        if(arrSorteador[i] == pegaAlphabet){
            let sorteiaNumero =  Math.floor(Math.random() * 26) 
            if(sorteiaNumero == arrAlphabet.indexOf(arrAlphabet[sorteiaNumero])){
                result += arrAlphabet[sorteiaNumero]
            }
        }
        if(arrSorteador[i] == pegaAlphabetM){
            let sorteiaNumero =  Math.floor(Math.random() * 26) 
            if(sorteiaNumero == arrAlphabetM.indexOf(arrAlphabetM[sorteiaNumero])){
                result += arrAlphabetM[sorteiaNumero]
            }
        }
        if(arrSorteador[i] == pegaNumeros){
            let sorteiaNumero =  Math.floor(Math.random() * 10) 
            if(sorteiaNumero == numbers.indexOf(numbers[sorteiaNumero])){
                result += numbers[sorteiaNumero]
            }
        }
        if(arrSorteador[i] == pegaEspeciais){
            let sorteiaNumero =  Math.floor(Math.random() * 7) 
            if(sorteiaNumero == caracEspeciais.indexOf(caracEspeciais[sorteiaNumero])){
                result += caracEspeciais[sorteiaNumero]
            }
        }
    }
    
    copyText.value = result
    
    
}



function pegaValorRadios(){
    let atribuiValorRadio = ''
    
    for(let i = 0; i < radios.length; i++){
        if(radios[i].checked){
            atribuiValorRadio = radios[i].value
            break
        }
    }
    return atribuiValorRadio
}


function addArrayCheckbox(){
    for(let i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].checked){
            arrCheckBoxes.push(checkboxes[i].value)
        }
    }
}

function alphabet(obj){
    for (let prop in obj){
        console.log(prop + ';'  + obj[prop])
        return prop
    }
}

function alphabetM(obj){
    for (let prop in obj){
        console.log(prop + ';'  + obj[prop])
        return prop
    }
}

function numeros(obj){
    for (let prop in obj){
        console.log(prop + ';'  + obj[prop])
        return prop
    }
}

function especiais(obj){
    for (let prop in obj){
        console.log(prop + ';'  + obj[prop])
        return prop
    }
}
function myFunction() {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
  }