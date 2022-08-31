function contar() {
    var ini = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var resultado = document.getElementById('res')

    if (ini.value == 0 || fim.value == 0 || passo.value == 0) {
        resultado.innerHTML = 'Imporssivel contar!'
        window.alert('[ERRO] Revise os dados novamente')
    } else {
        resultado.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            //contagem crescente
            for (var c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{1F449} `
            }

        } else {
            //contagem regressiva
            for (var c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} \u{1F449} `
            }
        }
        resultado.innerHTML += `\u{1f3c1} `
    }

}