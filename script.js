const winners = [
    { name: "Luki", score: 222.5 },
    { name: "Al", score: 204 },
    { name: "Jena", score: 175 }
];

const activeParticipant = {
    name: "Viol",
    score: 112
};

document.querySelector("#first-place .name").textContent = winners[0].name;
document.querySelector("#first-place .score").textContent = `Skor: ${winners[0].score}`;

document.querySelector("#second-place .name").textContent = winners[1].name;
document.querySelector("#second-place .score").textContent = `Skor: ${winners[1].score}`;

document.querySelector("#third-place .name").textContent = winners[2].name;
document.querySelector("#third-place .score").textContent = `Skor: ${winners[2].score}`;

if(document.querySelector(".active-content .name")) {
    document.querySelector(".active-content .name").textContent = activeParticipant.name;
    document.querySelector(".active-content .score").textContent = `Poin: ${activeParticipant.score}`;
}

function createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 10 + 5}px`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.top = `${Math.random() * 20 - 20}%`;
        confetti.style.opacity = Math.random();
        confetti.style.borderRadius = `${Math.random() * 10}px`;
        confetti.style.animation = `confetti ${Math.random() * 3 + 2}s linear infinite`;
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        confettiContainer.appendChild(confetti);
    }
}

window.addEventListener('load', createConfetti);
