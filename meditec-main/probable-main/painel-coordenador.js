// Aqui você pode adicionar funcionalidades específicas para o painel do coordenador.
// Exemplo: navegação para diferentes seções
const sectionButtons = document.querySelectorAll(".section-card button");

sectionButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const section = e.target.previousElementSibling.textContent;

        if (section === "Gerenciamento de Usuários") {
            window.location.href = "gerenciamento-usuarios.html"; // Redireciona para a tela de gerenciamento de usuários
        } else if (section === "Gerenciamento Acadêmico") {
            // Redireciona para o painel acadêmico
            window.location.href = "gerenciamento-academico.html";
        } else if (section === "Comunicados") {
            // Redireciona para a seção de comunicados
            window.location.href = "comunicados.html";
        }
    });
});
