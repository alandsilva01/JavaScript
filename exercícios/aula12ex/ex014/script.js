function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var minute = data.getMinutes()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas e ${minute} minutos.`
    if (hora >= 0 && hora < 12){
        img.src = 'manhã.png'
        document.body.style.background = '#FCFF75'

    } else if (hora >= 12 && hora <= 18){
        img.src = 'tarde.png'
        document.body.style.background = '#E08822'

    } else {
        img.src = 'noite.png'
        document.body.style.background = '#140733'

    }
}
