var original = []

function inserir(){
    original.push(Number(document.getElementById('entrada').value))
    imprimir()
}

function imprimir(){
    document.getElementById('resultado').innerHTML = original
}