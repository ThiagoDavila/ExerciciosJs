function carregar(){
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    
   
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12 ){
      document.body.style.background = '#c27926a8'
      img.src = 'modelo/exemanha.png'
      //Bom Dia 
    }else if (hora >= 12 && hora <= 18){
      document.body.style.background = '#a4cde4'
      img.src = 'modelo/exetarde.png'
      //Boa Tarde
    }else{
      document.body.style.background = '#045156'
      img.src = 'modelo/exenoite.png'
      //Boa Noite
    }

}
