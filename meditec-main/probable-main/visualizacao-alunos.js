document.addEventListener("DOMContentLoaded", function() {
    // Simulando os dados de alunos para esta turma
    const alunos = [
        { name: 'João Silva', info: 'Curso: Matemática', status: 'Ativo' },
        { name: 'Maria Oliveira', info: 'Curso: Física', status: 'Ativo' }
    ];

    const alunosLista = document.getElementById('alunos-lista');
    
    alunos.forEach(aluno => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${aluno.name}</strong><br>${aluno.info}<br>Status: ${aluno.status}`;
        alunosLista.appendChild(li);
    });

    // Voltar para a tela de listagem de turmas
    document.getElementById('btn-voltar').addEventListener('click', function() {
        window.history.back();
    });
});
