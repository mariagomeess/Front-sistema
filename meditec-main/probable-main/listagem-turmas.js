document.addEventListener("DOMContentLoaded", function() {
    const turmas = [
        { name: 'Turma A', students: 25, disciplines: 'Matemática, Física' },
        { name: 'Turma B', students: 20, disciplines: 'Química, Biologia' }
    ];

    const turmasLista = document.getElementById('turmas-lista');
    
    turmas.forEach(turma => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${turma.name}</td>
            <td>${turma.students}</td>
            <td>${turma.disciplines}</td>
            <td><button class="btn-visualizar" data-turma="${turma.name}">Visualizar Alunos</button></td>
        `;
        turmasLista.appendChild(row);
    });

    // Evento para redirecionar para a tela de visualização de alunos
    document.querySelectorAll('.btn-visualizar').forEach(button => {
        button.addEventListener('click', function() {
            const turmaName = this.getAttribute('data-turma');
            window.location.href = `visualizacao-alunos.html?turma=${turmaName}`;
        });
    });
});
