/* ==========================================
   1. BASE DE DATOS Y ESTADO INICIAL
   ========================================== */
// Diccionario de palabras permitidas (todas de 5 letras)
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
        "PLANO", "TURNO", "RUIDO", "LUCES", "FRASE", "SONAR", "ZONAR", "DEDOS", "BANDA"]; // (Lista truncada para legibilidad)

let targetWord = "";      // La palabra que el jugador debe adivinar
let currentGuess = "";    // Lo que el jugador está escribiendo actualmente
let attempts = [];        // Lista de intentos ya realizados
let isGameOver = false;   // Bloquea el juego cuando termina
let letterStates = {};    // Guarda el color de cada letra para el teclado (gris, amarillo, verde)

// Estadísticas cargadas desde el almacenamiento local del navegador (LocalStorage)
let stats = {
    streak: parseInt(localStorage.getItem('w_streak')) || 0, // Racha de victorias
    score: parseInt(localStorage.getItem('w_score')) || 0    // Puntaje total
};

/* ==========================================
   2. SISTEMA DE AUDIO
   ========================================== */
// Carga de efectos de sonido desde URLs externas
const sounds = {
    key: new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'),   // Clic tecla
    flip: new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'),  // Animación celda
    win: new Audio('https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3'),   // Victoria
    error: new Audio('https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3')  // Palabra inválida/corta
};
// Ajuste de volumen global
Object.values(sounds).forEach(s => s.volume = 0.2);

/* ==========================================
   3. INICIALIZACIÓN Y DIBUJO
   ========================================== */

/**
 * Prepara un nuevo juego: elige palabra, limpia variables y dibuja la interfaz.
 */
function initGame() {
    document.getElementById('modal').classList.add('hidden'); // Ocultar mensaje de fin
    isGameOver = false;
    currentGuess = "";
    attempts = [];
    letterStates = {};
    // Elección aleatoria de la palabra del diccionario
    targetWord = DICTIONARY[Math.floor(Math.random() * DICTIONARY.length)].toUpperCase();
    
    updateHeaderStats(); // Actualizar marcadores arriba
    setupKeyboard();     // Crear teclado táctil
    drawGrid();          // Dibujar las 30 celdas vacías
}

/**
 * Crea los botones del teclado en pantalla divididos por filas.
 */
function setupKeyboard() {
    const rows = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"],
        ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DEL"]
    ];

    rows.forEach((row, i) => {
        const rowEl = document.getElementById(`row${i + 1}`);
        rowEl.innerHTML = ""; // Limpiar fila
        row.forEach(key => {
            const btn = document.createElement('button');
            btn.innerText = key;
            btn.className = 'key' + (key.length > 1 ? ' wide' : ''); // Botones anchos para ENTER/DEL
            btn.id = `key-${key}`;
            // Prevenir pérdida de foco al hacer clic
            btn.onclick = (e) => { e.preventDefault(); handleInput(key); btn.blur(); };
            rowEl.appendChild(btn);
        });
    });
}

/**
 * Dibuja la cuadrícula 6x5.
 * Representa intentos pasados (con color), intento actual (escribiendo) y celdas vacías.
 */
function drawGrid() {
    const gridEl = document.getElementById('grid');
    gridEl.innerHTML = ""; // Limpiar para redibujar
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            
            if (i < attempts.length) {
                // Filas ya enviadas (muestran letras y colores definitivos)
                cell.innerText = attempts[i][j];
                cell.classList.add(getLetterStatus(attempts[i][j], j));
            } else if (i === attempts.length) {
                // Fila que el usuario está escribiendo ahora
                cell.innerText = currentGuess[j] || "";
                if (currentGuess[j]) cell.classList.add('pop'); // Efecto visual al escribir
            }
            gridEl.appendChild(cell);
        }
    }
}

/* ==========================================
   4. LÓGICA DE JUEGO (Entrada y Validación)
   ========================================== */

/**
 * Determina si una letra es correcta (verde), presente (amarillo) o ausente (gris).
 */
function getLetterStatus(char, index) {
    if (targetWord[index] === char) return "correct";   // Misma posición
    if (targetWord.includes(char)) return "present";   // Existe pero en otro lado
    return "absent";                                    // No existe en la palabra
}

/**
 * Gestiona la entrada de texto del teclado físico o virtual.
 */
function handleInput(key) {
    if (isGameOver) return;
    
    if (key === "ENTER") {
        submitGuess();
    } else if (key === "DEL" || key === "BACKSPACE") {
        currentGuess = currentGuess.slice(0, -1); // Borrar última letra
        sounds.key.play().catch(()=>{});
        drawGrid();
    } else if (currentGuess.length < 5 && /^[A-ZÑ]$/.test(key.toUpperCase())) {
        currentGuess += key.toUpperCase(); // Añadir letra
        sounds.key.play().catch(()=>{});
        drawGrid();
        if (navigator.vibrate) navigator.vibrate(10); // Feedback háptico
    }
}

/**
 * Procesa el intento enviado (clic en ENTER).
 * Incluye la animación de "flip" (volteo) celda por celda.
 */
