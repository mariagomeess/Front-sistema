document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const userType = document.getElementById("userType").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Aqui você pode adicionar a lógica de autenticação com uma API ou backend.
    if (email && password) {
        switch (userType) {
            case "coordenador":
                window.location.href = "painel-coordenador.html"; // Redireciona ao painel do coordenador
                break;
            case "professor":
                window.location.href = "painel-professor.html"; // Redireciona ao painel do professor
                break;
            case "aluno":
                window.location.href = "painel-aluno.html"; // Redireciona ao painel do aluno
                break;
            default:
                alert("Tipo de usuário inválido!");
        }
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
