document.addEventListener("DOMContentLoaded", function() {
    // Dados de exemplo para os conceitos
    const conceitoDetalhes = [
        { disciplina: 'Matemática', conceito: 'A', data: '10/10/2024' },
        { disciplina: 'Física', conceito: 'B', data: '12/10/2024' }
    ];

    // Preenche os dados dos conceitos
    const listaConceitos = document.getElementById('conceitos-lista');
    conceitoDetalhes.forEach(conceito => {
        const li = document.createElement('li');
        li.innerHTML = `${conceito.disciplina}: ${conceito.conceito} (Lançado em: ${conceito.data})`;
        listaConceitos.appendChild(li);
    });

    // Ação de voltar
    document.getElementById('voltar').addEventListener('click', function() {
        window.history.back();
    });
});
