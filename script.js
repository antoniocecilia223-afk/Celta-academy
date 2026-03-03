const cursos = [
    "Informática", "Arquitetura", "Inglês", "Espanhol", "Francês", 
    "Português", "Italiano", "Alemão", "Grego", "Latim", 
    "Culinária", "Geografia", "História", "Física", "Matemática"
];

const grid = document.getElementById('gridCursos');

// Gerar os cards automaticamente
cursos.forEach(curso => {
    const card = document.createElement('div');
    card.className = 'celta-card';
    card.innerHTML = `
        <div class="vagas-badge">50 VAGAS DISPONÍVEIS</div>
        <h3>${curso}</h3>
        <p>Aprenda com os melhores professores do mercado.</p>
        <button class="btn-celta" onclick="verificarAcesso()">ACESSAR GRÁTIS</button>
    `;
    grid.appendChild(card);
});

function verificarAcesso() {
    // Lógica de 1 mês grátis
    alert("Período de 1 mês grátis ativado para este curso!");
}
