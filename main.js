function validarRta (texto, textoValidar){
    if (texto.toLowerCase() == textoValidar){
        return true
    }

    return false
}

let sigue = "si"



do{

    let cantDolares
    do{
        cantDolares = parseFloat(prompt("ingrese la cant de u$D para ver cuanto vale en ARG$"))
        if(isNaN(cantDolares) == true){
            alert ("solo se permiten numeros validos")
        }

    }while(isNaN(cantDolares) == true) 
    


    alert(cantDolares * 950)

    let rta = prompt("¿Quiere realizar otra conversion?")

    if (validarRta(rta, "no") == true){
        sigue = "no"
    }

}while (sigue == "si")







