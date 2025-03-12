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
const fontSizeSlider = document.getElementById('font-size-slider');
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
const editSongBtn = document.getElementById('edit-song-btn');
const importSongBtn = document.getElementById('import-song-btn');
const songFileInput = document.getElementById('song-file-input');
const songEditorModal = document.getElementById('song-editor-modal');
const songMarkdownTextarea = document.getElementById('song-markdown');
const saveSongBtn = document.getElementById('save-song-btn');
const cancelEditBtn = document.getElementById('cancel-edit-btn');
const closeModalBtn = document.querySelector('.close-modal');
const exportSongBtn = document.getElementById('export-song-btn');
const autoResizeToggle = document.getElementById('auto-resize-toggle');

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
let songTitle = "Fake Plastic Trees";
let songArtist = "Radiohead";
let currentSongMarkdown = ""; // Store the current song in Markdown format
let autoResizeText = true; // Enable auto-resizing by default

// Chord mapping for transposition
const sharpChords = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const flatChords = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];

// Update the lyrics container width
function updateContainerWidth() {
    // Calculate the optimal width based on window dimensions
    const containerWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) - 20; // 20px for margins
    lyricsContainer.style.width = `${containerWidth}px`;
    lyricsContainer.style.maxWidth = '100vw';
    
    // If auto-resize is enabled, make sure the font-size style is removed
    if (autoResizeText) {
        lyricsContainer.style.removeProperty('font-size');
    }
    
    console.log(`Updated lyrics container width to ${containerWidth}px`);
}

// Initialize the app
function init() {
    console.log("Initializing app...");
    console.log("Song data length:", songData.length);
    
    // Ensure DOM elements are found
    if (!lyricsContainer) {
        console.error("Lyrics container not found!");
    } else {
        console.log("Lyrics container found:", lyricsContainer);
    }
    
    // Set up event listeners first
    setupEventListeners();
    
    // Then display the lines
    displayCurrentLines();
    
    // Highlight the selected key
    highlightSelectedKey();
    
    // Load settings last
    loadSettings();
    
    // Initialize slider background
    updateSliderBackground(fontSize);
    
    // Apply auto-resize if enabled
    if (autoResizeText) {
        lyricsContainer.classList.add('auto-resize');
        // Explicitly remove any inline font-size style
        lyricsContainer.style.removeProperty('font-size');
    } else {
        lyricsContainer.classList.remove('auto-resize');
        updateFontSize();
    }
    
    // Explicitly set width to ensure proper dimensions
    // Use requestAnimationFrame to ensure DOM is fully rendered
    requestAnimationFrame(() => {
        updateContainerWidth();
    });
    
    console.log("Initialization complete");
}

