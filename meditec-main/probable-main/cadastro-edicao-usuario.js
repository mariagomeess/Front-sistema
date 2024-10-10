document.getElementById("saveUserForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const tipoUsuario = document.getElementById("tipoUsuario").value;
    const permissoes = Array.from(document.querySelectorAll('input[name="permissions"]:checked')).map(el => el.value);

    // Aqui você pode fazer uma chamada para o backend para salvar os dados do usuário
    if (nome && email && senha && tipoUsuario) {
        fetch('http://127.0.0.1:3000/api/usuarios', { // Ajuste a URL conforme seu endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome,
                email,
                senha,
                tipoUsuario
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao salvar usuário');
            }
            return response.json();
        })
        .then(data => {
            alert(data.message || "Usuário salvo com sucesso!");
            window.location.href = "gerenciamento-usuarios.html"; // Redireciona de volta para a lista de usuários
        })
        .catch(error => {
            console.error('Erro:', error);
            alert("Erro ao salvar usuário.");
        });
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
