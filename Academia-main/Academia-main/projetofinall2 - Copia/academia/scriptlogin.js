let btn = document.querySelector('button[type=submit]')

btn.addEventListener('click', e => {
    e.preventDefault();

    let nome_usuario = document.getElementById('nome_usuario')
    let senha_usuario = document.getElementById('senha_usuario')

    let url = "https://academia-12627-default-rtdb.firebaseio.com/"

    fetch(url + 'usuario.json')
        .then(resposta => resposta.json())
        .then(dados => {
            console.log(dados)

            for (const key in dados) {
 
                if((dados[key].nome_usuario == nome_usuario.value) && (dados[key].senha_usuario == senha_usuario.value)) {
                    alert('bem vindo')

                    window.location.href = "calculadora.html"
                    return
                } else {
                    alert('rapa fora, não te conheço')
                }
            }
        })
})