// Load saved settings from localStorage
function loadSettings() {
    if (localStorage.getItem('blindTabSettings')) {
        try {
            const settings = JSON.parse(localStorage.getItem('blindTabSettings'));
            
            // Apply saved settings if they exist
            if (settings.fontSize) {
                fontSize = settings.fontSize;
                fontSizeSlider.value = fontSize;
                // Only update font size if auto-resize is disabled
                if (!autoResizeText) {
                    updateFontSize();
                }
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
            
            // Load auto-resize setting
            if (settings.autoResizeText !== undefined) {
                autoResizeText = settings.autoResizeText;
                // Update toggle button state
                if (autoResizeText) {
                    autoResizeToggle.classList.add('active');
                    // Explicitly remove any inline font-size style
                    lyricsContainer.classList.add('auto-resize');
                    lyricsContainer.style.removeProperty('font-size');
                } else {
                    autoResizeToggle.classList.remove('active');
                    lyricsContainer.classList.remove('auto-resize');
                    // Apply the manual font size
                    updateFontSize();
                }
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
        linesToDisplay,
        autoResizeText
    };
    
    localStorage.setItem('blindTabSettings', JSON.stringify(settings));
}

// Display current lines based on the selected number of lines
function displayCurrentLines() {
    console.log("Displaying lines starting from index:", currentIndex);
    console.log("Number of lines to display:", linesToDisplay);
    console.log("Total song data length:", songData.length);
    
    // Store the current width before clearing
    const currentWidth = lyricsContainer.style.width;
    
    // Clear the container
    lyricsContainer.innerHTML = '';
    
    // Restore the width after clearing
    if (currentWidth) {
        lyricsContainer.style.width = currentWidth;
    }
    
    // Create a fixed position container for consistent positioning
    const fixedPositionContainer = document.createElement('div');
    fixedPositionContainer.className = 'fixed-position-container';
    
    // Explicitly set inline styles to ensure proper positioning and left alignment
    fixedPositionContainer.style.position = 'absolute';
    fixedPositionContainer.style.top = '0';
    fixedPositionContainer.style.left = '0';
    fixedPositionContainer.style.width = '100%';
    fixedPositionContainer.style.height = '100%';
    fixedPositionContainer.style.display = 'flex';
    fixedPositionContainer.style.flexDirection = 'column';
    fixedPositionContainer.style.alignItems = 'flex-start'; // Ensure left alignment
    fixedPositionContainer.style.justifyContent = 'flex-start'; // Align to top
    fixedPositionContainer.style.padding = '10px'; // Add some padding
    fixedPositionContainer.style.boxSizing = 'border-box'; // Ensure padding is included in width/height
    fixedPositionContainer.style.textAlign = 'left'; // Ensure text is left-aligned
    fixedPositionContainer.style.whiteSpace = 'nowrap'; // Prevent text wrapping
    fixedPositionContainer.style.overflowX = 'visible'; // Allow horizontal overflow
    
    // Add a fallback message if no lines are displayed
    if (songData.length === 0) {
        const noDataMessage = document.createElement('div');
        noDataMessage.textContent = 'No song data available. Try importing a song.';
        noDataMessage.style.fontSize = '24px';
        noDataMessage.style.padding = '20px';
        fixedPositionContainer.appendChild(noDataMessage);
    }
    
    // Only show title and artist if we're at the beginning of the song
    if (currentIndex === 0) {
        // Create a title container
        const titleContainer = document.createElement('div');
        titleContainer.className = 'line-container';
        titleContainer.style.width = '100%';
        titleContainer.style.textAlign = 'left';
        titleContainer.style.display = 'flex';
        titleContainer.style.flexDirection = 'column';
        titleContainer.style.alignItems = 'flex-start';
        titleContainer.style.marginBottom = '0.8em';
        
        // Add song title
        const titleElement = document.createElement('div');
        titleElement.className = 'lyric-line title-line';
        titleElement.textContent = songTitle;
        titleElement.style.fontWeight = 'bold';
        titleElement.style.fontSize = '1.1em';
        
        // Add artist name
        const artistElement = document.createElement('div');
        artistElement.className = 'lyric-line artist-line';
        artistElement.textContent = songArtist;
        artistElement.style.fontSize = '0.9em';
        artistElement.style.opacity = '0.8';
        
        // Add elements to the container
        titleContainer.appendChild(titleElement);
        titleContainer.appendChild(artistElement);
        fixedPositionContainer.appendChild(titleContainer);
    }
    
    // Display the selected number of lines at a time
    for (let i = 0; i < linesToDisplay; i++) {
        const lineIndex = currentIndex + i;
        
        // Check if we're still within the song data
        if (lineIndex < songData.length) {
            const line = songData[lineIndex];
            console.log("Displaying line:", line);
            
            // Create a line container
            const lineContainer = document.createElement('div');
            lineContainer.className = 'line-container';
            lineContainer.style.width = '100%';
            lineContainer.style.textAlign = 'left'; // Ensure left alignment
            lineContainer.style.display = 'flex';
            lineContainer.style.flexDirection = 'column';
            lineContainer.style.alignItems = 'flex-start'; // Ensure left alignment
            lineContainer.style.flexGrow = '0'; // Don't allow growth
            lineContainer.style.flexShrink = '0'; // Don't allow shrinking
            lineContainer.style.whiteSpace = 'nowrap'; // Prevent text wrapping
            
            if (line.chords && line.chords.length > 0 && line.lyric) {
                // For lines with both chords and lyrics, we need to align them
                
                // Create a wrapper for proper alignment
                const alignmentWrapper = document.createElement('div');
                alignmentWrapper.className = 'alignment-wrapper';
                alignmentWrapper.style.width = '100%';
                alignmentWrapper.style.textAlign = 'left'; // Ensure left alignment
                alignmentWrapper.style.minHeight = 'auto'; // Auto height instead of fixed
                alignmentWrapper.style.flexGrow = '0'; // Don't allow growth
                alignmentWrapper.style.flexShrink = '0'; // Don't allow shrinking
                alignmentWrapper.style.whiteSpace = 'nowrap'; // Prevent text wrapping
                
                // Create chord container
                const chordContainer = document.createElement('div');
                chordContainer.className = 'chord-container';
                chordContainer.style.width = '100%';
                chordContainer.style.textAlign = 'left'; // Ensure left alignment
                chordContainer.style.whiteSpace = 'nowrap'; // Prevent text wrapping
                
                // Add each chord at its position
                line.chords.forEach(chord => {
                    const chordSpan = document.createElement('span');
                    chordSpan.className = 'chord';
                    chordSpan.textContent = transposeChord(chord.text);
                    
                    // Position chords with absolute positioning but no centering
                    // Use em units for better scaling with font size
                    chordSpan.style.left = `${chord.position * 0.5}em`;
                    
                    // Ensure consistent vertical positioning
                    chordSpan.style.top = '0';
                    chordContainer.appendChild(chordSpan);
                });
                
                // Create lyric line
                const lyricElement = document.createElement('div');
                lyricElement.className = 'lyric-line';
                lyricElement.textContent = line.lyric;
                lyricElement.style.width = '100%';
                lyricElement.style.textAlign = 'left'; // Ensure left alignment
                lyricElement.style.lineHeight = '1.2'; // Reduced line height
                lyricElement.style.paddingTop = '0'; // Remove top padding
                lyricElement.style.whiteSpace = 'nowrap'; // Prevent text wrapping
                
                // Add elements to the wrapper
                alignmentWrapper.appendChild(chordContainer);
                alignmentWrapper.appendChild(lyricElement);
                lineContainer.appendChild(alignmentWrapper);
            } else if (line.chords && line.chords.length > 0) {
                // Only chord, no lyrics
                const chordContainer = document.createElement('div');
                chordContainer.className = 'chord-container chord-only';
                chordContainer.style.textAlign = 'left'; // Ensure left alignment
                chordContainer.style.whiteSpace = 'nowrap'; // Prevent text wrapping
                
                // Add each chord
                line.chords.forEach(chord => {
                    const chordSpan = document.createElement('span');
                    chordSpan.className = 'chord';
                    chordSpan.textContent = transposeChord(chord.text);
                    if (chord.position > 0) {
                        // Use em units for better scaling
                        chordSpan.style.marginLeft = `${chord.position * 0.5}em`;
                    }
                    chordContainer.appendChild(chordSpan);
                });
                
                lineContainer.appendChild(chordContainer);
            } else {
                // Only lyrics or empty line
                const lyricElement = document.createElement('div');
                lyricElement.className = 'lyric-line';
                lyricElement.textContent = line.lyric;
                lyricElement.style.width = '100%';
                lyricElement.style.textAlign = 'left'; // Ensure left alignment
                lyricElement.style.lineHeight = '1.2'; // Reduced line height
                lyricElement.style.paddingTop = '0'; // Remove top padding
                lyricElement.style.whiteSpace = 'nowrap'; // Prevent text wrapping
                lineContainer.appendChild(lyricElement);
            }
            
            fixedPositionContainer.appendChild(lineContainer);
        }
    }
    
    // Add the fixed position container to the lyrics container
    lyricsContainer.appendChild(fixedPositionContainer);
    
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
    fontSizeSlider.addEventListener('input', () => {
        // Disable auto-resize when manually changing font size
        autoResizeText = false;
        autoResizeToggle.classList.remove('active');
        
        // Update font size from slider
        fontSize = parseInt(fontSizeSlider.value);
        
        // Apply the font size immediately
        lyricsContainer.style.fontSize = `${fontSize}px`;
        
        // Update the slider position visually
        updateSliderBackground(fontSize);
        
        // Save settings
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
    
    // Song editor controls
    editSongBtn.addEventListener('click', openSongEditor);
    importSongBtn.addEventListener('click', () => songFileInput.click());
    exportSongBtn.addEventListener('click', exportSongAsMarkdown);
    songFileInput.addEventListener('change', handleFileImport);
    saveSongBtn.addEventListener('click', saveSongChanges);
    cancelEditBtn.addEventListener('click', closeSongEditor);
    closeModalBtn.addEventListener('click', closeSongEditor);
    
    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === songEditorModal) {
            closeSongEditor();
        }
    });
    
    // Window resize event for text optimization
    window.addEventListener('resize', () => {
        // Update container width on resize
        updateContainerWidth();
    });
    
    // Handle orientation changes on mobile devices
    window.addEventListener('orientationchange', () => {
        // Use setTimeout to ensure dimensions are updated after orientation change completes
        setTimeout(() => {
            updateContainerWidth();
        }, 100);
    });
    
    // Auto-resize toggle
    autoResizeToggle.addEventListener('click', () => {
        toggleAutoResize();
        saveSettings();
    });
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
        
        // Update slider background for dark theme
        updateSliderBackground(fontSize);
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        toggleIcon.textContent = '☀️';
        
        // Update slider background for light theme
        updateSliderBackground(fontSize);
    }
}

// Font size adjustment functions
function updateFontSize() {
    // Only apply manual font size if auto-resize is disabled
    if (!autoResizeText) {
        lyricsContainer.style.fontSize = `${fontSize}px`;
    }
    
    // Update the slider value in case it was set programmatically
    fontSizeSlider.value = fontSize;
    
    // Update the slider background to reflect current value
    updateSliderBackground(fontSize);
}

// Update slider background to show the filled portion
function updateSliderBackground(value) {
    const min = parseInt(fontSizeSlider.min);
    const max = parseInt(fontSizeSlider.max);
    const percentage = ((value - min) / (max - min)) * 100;
    
    // Create gradient background for the slider
    fontSizeSlider.style.background = 
        `linear-gradient(to right, #4a90e2 0%, #4a90e2 ${percentage}%, #d3d3d3 ${percentage}%, #d3d3d3 100%)`;
    
    // For dark theme, use different colors
    if (document.body.classList.contains('dark-theme')) {
        fontSizeSlider.style.background = 
            `linear-gradient(to right, #7ab5ff 0%, #7ab5ff ${percentage}%, #555 ${percentage}%, #555 100%)`;
    }
}

// Update the number of lines to display
function updateLinesToDisplay(numLines) {
    linesToDisplay = numLines;
    displayCurrentLines();
}

// Song editor functions
function openSongEditor() {
    // Convert current song data to Markdown
    currentSongMarkdown = convertSongDataToMarkdown();
    songMarkdownTextarea.value = currentSongMarkdown;
    
    // Show the modal
    songEditorModal.style.display = 'block';
}

function closeSongEditor() {
    songEditorModal.style.display = 'none';
}

function saveSongChanges() {
    // Parse the Markdown to get new song data
    const markdown = songMarkdownTextarea.value;
    const newSongData = parseSongMarkdown(markdown);
    
    // Update the song data and display
    if (newSongData) {
        songData.length = 0; // Clear existing song data
        songData.push(...newSongData.lines);
        songTitle = newSongData.title;
        songArtist = newSongData.artist;
        
        // Update the song info display
        updateSongInfo();
        
        // Reset to the beginning of the song
        currentIndex = 0;
        displayCurrentLines();
        
        // Close the editor
        closeSongEditor();
    }
}

function updateSongInfo() {
    // Since we're now showing the title and artist in the lyrics container,
    // we just need to refresh the display if we're at the beginning
    if (currentIndex === 0) {
        displayCurrentLines();
    }
}

function handleFileImport(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        const content = e.target.result;
        songMarkdownTextarea.value = content;
        
        // Open the editor to show the imported content
        songEditorModal.style.display = 'block';
    };
    reader.readAsText(file);
    
    // Reset the file input so the same file can be selected again
    event.target.value = '';
}