async function submitGuess() {
    if (currentGuess.length < 5) {
        // Error: Palabra demasiado corta
        document.getElementById('grid').classList.add('shake'); // Animación de error
        sounds.error.play().catch(()=>{});
        setTimeout(() => document.getElementById('grid').classList.remove('shake'), 400);
        return;
    }

    const startIdx = attempts.length * 5;
    const cells = document.querySelectorAll('.cell');
    const guess = currentGuess;
    isGameOver = true; // Bloqueo temporal durante la animación

    // Animación de revelado una por una
    for (let i = 0; i < 5; i++) {
        const cell = cells[startIdx + i];
        cell.classList.add('flip');
        sounds.flip.play().catch(()=>{});
        
        await new Promise(r => setTimeout(r, 250)); // Esperar a la mitad del giro
        
        const status = getLetterStatus(guess[i], i);
        cell.classList.add(status); // Cambiar color según estado
        updateLetterState(guess[i], status); // Actualizar memoria de letras para el teclado
        
        await new Promise(r => setTimeout(r, 200)); // Esperar fin del giro
    }

    attempts.push(guess);
    updateKeyboardUI(); // Pintar el teclado con los colores revelados
    currentGuess = "";
    isGameOver = false;

    // Verificar condiciones de fin
    if (guess === targetWord) handleGameEnd(true); // Gana
    else if (attempts.length === 6) handleGameEnd(false); // Pierde (agota intentos)
}

/* ==========================================
   5. INTERFAZ DE USUARIO Y FINALIZACIÓN
   ========================================== */

/**
 * Actualiza el estado de las letras para el teclado, priorizando el mejor estado.
 * Ejemplo: Si una letra ya era "correcta", no puede pasar a ser solo "presente".
 */
function updateLetterState(char, status) {
    if (!letterStates[char] || status === "correct" || (status === "present" && letterStates[char] !== "correct")) {
        letterStates[char] = status;
    }
}

/**
 * Pinta las teclas del teclado físico/visual según los resultados.
 */
function updateKeyboardUI() {
    for (const char in letterStates) {
        const btn = document.getElementById(`key-${char}`);
        if (btn) {
            btn.style.backgroundColor = `var(--${letterStates[char]})`; // Usa variables CSS (--correct, etc)
            btn.style.color = "white";
        }
    }
}

/**
 * Gestiona el fin del juego, guarda estadísticas y muestra el modal de resultados.
 */
function handleGameEnd(win) {
    isGameOver = true;
    const modal = document.getElementById('modal');
    if (win) {
        // Cálculo de puntos: más puntos si se adivinó en pocos intentos
        const pts = (7 - attempts.length) * 100;
        stats.score += pts;
        stats.streak++;
        sounds.win.play().catch(()=>{});
        // Efecto de confeti (requiere librería externa canvas-confetti)
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        document.getElementById('modal-title').innerText = "¡SENSACIONAL!";
        document.getElementById('modal-points').innerText = `+${pts}`;
    } else {
        stats.streak = 0; // Resetear racha
        document.getElementById('modal-title').innerText = "¡PERDISTE!";
        document.getElementById('modal-points').innerText = "+0";
    }
    
    // Guardar permanentemente en el navegador
    localStorage.setItem('w_streak', stats.streak);
    localStorage.setItem('w_score', stats.score);
    
    document.getElementById('modal-message').innerHTML = `La palabra era: <b>${targetWord}</b>`;
    document.getElementById('modal-streak').innerText = stats.streak;
    updateHeaderStats();
    setTimeout(() => modal.classList.remove('hidden'), 1000); // Mostrar modal tras un retraso
}

/* ==========================================
   6. FUNCIONES ADICIONALES (Tema, Compartir, PWA)
   ========================================== */

// Cambia entre modo claro y oscuro
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Genera un texto con cuadritos de colores para compartir en WhatsApp/Redes
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
    
    // Si el dispositivo soporta compartir nativamente (móviles)
    if (navigator.share) navigator.share({ text });
    else { 
        // Si no, copiar al portapapeles
        navigator.clipboard.writeText(text); 
        alert("¡Copiado! 📋"); 
    }
}

function updateHeaderStats() {
    document.getElementById('score-display').innerText = stats.score;
    document.getElementById('streak-display').innerText = stats.streak;
}

// Control del tutorial (primera vez)
function openTutorial() { document.getElementById('tutorial').classList.remove('hidden'); }
function closeTutorial() { document.getElementById('tutorial').classList.add('hidden'); localStorage.setItem('visto', 'true'); }

// Carga inicial al abrir la ventana
window.onload = () => {
    // Aplicar tema guardado
    if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-mode');
    // Mostrar tutorial si nunca se ha visto
    if (!localStorage.getItem('visto')) openTutorial();
    initGame();
};

/* ==========================================
   7. SERVICE WORKER (Para funcionamiento Offline/PWA)
   ========================================== */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('¡App lista para instalar!'))
            .catch(err => console.log('Error de instalación', err));
    });
}