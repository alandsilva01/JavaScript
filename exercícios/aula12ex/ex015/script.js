function verificar() {
    var data = new Date()
    var ano = data.getFullYear() 
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menino.png')
                img.style.width= '250px'
                img.style.height= '250px'
            } else if (idade < 30) {
                //jovem
                img.setAttribute('src', 'joven.png')
                img.style.width= '250px'
                img.style.height= '250px'
            } else if (idade < 65) {
                //Adulto
                img.setAttribute('src', 'homem.png')
                img.style.width= '250px'
                img.style.height= '250px'
            } else if (idade < 90) {
                //idoso
                img.setAttribute('src', 'veio.png')
                img.style.width= '250px'
                img.style.height= '250px'
            } else {
                //mumia
                img.setAttribute('src', 'mumia.png')
                img.style.width= '250px'
                img.style.height= '250px'
            }
            
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menina.png')
                img.style.width= '250px'
                img.style.height= '250px'
            } else if (idade < 29) {
                //jovem
                img.setAttribute('src', 'jova.png')
                img.style.width= '250px'
                img.style.height= '250px'
            } else if (idade < 65) {
                //Adulto
                img.setAttribute('src', 'mulher.png')
                img.style.width= '250px'
                img.style.height= '250px'
            } else if (idade < 90) {
                //idoso
                img.setAttribute('src', 'veia.png')
                img.style.width= '250px'
                img.style.height= '250px'
            } else {
                //mumia
                img.setAttribute('src', 'mumia.png')
                img.style.width= '250px'
                img.style.height= '250px'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}
