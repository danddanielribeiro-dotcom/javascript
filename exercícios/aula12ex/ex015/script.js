function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img');
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem';
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','fotocriançamas.png')
            } else if ( idade < 21) {
                //Jovem
                img.setAttribute('src','fotojovemmas.png')
            } else if ( idade < 50) {
                //Adulto
                img.setAttribute('src','fotoadultomas.png')
            } else {
                //Idoso
                img.setAttribute('src','fotoidosomas.png')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher';
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','fotocriançafem.png')
            } else if ( idade < 21){
                //Jovem
                img.setAttribute('src','fotojovemfem.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src','fotoadultofem.png')
            } else {
                //Idoso
                img.setAttribute('src','fotoidosofem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}