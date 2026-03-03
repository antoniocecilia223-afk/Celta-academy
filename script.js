const cursos = [
    { nome: "Física Quântica", vagasProf: 5, profAtual: "Dr. Silva" },
    { nome: "Decoração", vagasProf: 12, profAtual: "Ana Designer" },
    { nome: "Informática", vagasProf: 2, profAtual: "Eng. Celta" },
    { nome: "Arquitetura", vagasProf: 8, profAtual: "Arq. Almeida" },
    { nome: "Física", vagasProf: 15, profAtual: "Celta IA" },
    { nome: "Latim", vagasProf: 20, profAtual: "Prof. Marcus" },
    // Adicione os outros 11 aqui...
];

const grid = document.getElementById('gridCursos');

cursos.forEach(c => {
    grid.innerHTML += `
        <div class="celta-card">
            <div class="vagas-badge" style="background: #005fcc;">${c.vagasProf} VAGAS P/ PROFESSORES</div>
            <h3>${c.nome}</h3>
            <p>Mestre atual: ${c.profAtual}</p>
            <p style="font-size: 11px; color: #888;">Alunos matriculados: +1.000</p>
            <button class="btn-celta" onclick="iniciarAulaIA('${c.nome}')">ASSISTIR AULA IA</button>
            <br>
            <button class="btn-secundario" onclick="window.location.href='professor.html'">QUERO ENSINAR</button>
        </div>`;
});

// Mantém a função iniciarAulaIA que usa sua Key da Hugging Face...
