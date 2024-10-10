document.addEventListener("DOMContentLoaded", () => {
    const listaItens = document.getElementById('listaItens');
    const formEditar = document.getElementById('formEditar');
    const editForm = document.getElementById('editForm');
    const cancelarEdicao = document.getElementById('cancelarEdicao');
    const btnAdicionarTurma = document.getElementById('adicionarTurma');
    const addForm = document.getElementById('addForm');
    const formAdicionar = document.getElementById('formAdicionar');
    const cancelarAdicao = document.getElementById('cancelarAdicao');

    let turmaEditando = null; // Variável para rastrear qual turma está sendo editada

    // Simulação de dados de turmas
    const turmas = [
        {
            nomeTurma: 'Turma A',
            disciplina: 'Matemática',
            professor: 'Prof. João Silva',
            numAlunos: 30
        },
        {
            nomeTurma: 'Turma B',
            disciplina: 'Física',
            professor: 'Prof. Ana Souza',
            numAlunos: 25
        }
    ];

    // Função para carregar a tabela com as turmas
    function carregarTurmas() {
        listaItens.innerHTML = ''; // Limpa a tabela antes de carregar as turmas
        turmas.forEach((turma, index) => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${turma.nomeTurma}</td>
                <td>${turma.disciplina}</td>
                <td>${turma.professor}</td>
                <td>${turma.numAlunos}</td>
                <td>
                    <button class="btn" data-index="${index}" data-action="editar">Editar</button>
                    <button class="btn" data-index="${index}" data-action="excluir">Excluir</button>
                </td>
            `;
            listaItens.appendChild(row);
        });
    }

    // Função para exibir o formulário de edição
    function editarTurma(index) {
        turmaEditando = index;
        const turma = turmas[index];

        document.getElementById('nomeTurma').value = turma.nomeTurma;
        document.getElementById('disciplina').value = turma.disciplina;
        document.getElementById('professor').value = turma.professor;
        document.getElementById('numAlunos').value = turma.numAlunos;

        editForm.style.display = 'block'; // Exibe o formulário de edição
    }

    // Função para excluir uma turma
    function excluirTurma(index) {
        const confirmacao = confirm("Tem certeza que deseja excluir esta turma?");
        if (confirmacao) {
            turmas.splice(index, 1); // Remove do array
            carregarTurmas(); // Recarrega a tabela
        }
    }

    // Evento para salvar as alterações de edição
    formEditar.addEventListener('submit', (e) => {
        e.preventDefault();

        // Atualiza a turma que está sendo editada
        turmas[turmaEditando] = {
            nomeTurma: document.getElementById('nomeTurma').value,
            disciplina: document.getElementById('disciplina').value,
            professor: document.getElementById('professor').value,
            numAlunos: parseInt(document.getElementById('numAlunos').value)
        };

        carregarTurmas(); // Recarrega a tabela com os dados atualizados
        editForm.style.display = 'none'; // Oculta o formulário de edição
    });

    // Evento para cancelar a edição
    cancelarEdicao.addEventListener('click', () => {
        editForm.style.display = 'none'; // Oculta o formulário de edição
    });

    // Exibe o formulário de adição quando o botão "Adicionar Nova Turma" é clicado
    btnAdicionarTurma.addEventListener('click', () => {
        addForm.style.display = 'block'; // Exibe o formulário de adição
    });

    // Evento para cancelar a adição
    cancelarAdicao.addEventListener('click', () => {
        addForm.style.display = 'none'; // Oculta o formulário de adição
    });

    // Evento para adicionar uma nova turma
    formAdicionar.addEventListener('submit', (e) => {
        e.preventDefault();

        // Cria um novo objeto de turma com os dados do formulário
        const novaTurma = {
            nomeTurma: document.getElementById('novoNomeTurma').value,
            disciplina: document.getElementById('novaDisciplina').value,
            professor: document.getElementById('novoProfessor').value,
            numAlunos: parseInt(document.getElementById('novoNumAlunos').value)
        };

        // Adiciona a nova turma ao array de turmas
        turmas.push(novaTurma);

        // Recarrega a tabela com a nova turma adicionada
        carregarTurmas();

        // Oculta o formulário de adição
        addForm.style.display = 'none';

        // Limpa os campos do formulário após a adição
        formAdicionar.reset();
    });

    // Delegação de eventos para capturar os cliques em Editar e Excluir
    listaItens.addEventListener('click', (e) => {
        const index = e.target.dataset.index;
        const action = e.target.dataset.action;

        if (action === 'editar') {
            editarTurma(index); // Chama a função para editar a turma
        } else if (action === 'excluir') {
            excluirTurma(index); // Chama a função para excluir a turma
        }
    });

    // Carregar turmas ao iniciar a página
    carregarTurmas();
});