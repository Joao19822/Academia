let btn = document.querySelector('button[type=submit]')

btn.addEventListener('click', e=> {
    e.preventDefault();

    let nome_usuario = document.getElementById('nome_usuario')
    let senha_usuario = document.getElementById('senha_usuario')
    let conf_senha_usuario = document.getElementById('conf_senha_usuario')
    let altura = document.getElementById('altura')
    let peso = document.getElementById('peso')

    if (nome_usuario.value && (senha_usuario.value == conf_senha_usuario.value)) {
        //cadastrar o usuario

        let url = "https://academia-12627-default-rtdb.firebaseio.com/"

        let info = {
            'nome_usuario': nome_usuario.value,
            'senha_usuario': senha_usuario.value,
            'altura': altura.value,
            'peso': peso.value, 
        }
        fetch(url + 'usuario.json',{
            method: 'POST',
            body: JSON.stringify(info)
        })
        .then(respota => respota.json())
        .then(dados => {
            console.log(dados)
            window.location.href = "login.html"
            return
        })
    }else{
        alert('preencha os campos')
    }
})

