document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const nomeDisciplina = params.get('disciplina');

    // Dados fictícios de disciplinas, que normalmente viriam do backend
    const disciplinas = {
        'Matemática': {
            professor: 'Prof. João',
            horario: 'Segunda e Quarta, 08:00 - 10:00',
            conceito: 'A',
            comunicado: 'O professor avisou sobre o prazo final para entrega de trabalhos.'
        },
        'Física': {
            professor: 'Prof. Maria',
            horario: 'Terça e Quinta, 10:00 - 12:00',
            conceito: 'B',
            comunicado: 'Atenção para a prova final no próximo mês.'
        }
        // Adicione outras disciplinas aqui conforme necessário
    };

    // Obter os detalhes da disciplina selecionada
    const disciplinaDetalhes = disciplinas[nomeDisciplina];

    // Verifica se a disciplina foi encontrada
    if (disciplinaDetalhes) {
        document.getElementById('nome-disciplina').textContent = nomeDisciplina;
        document.getElementById('professor').textContent = `Professor: ${disciplinaDetalhes.professor}`;
        document.getElementById('horario').textContent = `Horário de Aula: ${disciplinaDetalhes.horario}`;
        document.getElementById('conceito').textContent = `Conceito Obtido: ${disciplinaDetalhes.conceito}`;
        document.getElementById('comunicado').textContent = `Comunicado: ${disciplinaDetalhes.comunicado}`;
    } else {
        document.getElementById('nome-disciplina').textContent = 'Disciplina não encontrada';
    }

    // Ação de voltar
    document.getElementById('voltar').addEventListener('click', function() {
        window.history.back();
    });
});
