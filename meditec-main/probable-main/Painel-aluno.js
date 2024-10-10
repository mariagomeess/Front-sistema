document.addEventListener("DOMContentLoaded", function() {
    const disciplinas = [
        { nome: 'Matemática', professor: 'Prof. João', status: 'Aprovado' },
        { nome: 'Física', professor: 'Prof. Maria', status: 'Reprovado' },
        { nome: 'História', professor: 'Prof. Carlos', status: 'Aprovado' }
    ];

    const disciplinasLista = document.getElementById('disciplinas-lista');

    // Populando a lista de disciplinas
    disciplinas.forEach(disciplina => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${disciplina.nome}</strong><br>
            Professor: ${disciplina.professor}<br>
            Status: ${disciplina.status} <br>
            <button class="ver-detalhes" data-nome="${disciplina.nome}">Visualizar Detalhes</button>
        `;
        disciplinasLista.appendChild(li);
    });

    // Evento para visualizar detalhes da disciplina
    document.querySelectorAll('.ver-detalhes').forEach(button => {
        button.addEventListener('click', function() {
            const nomeDisciplina = this.dataset.nome;
            // Redireciona para a página de detalhes da disciplina
            window.location.href = `detalhes-disciplina.html?disciplina=${nomeDisciplina}`;
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const conceitos = [
        { disciplina: 'Matemática', conceito: 'A', data: '2024-06-15' },
        { disciplina: 'Física', conceito: 'B', data: '2024-06-20' },
        { disciplina: 'História', conceito: 'A', data: '2024-06-18' }
    ];

    const conceitosLista = document.getElementById('conceitos-lista');

    // Populando a lista de conceitos
    conceitos.forEach(conceito => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${conceito.disciplina}</strong><br>
            Conceito: ${conceito.conceito}<br>
            Data de Lançamento: ${conceito.data}
        `;
        conceitosLista.appendChild(li);
    });

    // Visualizar Histórico
    document.getElementById('ver-historico').addEventListener('click', function() {
        window.location.href = 'historico-conceitos.html'; // Redirecionar para a página de histórico de conceitos
    });

    // Voltar
    document.getElementById('voltar-conceitos').addEventListener('click', function() {
        window.history.back();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Dados de exemplo das turmas
    const turmas = [
        { nome: 'Turma A', professor: 'Prof. João', horario: 'Segunda e Quarta, 10:00 - 12:00' },
        { nome: 'Turma B', professor: 'Prof. Maria', horario: 'Terça e Quinta, 14:00 - 16:00' }
    ];

    // Selecionando a lista onde as turmas serão adicionadas
    const turmasLista = document.getElementById('turmas-lista');

    // Iterando sobre as turmas e criando os elementos
    turmas.forEach(turma => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${turma.nome}</strong><br>
            Professor: ${turma.professor}<br>
            Horário: ${turma.horario} <br>
            <button class="ver-turma">Visualizar Detalhes</button>
        `;
        turmasLista.appendChild(li);
    });

    // Adicionando evento de clique para o botão "Visualizar Detalhes"
    document.querySelectorAll('.ver-turma').forEach(button => {
        button.addEventListener('click', function() {
            // Aqui, redirecionamos para a página de detalhes da turma
            window.location.href = 'detalhes-turma.html';
        });
    });
});

