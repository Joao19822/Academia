var url_base = "https://academia-12627-default-rtdb.firebaseio.com/aluno.json";
var url = "";


function cadastro() {

    var email = document.getElementById('email')
    var senha = document.getElementById('password')
    let id = document.getElementById('id')

    var gravar = {
        method: 'POST',
        body: JSON.stringify({
            nome: nome.value,
            email: email.value,
            senha: senha.value,
            data: birthdate.value
        })
    }

    if (id.value == "") {
        console.log('id vazio, novo cadastro')
        url = url_base;
    } else {
        console.log('id:', id.value)
        //atualização
        url = `https://academia-12627-default-rtdb.firebaseio.com/aluno/${id.value}.json`;
        console.log(url)
        gravar.method = 'PUT'
    }
    fetch(url, gravar)
        .catch(erro => console.log(erro))

    setTimeout(() => {
        listar();

    }, 500);

    document.getElementById('register-form').reset()
}

var botao_salvar = document.getElementById('cadastrar');
botao_salvar.addEventListener('click', e => {

    cadastro();

    alert('cadastrado com sucesso');
})

var lista = document.getElementById('lista');
var listagem = "";
function listar() {
    lista.innerHTML = "";
    //pegar os dados do firebase

    fetch(url_base)
        .then(resposta => resposta.json())
        .then(dados => {
            //só vai chegar aqui, se ele conseguir pegar os dados
            console.log(dados)
            for (const key in dados) {
                listagem = dados;
                lista.innerHTML += `
                <tr>
                    <td>${dados[key].nome}</td>
                    <td>${dados[key].email}</td>
                    <td>${dados[key.senha]}</td>
                    <td>${dados[key.data]}</td>
                `
            }

        })
        .catch(erro => console.log(erro))
}
