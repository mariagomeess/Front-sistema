document.addEventListener("DOMContentLoaded", function() {
    // Dados de exemplo para o comunicado
    const comunicadoDetalhes = {
        titulo: 'Entrega de Trabalhos',
        conteudo: 'Não se esqueçam da entrega até sexta-feira.'
    };

    // Preenche os dados do comunicado
    document.getElementById('comunicado-conteudo').textContent = comunicadoDetalhes.conteudo;

    // Ação de voltar
    document.getElementById('voltar').addEventListener('click', function() {
        window.history.back();
    });
});
