const DICTIONARY = ["PERRO", "GATOS", "TIGRE", "CEBRA", "PANDA", "PULPO", "QUESO", "PLANO", "LUCES", "VALLE", "BARCO", "CIELO", "PLAYA", "FRUTA", "LIBRO", "NOCHE", "PIANO"];
let targetWord = "";
let currentGuess = "";
let attempts = [];
let isGameOver = false;
let letterStates = {};

let stats = {
    streak: parseInt(localStorage.getItem('w_streak')) || 0,
    score: parseInt(localStorage.getItem('w_score')) || 0
};

const sounds = {
    key: new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'),
    flip: new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'),
    win: new Audio('https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3'),
    error: new Audio('https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3')
};
Object.values(sounds).forEach(s => s.volume = 0.2);

function initGame() {
    document.getElementById('modal').classList.add('hidden');
    isGameOver = false;
    currentGuess = "";
    attempts = [];
    letterStates = {};
    targetWord = DICTIONARY[Math.floor(Math.random() * DICTIONARY.length)].toUpperCase();
    
    updateHeaderStats();
    setupKeyboard();
    drawGrid();
}

// TECLADO CORREGIDO (Array explícito)
function setupKeyboard() {
    const rows = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"],
        ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DEL"]
    ];

    rows.forEach((row, i) => {
        const rowEl = document.getElementById(`row${i + 1}`);
        rowEl.innerHTML = "";
        row.forEach(key => {
            const btn = document.createElement('button');
            btn.innerText = key;
            btn.className = 'key' + (key.length > 1 ? ' wide' : '');
            btn.id = `key-${key}`;
            btn.onclick = (e) => { e.preventDefault(); handleInput(key); btn.blur(); };
            rowEl.appendChild(btn);
        });
    });
}

function drawGrid() {
    const gridEl = document.getElementById('grid');
    gridEl.innerHTML = "";
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            if (i < attempts.length) {
                cell.innerText = attempts[i][j];
                cell.classList.add(getLetterStatus(attempts[i][j], j));
            } else if (i === attempts.length) {
                cell.innerText = currentGuess[j] || "";
                if (currentGuess[j]) cell.classList.add('pop');
            }
            gridEl.appendChild(cell);
        }
    }
}

function getLetterStatus(char, index) {
    if (targetWord[index] === char) return "correct";
    if (targetWord.includes(char)) return "present";
    return "absent";
}

function handleInput(key) {
    if (isGameOver) return;
    if (key === "ENTER") {
        submitGuess();
    } else if (key === "DEL" || key === "BACKSPACE") {
        currentGuess = currentGuess.slice(0, -1);
        sounds.key.play().catch(()=>{});
        drawGrid();
    } else if (currentGuess.length < 5 && /^[A-ZÑ]$/.test(key.toUpperCase())) {
        currentGuess += key.toUpperCase();
        sounds.key.play().catch(()=>{});
        drawGrid();
        if (navigator.vibrate) navigator.vibrate(10);
    }
}

async function submitGuess() {
    if (currentGuess.length < 5) {
        document.getElementById('grid').classList.add('shake');
        sounds.error.play().catch(()=>{});
        setTimeout(() => document.getElementById('grid').classList.remove('shake'), 400);
        return;
    }

    const startIdx = attempts.length * 5;
    const cells = document.querySelectorAll('.cell');
    const guess = currentGuess;
    isGameOver = true;

    for (let i = 0; i < 5; i++) {
        const cell = cells[startIdx + i];
        cell.classList.add('flip');
        sounds.flip.play().catch(()=>{});
        await new Promise(r => setTimeout(r, 250));
        const status = getLetterStatus(guess[i], i);
        cell.classList.add(status);
        updateLetterState(guess[i], status);
        await new Promise(r => setTimeout(r, 200));
    }

    attempts.push(guess);
    updateKeyboardUI();
    currentGuess = "";
    isGameOver = false;

    if (guess === targetWord) handleGameEnd(true);
    else if (attempts.length === 6) handleGameEnd(false);
}

function updateLetterState(char, status) {
    if (!letterStates[char] || status === "correct" || (status === "present" && letterStates[char] !== "correct")) {
        letterStates[char] = status;
    }
}

function updateKeyboardUI() {
    for (const char in letterStates) {
        const btn = document.getElementById(`key-${char}`);
        if (btn) {
            btn.style.backgroundColor = `var(--${letterStates[char]})`;
            btn.style.color = "white";
        }
    }
}

function handleGameEnd(win) {
    isGameOver = true;
    const modal = document.getElementById('modal');
    if (win) {
        const pts = (7 - attempts.length) * 100;
        stats.score += pts;
        stats.streak++;
        sounds.win.play().catch(()=>{});
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        document.getElementById('modal-title').innerText = "¡SENSACIONAL!";
        document.getElementById('modal-points').innerText = `+${pts}`;
    } else {
        stats.streak = 0;
        document.getElementById('modal-title').innerText = "¡PERDISTE!";
        document.getElementById('modal-points').innerText = "+0";
    }
    
    localStorage.setItem('w_streak', stats.streak);
    localStorage.setItem('w_score', stats.score);
    document.getElementById('modal-message').innerHTML = `La palabra era: <b>${targetWord}</b>`;
    document.getElementById('modal-streak').innerText = stats.streak;
    updateHeaderStats();
    setTimeout(() => modal.classList.remove('hidden'), 1000);
}

// TEMA OSCURO MANUAL
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function shareResults() {
    const url = "https://marbinalarcondesarrollador.github.io/WordleTorneo--movil-/"; 
    let text = `Wordle Pro 🏆\nPuntos: ${stats.score} | Racha: ${stats.streak}\n\n`;
    attempts.forEach(a => {
        for(let i=0; i<5; i++) {
            const s = getLetterStatus(a[i], i);
            text += s==="correct" ? "🟩" : s==="present" ? "🟨" : "⬛";
        }
        text += "\n";
    });
    text += `\nJuega aquí: ${url}`;
    if (navigator.share) navigator.share({ text });
    else { navigator.clipboard.writeText(text); alert("¡Copiado! 📋"); }
}

function updateHeaderStats() {
    document.getElementById('score-display').innerText = stats.score;
    document.getElementById('streak-display').innerText = stats.streak;
}

function openTutorial() { document.getElementById('tutorial').classList.remove('hidden'); }
function closeTutorial() { document.getElementById('tutorial').classList.add('hidden'); localStorage.setItem('visto', 'true'); }

window.onload = () => {
    if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-mode');
    if (!localStorage.getItem('visto')) openTutorial();
    initGame();
};