// Song data - Fake Plastic Trees by Radiohead with chord positions
const songData = [
    { 
        chords: [{ text: "A", position: 0 }],
        lyric: "Her green plastic watering can" 
    },
    { 
        chords: [{ text: "E", position: 0 }],
        lyric: "For her fake Chinese rubber plant" 
    },
    { 
        chords: [{ text: "F#m", position: 0 }],
        lyric: "In the fake plastic earth" 
    },
    { lyric: "" },
    { 
        chords: [{ text: "A", position: 0 }],
        lyric: "That she bought from a rubber man" 
    },
    { 
        chords: [{ text: "E", position: 0 }],
        lyric: "In a town full of rubber plans" 
    },
    { 
        chords: [{ text: "F#m", position: 0 }],
        lyric: "To get rid of itself" 
    },
    { lyric: "" },
    { 
        chords: [{ text: "C#m", position: 0 }],
        lyric: "It wears her out" 
    },
    { 
        chords: [{ text: "D", position: 0 }],
        lyric: "It wears her out" 
    },
    { 
        chords: [{ text: "A", position: 0 }, { text: "E", position: 10 }],
        lyric: "It wears her out" 
    },
    { lyric: "" },
    { 
        chords: [{ text: "A", position: 0 }],
        lyric: "She lives with a broken man" 
    },
    { 
        chords: [{ text: "E", position: 0 }],
        lyric: "A cracked polystyrene man" 
    },
    { 
        chords: [{ text: "F#m", position: 0 }],
        lyric: "Who just crumbles and burns" 
    },
    { lyric: "" },
    { 
        chords: [{ text: "A", position: 0 }],
        lyric: "He used to do surgery" 
    },
    { 
        chords: [{ text: "E", position: 0 }],
        lyric: "For girls in the eighties" 
    },
    { 
        chords: [{ text: "F#m", position: 0 }],
        lyric: "But gravity always wins" 
    },
    { lyric: "" },
    { 
        chords: [{ text: "C#m", position: 0 }],
        lyric: "It wears him out" 
    },
    { 
        chords: [{ text: "D", position: 0 }],
        lyric: "It wears him out" 
    },
    { 
        chords: [{ text: "A", position: 0 }, { text: "E", position: 10 }],
        lyric: "It wears him out" 
    },
    { lyric: "" },
    { 
        chords: [{ text: "F#m", position: 0 }],
        lyric: "She looks like the real thing" 
    },
    { 
        chords: [{ text: "D", position: 0 }],
        lyric: "She tastes like the real thing" 
    },
    { 
        chords: [{ text: "A", position: 0 }],
        lyric: "My fake plastic love" 
    },
    { lyric: "" },
    { 
        chords: [{ text: "F#m", position: 0 }],
        lyric: "But I can't help the feeling" 
    },
    { 
        chords: [{ text: "D", position: 0 }],
        lyric: "I could blow through the ceiling" 
    },
    { 
        chords: [{ text: "A", position: 0 }, { text: "E", position: 15 }],
        lyric: "If I just turn and run" 
    },
    { lyric: "" },
    { 
        chords: [{ text: "C#m", position: 0 }],
        lyric: "It wears me out" 
    },
    { 
        chords: [{ text: "D", position: 0 }],
        lyric: "It wears me out" 
    },
    { 
        chords: [{ text: "A", position: 0 }, { text: "E", position: 10 }],
        lyric: "It wears me out" 
    },
    { lyric: "" },
    { 
        chords: [{ text: "F#m", position: 0 }, { text: "D", position: 15 }, { text: "A", position: 25 }],
        lyric: "And if I could be who you wanted" 
    },
    { 
        chords: [{ text: "F#m", position: 0 }, { text: "D", position: 15 }, { text: "A", position: 25 }],
        lyric: "If I could be who you wanted" 
    },
    { 
        chords: [{ text: "F#m", position: 0 }, { text: "D", position: 10 }, { text: "A", position: 15 }],
        lyric: "All the time" 
    },
    { 
        chords: [{ text: "E", position: 0 }],
        lyric: "All the time" 
    },
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
const autoScrollToggle = document.getElementById('auto-scroll-toggle');
const bpmInput = document.getElementById('bpm-input');
const increaseBpm = document.getElementById('increase-bpm');
const decreaseBpm = document.getElementById('decrease-bpm');
const showControlsBtn = document.getElementById('show-controls-btn');
const controlsPanel = document.getElementById('controls-panel');
const linesToDisplaySelect = document.getElementById('lines-to-display');

// App state
let currentIndex = 0;
let fontSize = 24; // Default font size in pixels
let transposeSteps = 0; // Default transposition (no change)
let useFlats = false; // Default to using sharps
let isAutoScrolling = false;
let autoScrollInterval = null;
let bpm = 60; // Default BPM - slower default for better readability
let controlsVisible = false; // Controls hidden by default
let linesToDisplay = 2; // Default number of lines to display

// Chord mapping for transposition
const sharpChords = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const flatChords = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];

