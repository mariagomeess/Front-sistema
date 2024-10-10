document.addEventListener('DOMContentLoaded', function () {
    const comunicadoForm = document.getElementById('comunicado-form');
    const comunicadoTableBody = document.getElementById('comunicados-lista');
    const formSection = document.getElementById('formulario-comunicado');
    let editandoComunicado = null; // Armazena o comunicado que está sendo editado

    // Função para adicionar comunicado à lista na tabela
    function adicionarComunicadoNaLista(comunicado) {
        const row = document.createElement('tr');
        row.setAttribute('data-id', comunicado.id); // Armazena o ID no elemento da linha

        row.innerHTML = `
            <td>${comunicado.title}</td>
            <td>${comunicado.destinatarios}</td>
            <td>${comunicado.data_emissao}</td>
            <td>
                <button class="editar-btn">Editar</button>
                <button class="excluir-btn">Excluir</button>
            </td>
        `;

        comunicadoTableBody.appendChild(row);

        // Adiciona eventos de clique para os botões de editar e excluir
        row.querySelector('.editar-btn').onclick = function () {
            editarComunicado(comunicado);
        };

        row.querySelector('.excluir-btn').onclick = function () {
            excluirComunicado(comunicado.id, row);
        };
    }

    // Função para salvar comunicado (novo ou editado)
    comunicadoForm.onsubmit = function (event) {
        event.preventDefault();

        const comunicado = {
            id: editandoComunicado ? editandoComunicado.id : Date.now().toString(), // Usa o ID existente ou gera um novo
            title: document.getElementById('titulo').value,
            destinatarios: document.getElementById('destinatarios').value,
            descricao: document.getElementById('descricao').value,
            data_emissao: document.getElementById('data').value
        };

        if (editandoComunicado) {
            // Atualiza comunicado existente
            atualizarComunicadoNaLista(comunicado);
        } else {
            // Adiciona novo comunicado
            adicionarComunicadoNaLista(comunicado);
        }

        // Fechar o formulário e limpar campos
        formSection.classList.add('hidden');
        comunicadoForm.reset();
        editandoComunicado = null; // Limpa o estado de edição
    };

    // Função para editar comunicado
    function editarComunicado(comunicado) {
        editandoComunicado = comunicado;

        // Preenche os campos do formulário com os dados do comunicado
        document.getElementById('titulo').value = comunicado.title;
        document.getElementById('destinatarios').value = comunicado.destinatarios;
        document.getElementById('descricao').value = comunicado.descricao;
        document.getElementById('data').value = comunicado.data_emissao;

        // Exibe o formulário
        formSection.classList.remove('hidden');
    }

    // Função para atualizar comunicado na lista
    function atualizarComunicadoNaLista(comunicadoAtualizado) {
        const rows = comunicadoTableBody.querySelectorAll('tr');

        rows.forEach(row => {
            if (row.getAttribute('data-id') === comunicadoAtualizado.id) {
                row.innerHTML = `
                    <td>${comunicadoAtualizado.title}</td>
                    <td>${comunicadoAtualizado.destinatarios}</td>
                    <td>${comunicadoAtualizado.data_emissao}</td>
                    <td>
                        <button class="editar-btn">Editar</button>
                        <button class="excluir-btn">Excluir</button>
                    </td>
                `;

                // Atualiza os eventos de clique nos botões de editar e excluir
                row.querySelector('.editar-btn').onclick = function () {
                    editarComunicado(comunicadoAtualizado);
                };

                row.querySelector('.excluir-btn').onclick = function () {
                    excluirComunicado(comunicadoAtualizado.id, row);
                };
            }
        });
    }

    // Função para excluir comunicado
    function excluirComunicado(id, row) {
        const confirmar = confirm('Você tem certeza que deseja excluir este comunicado?');

        if (confirmar) {
            comunicadoTableBody.removeChild(row); // Remove a linha da tabela
        }
    }

    // Mostrar formulário ao clicar no botão "Criar Novo Comunicado"
    document.getElementById('novo-comunicado-btn').onclick = function () {
        formSection.classList.remove('hidden');
        comunicadoForm.reset();
        editandoComunicado = null; // Limpa qualquer estado de edição anterior
    };

    // Cancelar e esconder o formulário
    document.getElementById('cancelar-btn').onclick = function () {
        formSection.classList.add('hidden');
        comunicadoForm.reset();
        editandoComunicado = null; // Limpa qualquer estado de edição anterior
    };
});
