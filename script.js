// Song data - Fake Plastic Trees by Radiohead
const songData = [
    { chord: "A", lyric: "Her green plastic watering can" },
    { chord: "E", lyric: "For her fake Chinese rubber plant" },
    { chord: "F#m", lyric: "In the fake plastic earth" },
    { chord: "", lyric: "" },
    { chord: "A", lyric: "That she bought from a rubber man" },
    { chord: "E", lyric: "In a town full of rubber plans" },
    { chord: "F#m", lyric: "To get rid of itself" },
    { chord: "", lyric: "" },
    { chord: "C#m", lyric: "It wears her out" },
    { chord: "D", lyric: "It wears her out" },
    { chord: "A E", lyric: "It wears her out" },
    { chord: "", lyric: "" },
    { chord: "A", lyric: "She lives with a broken man" },
    { chord: "E", lyric: "A cracked polystyrene man" },
    { chord: "F#m", lyric: "Who just crumbles and burns" },
    { chord: "", lyric: "" },
    { chord: "A", lyric: "He used to do surgery" },
    { chord: "E", lyric: "For girls in the eighties" },
    { chord: "F#m", lyric: "But gravity always wins" },
    { chord: "", lyric: "" },
    { chord: "C#m", lyric: "It wears him out" },
    { chord: "D", lyric: "It wears him out" },
    { chord: "A E", lyric: "It wears him out" },
    { chord: "", lyric: "" },
    { chord: "F#m", lyric: "She looks like the real thing" },
    { chord: "D", lyric: "She tastes like the real thing" },
    { chord: "A", lyric: "My fake plastic love" },
    { chord: "", lyric: "" },
    { chord: "F#m", lyric: "But I can't help the feeling" },
    { chord: "D", lyric: "I could blow through the ceiling" },
    { chord: "A E", lyric: "If I just turn and run" },
    { chord: "", lyric: "" },
    { chord: "C#m", lyric: "It wears me out" },
    { chord: "D", lyric: "It wears me out" },
    { chord: "A E", lyric: "It wears me out" },
    { chord: "", lyric: "" },
    { chord: "F#m D A", lyric: "And if I could be who you wanted" },
    { chord: "F#m D A", lyric: "If I could be who you wanted" },
    { chord: "F#m D A", lyric: "All the time" },
    { chord: "E", lyric: "All the time" },
];

// DOM elements
const lyricsContainer = document.getElementById('lyrics-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const themeToggle = document.getElementById('theme-toggle');
const increaseFont = document.getElementById('increase-font');
const decreaseFont = document.getElementById('decrease-font');

// App state
let currentIndex = 0;
let fontSize = 24; // Default font size in pixels

// Initialize the app
function init() {
    displayCurrentLines();
    setupEventListeners();
}

// Display current lines (2 at a time)
function displayCurrentLines() {
    lyricsContainer.innerHTML = '';
    
    // Display two lines at a time
    for (let i = 0; i < 2; i++) {
        const lineIndex = currentIndex + i;
        
        // Check if we're still within the song data
        if (lineIndex < songData.length) {
            const line = songData[lineIndex];
            
            // Create chord line (if there is a chord)
            if (line.chord) {
                const chordElement = document.createElement('div');
                chordElement.className = 'chord-line';
                chordElement.textContent = line.chord;
                lyricsContainer.appendChild(chordElement);
            }
            
            // Create lyric line
            const lyricElement = document.createElement('div');
            lyricElement.className = 'lyric-line';
            lyricElement.textContent = line.lyric;
            lyricsContainer.appendChild(lyricElement);
        }
    }
    
    // Update button states
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= songData.length - 2;
}

// Set up event listeners
function setupEventListeners() {
    // Navigation buttons
    prevBtn.addEventListener('click', goToPreviousLines);
    nextBtn.addEventListener('click', goToNextLines);
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Font size controls
    increaseFont.addEventListener('click', increaseFontSize);
    decreaseFont.addEventListener('click', decreaseFontSize);
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Touch navigation for the lyrics container
    lyricsContainer.addEventListener('click', handleContainerClick);
}

// Navigation functions
function goToNextLines() {
    if (currentIndex < songData.length - 2) {
        currentIndex += 2;
        displayCurrentLines();
    }
}

function goToPreviousLines() {
    if (currentIndex > 0) {
        currentIndex -= 2;
        displayCurrentLines();
    }
}

// Handle keyboard navigation
function handleKeyboardNavigation(event) {
    switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
            goToNextLines();
            break;
        case 'ArrowLeft':
        case 'ArrowUp':
            goToPreviousLines();
            break;
    }
}

// Handle container click for navigation
function handleContainerClick(event) {
    // Determine if click is on the right or left side
    const clickX = event.clientX;
    const containerWidth = lyricsContainer.offsetWidth;
    
    if (clickX > containerWidth / 2) {
        goToNextLines();
    } else {
        goToPreviousLines();
    }
}

// Toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    const toggleIcon = themeToggle.querySelector('.toggle-icon');
    
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        toggleIcon.textContent = '🌙';
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        toggleIcon.textContent = '☀️';
    }
}

// Font size adjustment functions
function increaseFontSize() {
    if (fontSize < 40) {
        fontSize += 2;
        updateFontSize();
    }
}

function decreaseFontSize() {
    if (fontSize > 16) {
        fontSize -= 2;
        updateFontSize();
    }
}

function updateFontSize() {
    lyricsContainer.style.fontSize = `${fontSize}px`;
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', init); 