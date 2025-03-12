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
const keySelectBtn = document.getElementById('key-select-btn');
const keyDropdown = document.getElementById('key-dropdown');
const keyOptions = document.querySelectorAll('.key-option');
const useFlatsBtn = document.getElementById('use-flats');

// App state
let currentIndex = 0;
let fontSize = 24; // Default font size in pixels
let transposeSteps = 0; // Default transposition (no change)
let useFlats = false; // Default to using sharps

// Chord mapping for transposition
const sharpChords = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const flatChords = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];

// Initialize the app
function init() {
    displayCurrentLines();
    setupEventListeners();
    highlightSelectedKey();
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
                chordElement.textContent = transposeChord(line.chord);
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

// Transpose a chord string (may contain multiple chords)
function transposeChord(chordString) {
    if (!chordString) return '';
    
    // Split the chord string in case it contains multiple chords
    const chords = chordString.split(' ');
    
    // Transpose each chord
    const transposedChords = chords.map(chord => {
        // Handle complex chords (e.g., F#m, Cmaj7)
        const rootNote = chord.match(/^[A-G][#b]?/);
        if (!rootNote) return chord; // Not a valid chord
        
        const rootNoteStr = rootNote[0];
        const chordSuffix = chord.substring(rootNoteStr.length);
        
        // Find the index of the root note
        const chordSet = useFlats ? flatChords : sharpChords;
        let noteIndex = chordSet.findIndex(note => note === rootNoteStr);
        
        if (noteIndex === -1) {
            // Try to find equivalent in the other notation
            const altChordSet = useFlats ? sharpChords : flatChords;
            const altIndex = altChordSet.findIndex(note => note === rootNoteStr);
            if (altIndex !== -1) {
                noteIndex = altIndex;
            } else {
                return chord; // Can't transpose this chord
            }
        }
        
        // Apply transposition
        const newIndex = (noteIndex + transposeSteps + 12) % 12;
        return chordSet[newIndex] + chordSuffix;
    });
    
    return transposedChords.join(' ');
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
    
    // Key selection
    keySelectBtn.addEventListener('click', toggleKeyDropdown);
    
    // Key options
    keyOptions.forEach(option => {
        option.addEventListener('click', function() {
            const transposeValue = parseInt(this.getAttribute('data-transpose'));
            setTransposition(transposeValue);
            toggleKeyDropdown(); // Close dropdown after selection
        });
    });
    
    // Use flats toggle
    useFlatsBtn.addEventListener('click', toggleUseFlats);
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.key-selector') && keyDropdown.classList.contains('show')) {
            keyDropdown.classList.remove('show');
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Touch navigation for the lyrics container
    lyricsContainer.addEventListener('click', handleContainerClick);
}

// Toggle key selection dropdown
function toggleKeyDropdown() {
    keyDropdown.classList.toggle('show');
}

// Set transposition and update display
function setTransposition(steps) {
    transposeSteps = steps;
    highlightSelectedKey();
    displayCurrentLines();
}

// Highlight the currently selected key in the dropdown
function highlightSelectedKey() {
    keyOptions.forEach(option => {
        const optionValue = parseInt(option.getAttribute('data-transpose'));
        if (optionValue === transposeSteps) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });
    
    // Update button text
    if (transposeSteps === 0) {
        keySelectBtn.textContent = 'Select Key';
    } else {
        const sign = transposeSteps > 0 ? '+' : '';
        keySelectBtn.textContent = `Key ${sign}${transposeSteps}`;
    }
}

// Toggle between sharps and flats
function toggleUseFlats() {
    useFlats = !useFlats;
    useFlatsBtn.textContent = useFlats ? 'Use #' : 'Use ♭';
    displayCurrentLines();
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