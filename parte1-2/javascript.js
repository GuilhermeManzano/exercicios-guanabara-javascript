function carregar() {
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = 10
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = "BOM DIA!!!";
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = "Boa Tarde!!";
        document.body.style.background = 'green';
    } else {
        msg.innerHTML = "Boa Noite!!";
        document.body.style.background = 'gray';
    }
}