// Convert song data to Markdown format
function convertSongDataToMarkdown() {
    let markdown = `# ${songTitle}\n## ${songArtist}\n\n`;
    
    let currentSection = '';
    let lineBuffer = [];
    
    // Process each line
    songData.forEach(line => {
        // Check if this is a section marker (empty line)
        if (!line.lyric && !line.chords) {
            // If we have accumulated lines, add them to the markdown
            if (lineBuffer.length > 0) {
                markdown += lineBuffer.join('\n') + '\n\n';
                lineBuffer = [];
            }
            return;
        }
        
        // Convert line to markdown format
        let markdownLine = '';
        
        if (line.chords && line.chords.length > 0) {
            // Sort chords by position
            const sortedChords = [...line.chords].sort((a, b) => a.position - b.position);
            
            // Start with the lyric
            let lyricWithChords = line.lyric;
            
            // Insert chords from right to left to avoid position shifts
            for (let i = sortedChords.length - 1; i >= 0; i--) {
                const chord = sortedChords[i];
                const position = chord.position;
                
                // Insert the chord at the specified position
                if (position <= lyricWithChords.length) {
                    lyricWithChords = 
                        lyricWithChords.substring(0, position) + 
                        `[${chord.text}]` + 
                        lyricWithChords.substring(position);
                } else {
                    // If position is beyond the lyric length, append with spaces
                    lyricWithChords += ' '.repeat(position - lyricWithChords.length) + `[${chord.text}]`;
                }
            }
            
            markdownLine = lyricWithChords;
        } else {
            // Just the lyric
            markdownLine = line.lyric;
        }
        
        lineBuffer.push(markdownLine);
    });
    
    // Add any remaining lines
    if (lineBuffer.length > 0) {
        markdown += lineBuffer.join('\n') + '\n';
    }
    
    return markdown;
}

