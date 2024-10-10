document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userData = {
        username: this.username.value,
        email: this.email.value,
        password: this.password.value,
        role: this.role.value,
        permissions: this.permissions.value.split(',').map(permission => permission.trim())
    };
    
    fetch('http://127.0.0.1:3000/api/usuarios', { // Altere a URL conforme necessário
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao salvar o usuário');
        }
        return response.json();
    })
    .then(data => {
        console.log('Usuário salvo:', data);
        alert('Usuário salvo com sucesso!');
        window.location.href = 'gerenciamento-usuarios.html'; // redireciona para a página de gerenciamento
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao salvar o usuário.');
    });
});

function cancel() {
    if (confirm("Tem certeza que deseja cancelar?")) {
        window.location.href = 'home.html'; // redireciona para a tela inicial ou outra
    }
}
