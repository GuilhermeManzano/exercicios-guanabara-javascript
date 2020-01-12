function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('Data inválida!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                msg.innerHTML = "Menino";
            } else if (idade < 21) {
                msg.innerHTML = "Jovem";
            } else if (idade < 50) {
                msg.innerHTML = "Adulto";
            } else {
                msg.innerHTML = "Idoso";
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                msg.innerHTML = "Menina";
            } else if (idade < 21) {
                msg.innerHTML = "Jovem";
            } else if (idade < 50) {
                msg.innerHTML = "Adulta";
            } else {
                msg.innerHTML = "Idosa";
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade.`
    }
}