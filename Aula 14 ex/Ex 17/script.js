function gerar(){
    var numero = document.getElementById('txtnumero')
    var tab = document.getElementById('seltab')
    if(numero.value.length == 0){
        window.alert('Por favor,digite um número')
    }else{
        var n = Number(numero.value)
        var c = 1
        tab.innerHTML = ''
        while(c <=10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab ${c}`
            tab.appendChild(item)
            c++
        }
    }
}