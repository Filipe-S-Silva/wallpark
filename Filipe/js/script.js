//simulação de BD
function btnEnviar() {
    email = document.getElementById('email').value
    senha = document.getElementById('senha').value
    
    if (email == "teste" && senha == "123") {
        window.location.href = "html/cadastrar.html";
    } else {
        document.getElementById('email').value = "";
        document.getElementById('senha').value = "";
        alert("ACESSO NEGADO\nTENTE NOVAMENTE");
    }    
}

document.getElementById('btn').addEventListener('click', function () {
    btnEnviar();
})

document.addEventListener('keypress', (e) =>{
    if(e.key === 'Enter'){
        btnEnviar();
    }
})