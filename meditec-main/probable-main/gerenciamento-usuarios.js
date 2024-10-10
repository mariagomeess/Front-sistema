document.addEventListener('DOMContentLoaded', function () {
    const usuarioForm = document.getElementById('usuario-form');
    const usuariosLista = document.getElementById('usuarios-lista');
    const formularioUsuario = document.getElementById('formulario-usuario');
    let editandoUsuario = null; // Armazena o usuário que está sendo editado

    // Função para adicionar usuário à lista na tabela
    function adicionarUsuarioNaLista(usuario) {
        const row = document.createElement('tr');
        row.setAttribute('data-id', usuario.id); // Armazena o ID no elemento da linha

        row.innerHTML = `
            <td>${usuario.nome}</td>
            <td>${usuario.tipo_usuario}</td>
            <td>${usuario.email}</td>
            <td>${usuario.status}</td>
            <td>
                <button class="editar-btn">Editar</button>
                <button class="excluir-btn">Excluir</button>
            </td>
        `;

        usuariosLista.appendChild(row);

        // Adiciona eventos de clique para os botões de editar e excluir
        row.querySelector('.editar-btn').onclick = function () {
            editarUsuario(usuario);
        };

        row.querySelector('.excluir-btn').onclick = function () {
            excluirUsuario(usuario.id, row);
        };
    }

    // Função para salvar usuário (novo ou editado)
    usuarioForm.onsubmit = function (event) {
        event.preventDefault();

        const usuario = {
            id: editandoUsuario ? editandoUsuario.id : Date.now().toString(), // Usa o ID existente ou gera um novo
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            senha: document.getElementById('senha').value,
            tipo_usuario: document.getElementById('tipo-usuario').value,
            status: document.getElementById('status').value,
        };

        if (editandoUsuario) {
            // Atualiza usuário existente
            atualizarUsuarioNaLista(usuario);
        } else {
            // Adiciona novo usuário
            adicionarUsuarioNaLista(usuario);
        }

        // Fechar o formulário e limpar campos
        formularioUsuario.classList.add('hidden');
        usuarioForm.reset();
        editandoUsuario = null; // Limpa o estado de edição
    };

    // Função para editar usuário
    function editarUsuario(usuario) {
        editandoUsuario = usuario;

        // Preenche os campos do formulário com os dados do usuário
        document.getElementById('nome').value = usuario.nome;
        document.getElementById('email').value = usuario.email;
        document.getElementById('senha').value = usuario.senha;
        document.getElementById('tipo-usuario').value = usuario.tipo_usuario;
        document.getElementById('status').value = usuario.status;

        // Exibe o formulário
        formularioUsuario.classList.remove('hidden');
    }

    // Função para atualizar usuário na lista
    function atualizarUsuarioNaLista(usuarioAtualizado) {
        const rows = usuariosLista.querySelectorAll('tr');

        rows.forEach(row => {
            if (row.getAttribute('data-id') === usuarioAtualizado.id) {
                row.innerHTML = `
                    <td>${usuarioAtualizado.nome}</td>
                    <td>${usuarioAtualizado.tipo_usuario}</td>
                    <td>${usuarioAtualizado.email}</td>
                    <td>${usuarioAtualizado.status}</td>
                    <td>
                        <button class="editar-btn">Editar</button>
                        <button class="excluir-btn">Excluir</button>
                    </td>
                `;

                // Atualiza os eventos de clique nos botões de editar e excluir
                row.querySelector('.editar-btn').onclick = function () {
                    editarUsuario(usuarioAtualizado);
                };

                row.querySelector('.excluir-btn').onclick = function () {
                    excluirUsuario(usuarioAtualizado.id, row);
                };
            }
        });
    }

    // Função para excluir usuário
    function excluirUsuario(id, row) {
        const confirmar = confirm('Você tem certeza que deseja excluir este usuário?');

        if (confirmar) {
            usuariosLista.removeChild(row); // Remove a linha da tabela
        }
    }

    // Mostrar formulário ao clicar no botão "Criar Novo Usuário"
    document.getElementById('novo-usuario-btn').onclick = function () {
        formularioUsuario.classList.remove('hidden');
        usuarioForm.reset();
        editandoUsuario = null; // Limpa qualquer estado de edição anterior
    };

    // Cancelar e esconder o formulário
    document.getElementById('cancelar-btn').onclick = function () {
        formularioUsuario.classList.add('hidden');
        usuarioForm.reset();
        editandoUsuario = null; // Limpa qualquer estado de edição anterior
    };
});


