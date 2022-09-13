let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    // ! significa não em JS
    if (isNumero(num.value) && !inLista(num.value, valores)) {
       valores.push(Number(num.value))
       //adicionar itens dentro do select
       let item = document.createElement('option')
       item.text = `Valor ${num.value} adicionado`
       // Para colocar na lista
       lista.appendChild(item)
       //res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    /* Para apagar um numero dentro da caixa de adicionar valores*/
    num.value = ''
    num.focus()
}
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicionar valores antes de finalizar!')
    }else{
        //Para mostrando quantos numeros cadastrados
        let tot = valores.length
        //maior e menor valores
        let maior = valores[0]
        let menor = valores[0]
        //media
        let soma = 0
        let media = 0
        for( let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor )
                maior = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p> Somando todos os valores temos ${soma}.</p>`
        res.innerHTML +=`<p> A média dos valores digitados é ${media}</p>`
    }

}