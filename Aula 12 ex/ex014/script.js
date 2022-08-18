function carregar(){
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12 ){
      //Bom Dia
      img.src = '/Aula 12 ex/modelo/exemanha.png'
    }else if (hora >= 12 && hora <= 18){
    //Boa Tarde
    img.src = '/Aula 12 ex/modelo/exetarde.png'
    }else{
        //Boa Noite
        img.src = '/Aula 12 ex/modelo/exenoite.png'
    }

}
