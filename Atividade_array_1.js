function mes(){
    var meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

    var mesAtual = new Date()
    var mesNome = meses[mesAtual.getMonth()]
    document.getElementById('resultado').innerHTML = mesNome
}