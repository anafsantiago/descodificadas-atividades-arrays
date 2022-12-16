var original = []

function inserir(){
    original.push(Number(document.getElementById('entrada').value))
}

var texto = ""

function imprimir(){
    for(i = 0; i < original.length; i++){
        texto = texto + original[i] + "<br>"
    }

    document.getElementById('resultado').innerHTML = texto
}