// Parse Markdown to song data format
function parseSongMarkdown(markdown) {
    const lines = markdown.split('\n');
    let title = 'Untitled Song';
    let artist = 'Unknown Artist';
    const songLines = [];
    
    // Parse title and artist
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        if (line.startsWith('# ')) {
            title = line.substring(2).trim();
        } else if (line.startsWith('## ')) {
            artist = line.substring(3).trim();
        } else if (line.length > 0) {
            // Start parsing song content
            for (let j = i; j < lines.length; j++) {
                const contentLine = lines[j].trim();
                
                // Skip empty lines but add them as separators
                if (contentLine.length === 0) {
                    songLines.push({ lyric: '' });
                    continue;
                }
                
                // Skip section headers (e.g., [Verse], [Chorus])
                if (contentLine.match(/^\[.*\]$/) && !contentLine.match(/\]\w/)) {
                    continue;
                }
                
                // Parse line with chords
                const parsedLine = parseLineWithChords(contentLine);
                songLines.push(parsedLine);
            }
            break;
        }
    }
    
    return {
        title,
        artist,
        lines: songLines
    };
}

// Parse a single line with chord markers
function parseLineWithChords(line) {
    // If no chord markers, return just the lyric
    if (!line.includes('[')) {
        return { lyric: line };
    }
    
    const chords = [];
    let lyric = line;
    let offset = 0;
    
    // Find all chord markers [chord]
    const chordRegex = /\[([^\]]+)\]/g;
    let match;
    
    while ((match = chordRegex.exec(line)) !== null) {
        const chordText = match[1];
        const position = match.index - offset;
        
        // Add chord to the list
        chords.push({
            text: chordText,
            position: position
        });
        
        // Remove the chord marker from the lyric
        lyric = lyric.replace(`[${chordText}]`, '');
        offset += chordText.length + 2; // +2 for the brackets
    }
    
    return {
        chords,
        lyric
    };
}

// Export song as Markdown file
function exportSongAsMarkdown() {
    // Generate the Markdown content
    const markdown = convertSongDataToMarkdown();
    
    // Create a blob with the content
    const blob = new Blob([markdown], { type: 'text/markdown' });
    
    // Create a download link
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${songTitle.replace(/\s+/g, '_')}.md`;
    
    // Trigger the download
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 0);
}

// Toggle auto-resize feature
function toggleAutoResize() {
    autoResizeText = !autoResizeText;
    
    if (autoResizeText) {
        autoResizeToggle.classList.add('active');
        // Apply CSS-based auto-resize
        lyricsContainer.classList.add('auto-resize');
        // Remove any inline font-size style
        lyricsContainer.style.removeProperty('font-size');
    } else {
        autoResizeToggle.classList.remove('active');
        // Remove CSS-based auto-resize
        lyricsContainer.classList.remove('auto-resize');
        // Apply the manual font size
        updateFontSize();
    }
    
    // Update container width to ensure proper dimensions
    updateContainerWidth();
    
    // Save settings
    saveSettings();
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', init); 