const camposDeTexto = document.querySelectorAll('.borda');

const campoObrigatorio = document.querySelectorAll('.aparecer');

const enviarBtn = document.getElementById('enviar-btn');

enviarBtn.addEventListener("click", () => {
    camposDeTexto.forEach(function(cor, index) {
        if (cor.value.trim() !== "") {
            cor.classList.add('borda-verde');
            cor.classList.remove('borda-vermelha');
            campoObrigatorio[index].classList.add('ativo');
        } else {
            cor.classList.remove('borda-verde');
            cor.classList.add('borda-vermelha');
            campoObrigatorio[index].classList.remove('ativo');
        }
    });
});