// Initialize the app
function init() {
    displayCurrentLines();
    setupEventListeners();
    highlightSelectedKey();
    loadSettings();
}

// Load saved settings from localStorage
function loadSettings() {
    if (localStorage.getItem('blindTabSettings')) {
        try {
            const settings = JSON.parse(localStorage.getItem('blindTabSettings'));
            
            // Apply saved settings if they exist
            if (settings.fontSize) {
                fontSize = settings.fontSize;
                updateFontSize();
            }
            
            if (settings.theme === 'dark') {
                document.body.classList.remove('light-theme');
                document.body.classList.add('dark-theme');
                themeToggle.querySelector('.toggle-icon').textContent = '🌙';
            }
            
            if (settings.transposeSteps !== undefined) {
                setTransposition(settings.transposeSteps);
            }
            
            if (settings.useFlats) {
                useFlats = settings.useFlats;
                useFlatsBtn.textContent = useFlats ? 'Use #' : 'Use ♭';
                displayCurrentLines();
            }
            
            if (settings.bpm) {
                bpm = settings.bpm;
                bpmInput.value = bpm;
            }
            
            // Load controls visibility state
            if (settings.controlsVisible) {
                toggleControls(true);
            }
            
            // Load lines to display setting
            if (settings.linesToDisplay) {
                linesToDisplay = settings.linesToDisplay;
                linesToDisplaySelect.value = linesToDisplay;
            }
        } catch (e) {
            console.error('Error loading settings:', e);
        }
    }
}

// Save current settings to localStorage
function saveSettings() {
    const settings = {
        fontSize,
        theme: document.body.classList.contains('dark-theme') ? 'dark' : 'light',
        transposeSteps,
        useFlats,
        bpm,
        controlsVisible,
        linesToDisplay
    };
    
    localStorage.setItem('blindTabSettings', JSON.stringify(settings));
}

// Display current lines based on the selected number of lines
function displayCurrentLines() {
    lyricsContainer.innerHTML = '';
    
    // Display the selected number of lines at a time
    for (let i = 0; i < linesToDisplay; i++) {
        const lineIndex = currentIndex + i;
        
        // Check if we're still within the song data
        if (lineIndex < songData.length) {
            const line = songData[lineIndex];
            
            // Create a line container
            const lineContainer = document.createElement('div');
            lineContainer.className = 'line-container';
            
            if (line.chords && line.chords.length > 0 && line.lyric) {
                // For lines with both chords and lyrics, we need to align them
                
                // Create a wrapper for proper alignment
                const alignmentWrapper = document.createElement('div');
                alignmentWrapper.className = 'alignment-wrapper';
                
                // Create chord container
                const chordContainer = document.createElement('div');
                chordContainer.className = 'chord-container';
                
                // Add each chord at its position
                line.chords.forEach(chord => {
                    const chordSpan = document.createElement('span');
                    chordSpan.className = 'chord';
                    chordSpan.textContent = transposeChord(chord.text);
                    chordSpan.style.left = `${chord.position}ch`;
                    chordContainer.appendChild(chordSpan);
                });
                
                // Create lyric line
                const lyricElement = document.createElement('div');
                lyricElement.className = 'lyric-line';
                lyricElement.textContent = line.lyric;
                
                // Add elements to the wrapper
                alignmentWrapper.appendChild(chordContainer);
                alignmentWrapper.appendChild(lyricElement);
                lineContainer.appendChild(alignmentWrapper);
            } else if (line.chords && line.chords.length > 0) {
                // Only chord, no lyrics
                const chordContainer = document.createElement('div');
                chordContainer.className = 'chord-container chord-only';
                
                // Add each chord
                line.chords.forEach(chord => {
                    const chordSpan = document.createElement('span');
                    chordSpan.className = 'chord';
                    chordSpan.textContent = transposeChord(chord.text);
                    if (chord.position > 0) {
                        chordSpan.style.marginLeft = `${chord.position}ch`;
                    }
                    chordContainer.appendChild(chordSpan);
                });
                
                lineContainer.appendChild(chordContainer);
            } else {
                // Only lyrics or empty line
                const lyricElement = document.createElement('div');
                lyricElement.className = 'lyric-line';
                lyricElement.textContent = line.lyric;
                lineContainer.appendChild(lyricElement);
            }
            
            lyricsContainer.appendChild(lineContainer);
        }
    }
    
    // Update button states
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= songData.length - linesToDisplay;
}

