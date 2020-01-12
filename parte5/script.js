function verificar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.lenght === 0 || fim.value.lenght === 0 || passo.value.lenght === 0) {
        window.alert('Valores inválidos!!!')
    } else {
        res.innerHTML = 'Contando... '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo Invalido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (let c = 1; c <= f; c += p) {
                res.innerHTML += `${c} =>`
            }
        } else {
            //Contagem decrescente
            for (let c = 1; c >= f; c += p) {
                res.innerHTML += `${c} ->`
            }
        }
        res.innerHTML += 'FIM!!'
    }
}