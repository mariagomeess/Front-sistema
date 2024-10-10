document.addEventListener("DOMContentLoaded", function() {
    // Dados de exemplo para a turma
    const turmaDetalhes = {
        nome: 'Turma A',
        professor: 'Prof. João',
        horario: 'Segunda e Quarta, 10:00 - 12:00'
    };

    // Preenche os dados da turma na página
    document.getElementById('nome-turma').textContent = turmaDetalhes.nome;
    document.getElementById('professor').textContent = `Professor: ${turmaDetalhes.professor}`;
    document.getElementById('horario').textContent = `Horário de Aula: ${turmaDetalhes.horario}`;

    // Ação de voltar
    document.getElementById('voltar').addEventListener('click', function() {
        window.history.back();
    });
});
