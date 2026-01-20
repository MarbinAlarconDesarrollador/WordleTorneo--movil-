const DICTIONARY = ["PERRO", "GATOS", "TIGRE", "CEBRA", "MOSCA", "PANDA", "PULPO", "GALLO", "CISNE",
        "CERDO", "RATON", "CABRA", "BURRO", "ZORRO", "OVEJA", "KOALA", "LINCE", "RANAS",
        "ERIZO", "HIENA", "LOROS", "MONOS", "FOCAS", "PAVOS", "BAGRE", "PATOS", "GANSO",
        "BUHOS", "SAPOS", "HURON", "LEMUR", "MORSA", "ORCAS", "PUMAS", "GABON", "CONGO",
        "CHINA", "JAPON", "RUSIA", "INDIA", "PARIS", "DUBAI", "QATAR", "COREA", "NAURU",
        "KENIA", "TOKIO", "NEPAL", "SIRIA", "SUDAN", "SAMOA", "TONGA", "HAITI", "LIBIA",
        "MALTA", "YEMEN", "ARROZ", "CARNE", "POLLO", "HUEVO", "LIMON", "MANGO", "FRESA",
        "PABLO", "MARIA", "JESUS", "LAURA", "PEDRO", "DIEGO", "ELENA", "SOFIA", "LUCAS",
        "MATEO", "ANGEL", "JULIO", "ABRIL", "DARIO", "ESTER", "FELIX", "OSCAR", "RAMON",
        "RUBEN", "PAULA", "DIANA", "CLARA", "CARLA", "MARIO", "TOMAS", "JUANA", "LUCIA",
        "DAVID", "JORGE", "BRUNO", "NADIA", "IRENE", "NOEMI", "KEVIN", "CELIA", "CELIO",
        "PAOLA", "FREDY", "MARTA", "HABAS", "DONAS", "COLES", "APIOS", "MELON", "YOGUR",
        "PASTA", "QUESO", "JAMON", "TORTA", "AREPA", "TACOS", "CALDO", "PERAS", "MORAS",
        "PIZZA", "SUSHI", "PANES", "TRIGO", "PAPAS", "FIDEO", "PIÑAS", "COCOS", "CANTA",
        "KIWIS", "PASAS", "ANDAR", "CORRE", "SALTA", "JUEGA", "VUELA", "ENTRA", "SALIR",
        "BAILA", "GRITA", "SOÑAR", "TEMER", "REZAR", "ROGAR", "NADAR", "TOCAR", "REGAR",
        "ESTAR", "HABER", "TENER", "VENIR", "BEBER", "JUGAR", "DECIR", "PONER", "GUIAR",
        "ABRIR", "BOTAR", "VOTAR", "PEDIR", "CREER", "COGER", "TOMAR", "DEJAR", "ECHAR",
        "GANAR", "GIRAR", "HACER", "IDEAR", "JURAR", "LAVAR", "MORIR", "PARAR", "PASAR",
        "PEGAR", "PODER", "ROBAR", "SABER", "TRAER", "MIRAN", "DICEN", "SABEN", "COMEN",
        "LLEVA", "CRECE", "SUBIR", "BAJAR", "CALVO", "ATRAS", "ATLAS", "BLUSA", "SUDOR",
        "PAÑOS", "ABUSO", "ACTOR", "ALGAS", "ALTAR", "ANCHO", "ANIMO", "ANTES", "NIVEL",
        "ARBOL", "ASILO", "ASTRO", "AUTOS", "AVION", "AYUDA", "BAILE", "BANCO", "BARCO",
        "BARRO", "BATEA", "BINGO", "BOLSO", "BRAZO", "BRISA", "BRUJO", "BUENO", "RUMBO",
        "BURLA", "BUSCA", "CALOR", "CAMPO", "CANAL", "CANTO", "CAPAZ", "CARRO", "HUMOR",
        "CARTA", "CASAS", "CAUSA", "CERRO", "CHICO", "CIELO", "CINCO", "CLASE", "CLAVO",
        "COBRA", "COCHE", "COFRE", "COLOR", "COMER", "CORAL", "CORTE", "COSTO", "CRUEL",
        "CUEVA", "CULPA", "CURSO", "DADOS", "DARDO", "DATOS", "DEBER", "DICHA", "DIETA",
        "DISCO", "DONDE", "DORAR", "EBANO", "ENANO", "ELITE", "ERROR", "FILAS", "PESCA",
        "EXTRA", "FALSO", "FALTA", "FAROL", "FECHA", "FERIA", "FICHA", "FLACO", "FLOTA",
        "FRITO", "FUEGO", "FUERA", "FURIA", "GLOBO", "GOLPE", "GOMAS", "GORRA", "GOTAS",
        "GRADO", "GRANO", "GRITO", "GRUPO", "GUAPA", "GUAPO", "HABLA", "CALMA", "NORMA",
        "HACHA", "ARMAS", "HASTA", "HECHO", "HIELO", "HERIR", "HIJOS", "HOJAS", "HONDA",
        "HORAS", "HORNO", "HOTEL", "HUESO", "IDEAL", "IDEAS", "IGUAL", "ISLAS", "JABON",
        "JARRA", "JAULA", "JEFES", "JUEGO", "JUGOS", "JUNTO", "LABIO", "LADOS", "EXITO",
        "LAGOS", "LANZA", "LARGO", "LECHE", "LENTO", "LETRA", "LIBRE", "LIBRO", "LINDA",
        "LINDO", "LISTA", "LISTO", "LLAVE", "LLENA", "LLENO", "LLORO", "COCOA", "LOGRO",
        "LUCHA", "OTRAS", "LUEGO", "LUGAR", "LUNES", "MADRE", "MAGIA", "MANOS", "MAPAS",
        "OVULO", "MARCA", "MARCO", "MAREA", "MARTE", "MARZO", "MASAS", "MATAR", "MAYOR",
        "MEDIA", "MEDIO", "MEJOR", "MENOR", "MENOS", "MENTE", "MESAS", "METRO", "MIEDO",
        "MINAS", "MIRAR", "MISMO", "MITAD", "MOLER", "MONTE", "MOTOR", "MOVER", "SAZON",
        "MOVIL", "MUELA", "MUERE", "MUJER", "MUNDO", "MUSEO", "NACER", "NARIZ", "FELIZ",
        "NEGRO", "NIETO", "NIEVE", "NIÑOS", "NOBLE", "NOCHE", "NOTAS", "NUEVA", "NUEVO",
        "NUNCA", "OBRAS", "ORDEN", "OREJA", "OSADO", "OTROS", "OVALO", "PADRE", "PAGAR",
        "PALOS", "PANAL", "PANEL", "PAPEL", "PARDO", "PARED", "PARTE", "JOVEN", "GRATO",
        "PASTO", "PATAS", "PATIO", "PAUSA", "PECHO", "PEDAL", "PELEA", "PELOS", "GORDO",
        "PENAS", "PESAR", "PIANO", "PIEZA", "PILAR", "PINTO", "POETA", "POLVO", "BELLO",
        "SANAR", "BESAR", "POSTE", "PRIMO", "PUNTO", "QUIEN", "RADIO", "RAMAS", "CLARO",
        "RAYOS", "RAZON", "REGLA", "RELOJ", "REMAR", "RENTA", "RESTO", "ROBOT", "VOLAR",
        "ROCAS", "ROSAS", "ROMPE", "SABOR", "SACOS", "SALTO", "SALUD", "GAFAS", "FAVOR",
        "SANTO", "SECOS", "SELLO", "SERIE", "SILLA", "SOBRE", "SOCIO", "SOLAR", "SOLOS",
        "SOPLA", "SORDO", "SUAVE", "SUCIO", "SUELO", "SUEÑO", "TABLA", "TARDE", "TAREA",
        "TECHO", "TELON", "TEMOR", "TINTA", "TIPOS", "TONTO", "TORRE", "COBRE", "CIEGO",
        "TRUCO", "UNION", "USARA", "VACIO", "VAGOS", "VALOR", "VASOS", "VECES", "GRIPE",
        "VELAS", "VENTA", "VERDE", "VIAJE", "VIDAS", "VIEJO", "VUELO", "VISTA", "SUEÑA",
        "VIVIR", "ZUMOS", "BELLA", "DANZA", "USADO", "CAMAS", "PLATO", "CABLE", "OIDOS",
        "TAPAS", "VIDEO", "POBRE", "FONDO", "AVISO", "NUBES", "CLIMA", "FORMA", "PASOS",
        "PLANO", "TURNO", "RUIDO", "LUCES", "FRASE", "SONAR", "ZONAR", "DEDOS", "BANDA"];
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

// REGISTRO DEL SERVICE WORKER
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('¡App lista para instalar!'))
            .catch(err => console.log('Error de instalación', err));
    });
}