// Transpose a chord
function transposeChord(chordText) {
    if (!chordText) return '';
    
    // Split the chord string in case it contains multiple chords
    const chords = chordText.split(' ');
    
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
    themeToggle.addEventListener('click', () => {
        toggleTheme();
        saveSettings();
    });
    
    // Font size controls
    increaseFont.addEventListener('click', () => {
        increaseFontSize();
        saveSettings();
    });
    decreaseFont.addEventListener('click', () => {
        decreaseFontSize();
        saveSettings();
    });
    
    // Lines to display control
    linesToDisplaySelect.addEventListener('change', () => {
        updateLinesToDisplay(parseInt(linesToDisplaySelect.value));
        saveSettings();
    });
    
    // Key selection
    keySelectBtn.addEventListener('click', toggleKeyDropdown);
    
    // Key options
    keyOptions.forEach(option => {
        option.addEventListener('click', function() {
            const transposeValue = parseInt(this.getAttribute('data-transpose'));
            setTransposition(transposeValue);
            toggleKeyDropdown(); // Close dropdown after selection
            saveSettings();
        });
    });
    
    // Use flats toggle
    useFlatsBtn.addEventListener('click', () => {
        toggleUseFlats();
        saveSettings();
    });
    
    // Auto-scroll toggle
    autoScrollToggle.addEventListener('click', toggleAutoScroll);
    
    // BPM controls
    bpmInput.addEventListener('change', () => {
        updateBpm(parseInt(bpmInput.value));
        saveSettings();
    });
    
    increaseBpm.addEventListener('click', () => {
        updateBpm(bpm + 5);
        saveSettings();
    });
    
    decreaseBpm.addEventListener('click', () => {
        updateBpm(bpm - 5);
        saveSettings();
    });
    
    // Show/hide controls
    showControlsBtn.addEventListener('click', () => {
        toggleControls();
        saveSettings();
    });
    
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

// Toggle controls panel visibility
function toggleControls(setVisible = null) {
    // If setVisible is provided, use that value, otherwise toggle
    controlsVisible = setVisible !== null ? setVisible : !controlsVisible;
    
    if (controlsVisible) {
        controlsPanel.classList.add('show');
        showControlsBtn.classList.add('active');
    } else {
        controlsPanel.classList.remove('show');
        showControlsBtn.classList.remove('active');
    }
}

// Toggle auto-scroll
function toggleAutoScroll() {
    isAutoScrolling = !isAutoScrolling;
    
    if (isAutoScrolling) {
        autoScrollToggle.textContent = 'Auto-Scroll: On';
        autoScrollToggle.classList.add('active');
        startAutoScroll();
    } else {
        autoScrollToggle.textContent = 'Auto-Scroll: Off';
        autoScrollToggle.classList.remove('active');
        stopAutoScroll();
    }
}

// Start auto-scrolling
function startAutoScroll() {
    // Clear any existing interval
    stopAutoScroll();
    
    // Calculate interval based on BPM (beats per minute)
    // Using a slower pace - one line per 4 beats (one measure in 4/4 time)
    // This makes the scroll much more readable
    const beatsPerLine = 4;
    const intervalMs = (60 / bpm) * 1000 * beatsPerLine;
    
    // Set up the interval
    autoScrollInterval = setInterval(() => {
        if (currentIndex < songData.length - linesToDisplay) {
            goToNextLines();
        } else {
            // Stop auto-scroll when we reach the end
            toggleAutoScroll();
        }
    }, intervalMs);
}

// Stop auto-scrolling
function stopAutoScroll() {
    if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
        autoScrollInterval = null;
    }
}

// Update BPM value
function updateBpm(newBpm) {
    // Ensure BPM is within valid range
    bpm = Math.max(40, Math.min(240, newBpm));
    bpmInput.value = bpm;
    
    // Restart auto-scroll if it's active
    if (isAutoScrolling) {
        startAutoScroll();
    }
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
    if (currentIndex < songData.length - 1) {
        currentIndex += 1;
        displayCurrentLines();
    } else if (isAutoScrolling) {
        // Stop auto-scroll when we reach the end
        toggleAutoScroll();
    }
}

function goToPreviousLines() {
    if (currentIndex > 0) {
        currentIndex -= 1;
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
        case 'p':
        case 'P':
            toggleAutoScroll(); // Toggle auto-scroll with 'p' key
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

// Update the number of lines to display
function updateLinesToDisplay(numLines) {
    linesToDisplay = numLines;
    displayCurrentLines();
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', init); 