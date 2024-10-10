document.addEventListener("DOMContentLoaded", function() {
    const disciplinas = ['Matemática', 'Física', 'História'];
    const turmas = ['Turma 1', 'Turma 2', 'Turma 3'];
    const alunos = [
        { nome: 'João Silva', conceito: '', status: 'Pendente' },
        { nome: 'Maria Souza', conceito: '', status: 'Pendente' },
        { nome: 'Carlos Pereira', conceito: '', status: 'Pendente' }
    ];

    const disciplinaSelect = document.getElementById('disciplina');
    const turmaSelect = document.getElementById('turma');
    const tabelaConceitos = document.getElementById('tabela-conceitos').querySelector('tbody');

    // Populando disciplinas
    disciplinas.forEach(disciplina => {
        const option = document.createElement('option');
        option.value = disciplina;
        option.textContent = disciplina;
        disciplinaSelect.appendChild(option);
    });

    // Populando turmas
    turmas.forEach(turma => {
        const option = document.createElement('option');
        option.value = turma;
        option.textContent = turma;
        turmaSelect.appendChild(option);
    });

    // Evento para Selecionar Disciplina e mostrar a tela de lançamento de conceitos
    document.getElementById('btn-selecionar-disciplina').addEventListener('click', function() {
        document.getElementById('selecao-disciplina').style.display = 'none';
        document.getElementById('lancamento-conceitos').style.display = 'block';

        // Populando tabela de conceitos
        tabelaConceitos.innerHTML = ''; // Limpando antes de adicionar
        alunos.forEach(aluno => {
            const row = document.createElement('tr');

            const nomeCell = document.createElement('td');
            nomeCell.textContent = aluno.nome;
            row.appendChild(nomeCell);

            const conceitoCell = document.createElement('td');
            const conceitoInput = document.createElement('input');
            conceitoInput.type = 'text';
            conceitoInput.value = aluno.conceito;
            conceitoCell.appendChild(conceitoInput);
            row.appendChild(conceitoCell);

            const statusCell = document.createElement('td');
            statusCell.textContent = aluno.status;
            row.appendChild(statusCell);

            const acoesCell = document.createElement('td');
            const btnLancar = document.createElement('button');
            btnLancar.textContent = 'Lançar';
            btnLancar.addEventListener('click', function() {
                aluno.conceito = conceitoInput.value;
                aluno.status = 'Lançado';
                statusCell.textContent = 'Lançado';
            });
            acoesCell.appendChild(btnLancar);
            row.appendChild(acoesCell);

            tabelaConceitos.appendChild(row);
        });
    });

    // Evento para voltar à seleção de disciplina
    document.getElementById('btn-voltar-conceitos').addEventListener('click', function() {
        document.getElementById('lancamento-conceitos').style.display = 'none';
        document.getElementById('selecao-disciplina').style.display = 'block';
    });

    // Evento para voltar à página anterior
    document.getElementById('btn-voltar-disciplina').addEventListener('click', function() {
        window.history.back();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const disciplinas = ['Matemática', 'Física', 'História'];
    const turmas = ['Turma 1', 'Turma 2', 'Turma 3'];
    const alunos = [
        { nome: 'João Silva', conceito: '', status: 'Pendente' },
        { nome: 'Maria Souza', conceito: '', status: 'Pendente' },
        { nome: 'Carlos Pereira', conceito: '', status: 'Pendente' }
    ];

    const disciplinaSelect = document.getElementById('disciplina');
    const turmaSelect = document.getElementById('turma');
    const tabelaConceitos = document.getElementById('tabela-conceitos').querySelector('tbody');

    // Populando disciplinas
    disciplinas.forEach(disciplina => {
        const option = document.createElement('option');
        option.value = disciplina;
        option.textContent = disciplina;
        disciplinaSelect.appendChild(option);
    });

    // Populando turmas
    turmas.forEach(turma => {
        const option = document.createElement('option');
        option.value = turma;
        option.textContent = turma;
        turmaSelect.appendChild(option);
    });

    // Evento para Selecionar Disciplina e mostrar a tela de lançamento de conceitos
    document.getElementById('btn-selecionar-disciplina').addEventListener('click', function() {
        document.getElementById('selecao-disciplina').style.display = 'none';
        document.getElementById('lancamento-conceitos').style.display = 'block';

        // Populando tabela de conceitos
        tabelaConceitos.innerHTML = ''; // Limpando antes de adicionar
        alunos.forEach(aluno => {
            const row = document.createElement('tr');

            const nomeCell = document.createElement('td');
            nomeCell.textContent = aluno.nome;
            row.appendChild(nomeCell);

            const conceitoCell = document.createElement('td');
            const conceitoInput = document.createElement('input');
            conceitoInput.type = 'text';
            conceitoInput.value = aluno.conceito;
            conceitoCell.appendChild(conceitoInput);
            row.appendChild(conceitoCell);

            const statusCell = document.createElement('td');
            statusCell.textContent = aluno.status;
            row.appendChild(statusCell);

            const acoesCell = document.createElement('td');
            const btnLancar = document.createElement('button');
            btnLancar.textContent = 'Lançar';
            btnLancar.addEventListener('click', function() {
                // Simulando lançamento de conceito
                aluno.conceito = conceitoInput.value;

                if (aluno.conceito.trim() !== '') {
                    aluno.status = 'Lançado';
                    statusCell.textContent = 'Lançado';
                    conceitoInput.disabled = true; // Desabilita a edição após lançar
                    btnLancar.disabled = true; // Desabilita o botão de lançamento após lançado
                    alert(`Conceito lançado para ${aluno.nome}: ${aluno.conceito}`);
                } else {
                    alert('Por favor, insira um conceito válido.');
                }
            });
            acoesCell.appendChild(btnLancar);
            row.appendChild(acoesCell);

            tabelaConceitos.appendChild(row);
        });
    });

    // Evento para voltar à seleção de disciplina
    document.getElementById('btn-voltar-conceitos').addEventListener('click', function() {
        document.getElementById('lancamento-conceitos').style.display = 'none';
        document.getElementById('selecao-disciplina').style.display = 'block';
    });

    // Evento para voltar à página anterior
    document.getElementById('btn-voltar-disciplina').addEventListener('click', function() {
        window.history.back();
    });
});
