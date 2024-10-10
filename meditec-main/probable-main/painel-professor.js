document.addEventListener("DOMContentLoaded", function() {
    // Carregar as turmas (mesmo código de antes)
    const turmas = [
        { name: 'Turma 1', year: 2024, semester: 1 },
        { name: 'Turma 2', year: 2024, semester: 2 }
    ];
    const turmasLista = document.getElementById('turmas-lista');
    turmas.forEach(turma => {
        const li = document.createElement('li');
        li.textContent = `${turma.name} - Ano: ${turma.year}, Semestre: ${turma.semester}`;
        turmasLista.appendChild(li);
    });

    // Carregar as disciplinas (mesmo código de antes)
    const disciplinas = [
        { name: 'Matemática' },
        { name: 'Física' }
    ];
    const disciplinasLista = document.getElementById('disciplinas-lista');
    disciplinas.forEach(disciplina => {
        const li = document.createElement('li');
        li.textContent = disciplina.name;
        disciplinasLista.appendChild(li);
    });

    // Redirecionar para a página de registro de conceito
    document.getElementById('btn-registrar-conceito').addEventListener('click', function() {
        window.location.href = 'registro-conceitos.html';  // Muda para a página de registrar conceito
    });

    // Redirecionar para a página de criação de comunicado
    document.getElementById('btn-novo-comunicado').addEventListener('click', function() {
        window.location.href = 'criar-comunicado.html';  // Muda para a página de criar comunicado
    });

    // Redirecionar para a listagem de turmas ao clicar em "Minhas Turmas"
    document.getElementById('minhas-turmas').addEventListener('click', function() {
        window.location.href = 'listagem-turmas.html';  // Muda para a página de listagem de turmas
    });

    // Redirecionar para a listagem de disciplinas ao clicar em "Minhas Disciplinas"
    document.getElementById('minhas-disciplinas').addEventListener('click', function() {
        window.location.href = 'listagem-disciplinas.html';  // Muda para a página de listagem de disciplinas
    });
});
