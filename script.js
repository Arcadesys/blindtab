// Creating a new script file

// Song data - Fake Plastic Trees by Radiohead with chord positions
const songData = [
    {
        "chords": [{"text": "G", "position": 0}],
        "lyric": "Her green plastic watering can"
    },
    {
        "chords": [{"text": "Em", "position": 0}],
        "lyric": "For her fake Chinese rubber plant"
    },
    {
        "chords": [{"text": "C", "position": 0}],
        "lyric": "In the fake plastic earth"
    },
    {"lyric": ""},
    {
        "chords": [{"text": "G", "position": 0}],
        "lyric": "That she bought from a rubber man"
    },
    {
        "chords": [{"text": "D", "position": 0}],
        "lyric": "In a town full of rubber plans"
    },
    {
        "chords": [{"text": "Am", "position": 0}],
        "lyric": "To get rid of itself"
    },
    {"lyric": ""},
    {
        "chords": [{"text": "Em", "position": 0}],
        "lyric": "It wears her out"
    },
    {
        "chords": [{"text": "G", "position": 0}],
        "lyric": "It wears her out"
    },
    {
        "chords": [{"text": "Em", "position": 0}],
        "lyric": "It wears her out"
    },
    {
        "chords": [{"text": "G", "position": 0}],
        "lyric": "It wears her out"
    },
    {"lyric": ""},
    {
        "chords": [{"text": "G", "position": 0}],
        "lyric": "She lives with a broken man"
    },
    {
        "chords": [{"text": "Em", "position": 0}],
        "lyric": "A cracked polystyrene man"
    },
    {
        "chords": [{"text": "C", "position": 0}],
        "lyric": "Who just crumbles and burns"
    },
    {"lyric": ""},
    {
        "chords": [{"text": "G", "position": 0}],
        "lyric": "He used to do surgery"
    },
    {
        "chords": [{"text": "Em", "position": 0}],
        "lyric": "For girls in the eighties"
    },
    {
        "chords": [{"text": "C", "position": 0}],
        "lyric": "But gravity always wins"
    },
    {"lyric": ""},
    {
        "chords": [{"text": "Am", "position": 0}],
        "lyric": "It wears him out"
    },
    {
        "chords": [{"text": "G", "position": 0}],
        "lyric": "It wears him out"
    },
    {
        "chords": [{"text": "Am", "position": 0}],
        "lyric": "It wears him out"
    },
    {
        "chords": [{"text": "G", "position": 0}],
        "lyric": "It wears him out"
    },
    {"lyric": ""},
    {
        "chords": [{"text": "G", "position": 0}],
        "lyric": "She looks like the real thing"
    },
    {
        "chords": [{"text": "Em", "position": 0}],
        "lyric": "She tastes like the real thing"
    },
    {
        "chords": [{"text": "C", "position": 0}],
        "lyric": "My fake plastic love"
    },
    {"lyric": ""},
    {
        "chords": [{"text": "G", "position": 0}],
        "lyric": "But I can't help the feeling"
    },
    {
        "chords": [{"text": "Em", "position": 0}],
        "lyric": "I could blow through the ceiling"
    },
    {
        "chords": [{"text": "C", "position": 0}],
        "lyric": "If I just turn and run"
    },
    {"lyric": ""},
    {
        "chords": [{"text": "Gmaj7", "position": 0}],
        "lyric": "And if I could be who you wanted"
    },
    {
        "chords": [{"text": "Am7", "position": 0}],
        "lyric": "If I could be who you wanted"
    },
    {
        "chords": [{"text": "G", "position": 0}],
        "lyric": "All the time"
    },
    {
        "chords": [{"text": "Am", "position": 0}],
        "lyric": "All the time"
    }
]


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
let showNumerals = false; // Default to showing chord names, not numerals
let currentKey = 'G'; // Default key (G major for this song)

// Chord mapping for transposition
const sharpChords = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const flatChords = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];

// Roman numeral mapping for diatonic scale degrees
const majorNumerals = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°'];
const minorNumerals = ['i', 'ii°', 'III', 'iv', 'v', 'VI', 'VII'];

// Transpose a chord based on the current transposition steps
function transposeChord(chord) {
    // Extract the root note and any modifiers (like m, 7, maj7, etc.)
    const match = chord.match(/^([A-G][#b]?)(.*)$/);
    if (!match) return chord; // Not a valid chord format
    
    const [, root, modifier] = match;
    
    // Find the index of the root note in the appropriate chord array
    const chordArray = useFlats ? flatChords : sharpChords;
    let index = chordArray.indexOf(root);
    
    if (index === -1) {
        // Try to find an equivalent chord (e.g., if using sharps but the chord is Bb)
        const altChordArray = useFlats ? sharpChords : flatChords;
        const altIndex = altChordArray.indexOf(root);
        if (altIndex !== -1) {
            index = altIndex;
        } else {
            return chord; // Can't transpose this chord
        }
    }
    
    // Calculate the new index after transposition
    let newIndex = (index + transposeSteps) % 12;
    if (newIndex < 0) newIndex += 12;
    
    // Return the new chord with the original modifier
    return chordArray[newIndex] + modifier;
}

// Convert a chord to its diatonic scale numeral
function chordToNumeral(chord) {
    // Extract the root note and any modifiers (like m, 7, maj7, etc.)
    const match = chord.match(/^([A-G][#b]?)(.*)$/);
    if (!match) return chord; // Not a valid chord format
    
    const [, root, modifier] = match;
    
    // Find the index of the root note in the appropriate chord array
    const chordArray = useFlats ? flatChords : sharpChords;
    let rootIndex = chordArray.indexOf(root);
    
    if (rootIndex === -1) {
        // Try to find an equivalent chord (e.g., if using sharps but the chord is Bb)
        const altChordArray = useFlats ? sharpChords : flatChords;
        const altIndex = altChordArray.indexOf(root);
        if (altIndex !== -1) {
            rootIndex = altIndex;
        } else {
            return chord; // Can't find this chord
        }
    }
    
    // Find the index of the current key in the chord array
    const keyIndex = chordArray.indexOf(currentKey);
    if (keyIndex === -1) return chord; // Current key not found
    
    // Calculate the scale degree (0-11)
    let scaleDegree = (rootIndex - keyIndex + 12) % 12;
    
    // Determine if we're in a major or minor key
    const isMinor = currentKey.includes('m');
    const numerals = isMinor ? minorNumerals : majorNumerals;
    
    // Map the scale degree to a diatonic numeral
    // This is a simplified approach - in reality, we'd need to analyze the chord quality
    let numeral = '';
    
    // Map common scale degrees to numerals
    switch (scaleDegree) {
        case 0: // Tonic
            numeral = numerals[0]; // I or i
            break;
        case 2: // Supertonic
            numeral = numerals[1]; // ii or ii°
            break;
        case 4: // Mediant
            numeral = numerals[2]; // iii or III
            break;
        case 5: // Subdominant
            numeral = numerals[3]; // IV or iv
            break;
        case 7: // Dominant
            numeral = numerals[4]; // V or v
            break;
        case 9: // Submediant
            numeral = numerals[5]; // vi or VI
            break;
        case 11: // Leading tone
            numeral = numerals[6]; // vii° or VII
            break;
        default:
            // For non-diatonic chords, return the original chord name
            return chord;
    }
    
    // Adjust the numeral based on the chord quality
    if (modifier.includes('m') && !isMinor && (scaleDegree === 0 || scaleDegree === 5 || scaleDegree === 7)) {
        // If it's a minor chord where a major would be expected in a major key
        numeral = numeral.toLowerCase();
    } else if (!modifier.includes('m') && isMinor && (scaleDegree === 0 || scaleDegree === 5 || scaleDegree === 7)) {
        // If it's a major chord where a minor would be expected in a minor key
        numeral = numeral.toUpperCase();
    }
    
    // Add any additional modifiers (7, maj7, etc.)
    let additionalModifier = '';
    if (modifier.includes('7')) {
        additionalModifier = '7';
    } else if (modifier.includes('maj7')) {
        additionalModifier = 'maj7';
    } else if (modifier.includes('dim') || modifier.includes('°')) {
        additionalModifier = '°';
    } else if (modifier.includes('aug') || modifier.includes('+')) {
        additionalModifier = '+';
    }
    
    return numeral + additionalModifier;
}

// Find the longest line in the song data
function findLongestLine() {
    let maxLength = 0;
    let longestLineIndex = 0;
    
    // Check each line in the song data
    songData.forEach((line, index) => {
        // Calculate the total length of the line (chords + lyrics)
        let lineLength = 0;
        
        // Add the length of the lyric
        if (line.lyric) {
            lineLength += line.lyric.length;
        }
        
        // Add extra space for chords (each chord takes up more visual space)
        if (line.chords && line.chords.length > 0) {
            // Add chord text length plus some extra space for each chord
            line.chords.forEach(chord => {
                lineLength += chord.text.length * 1.5; // Chords take up more space visually
            });
        }
        
        // Update max length if this line is longer
        if (lineLength > maxLength) {
            maxLength = lineLength;
            longestLineIndex = index;
        }
    });
    
    return { index: longestLineIndex, length: maxLength };
}

// Update the lyrics container width
function updateContainerWidth() {
    // Calculate the optimal width based on window dimensions
    const containerWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) - 20; // 20px for margins
    lyricsContainer.style.width = `${containerWidth}px`;
    lyricsContainer.style.maxWidth = '100vw';
    
    // If auto-resize is enabled, make sure the font-size style is removed
    if (autoResizeText) {
        lyricsContainer.style.removeProperty('font-size');
        
        // Find the longest line and adjust font size based on it
        const longestLine = findLongestLine();
        
        // Only adjust if we have song data
        if (songData.length > 0) {
            // Calculate a font size multiplier based on the longest line
            // The longer the line, the smaller the multiplier
            const fontSizeMultiplier = Math.max(1, 4 - (longestLine.length / 30));
            
            // Apply the multiplier to our viewport-based font size
            const fontSizeValue = `clamp(16px, calc(${fontSizeMultiplier}vw + ${fontSizeMultiplier}vh), 200px)`;
            
            // Update the CSS variable for font size
            document.documentElement.style.setProperty('--auto-resize-font-size', fontSizeValue);
        }
    }
}

// Display current lines based on the selected number of lines
function displayCurrentLines() {
    // Clear the container
    lyricsContainer.innerHTML = '';
    
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
            lineContainer.style.marginBottom = '0.5em'; // Add space between lines
            
            if (line.chords && line.chords.length > 0 && line.lyric) {
                // For lines with both chords and lyrics, we need to align them
                
                // Create a wrapper for proper alignment
                const alignmentWrapper = document.createElement('div');
                alignmentWrapper.className = 'alignment-wrapper';
                alignmentWrapper.style.width = '100%';
                alignmentWrapper.style.textAlign = 'left'; // Ensure left alignment
                alignmentWrapper.style.position = 'relative'; // For absolute positioning of chords
                alignmentWrapper.style.minHeight = '2.5em'; // Provide space for chords above lyrics
                alignmentWrapper.style.flexGrow = '0'; // Don't allow growth
                alignmentWrapper.style.flexShrink = '0'; // Don't allow shrinking
                alignmentWrapper.style.whiteSpace = 'nowrap'; // Prevent text wrapping
                
                // Create chord container
                const chordContainer = document.createElement('div');
                chordContainer.className = 'chord-container';
                chordContainer.style.width = '100%';
                chordContainer.style.textAlign = 'left'; // Ensure left alignment
                chordContainer.style.whiteSpace = 'nowrap'; // Prevent text wrapping
                chordContainer.style.position = 'absolute'; // Position above lyrics
                chordContainer.style.top = '0';
                chordContainer.style.left = '0';
                
                // Add each chord at its position
                line.chords.forEach(chord => {
                    const chordSpan = document.createElement('span');
                    chordSpan.className = 'chord';
                    chordSpan.textContent = getChordDisplayText(chord.text);
                    
                    // Position chords with absolute positioning
                    chordSpan.style.position = 'absolute';
                    chordSpan.style.left = `${chord.position * 0.6}em`; // Adjust multiplier for better spacing
                    chordSpan.style.top = '0';
                    chordSpan.style.color = '#4a90e2'; // Make chords stand out
                    chordSpan.style.fontWeight = 'bold';
                    
                    chordContainer.appendChild(chordSpan);
                });
                
                // Create lyric line
                const lyricElement = document.createElement('div');
                lyricElement.className = 'lyric-line';
                lyricElement.textContent = line.lyric;
                lyricElement.style.width = '100%';
                lyricElement.style.textAlign = 'left'; // Ensure left alignment
                lyricElement.style.lineHeight = '1.2'; // Reduced line height
                lyricElement.style.marginTop = '1.5em'; // Space for chords above
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
                chordContainer.style.marginBottom = '0.5em'; // Add space below
                
                // Add each chord
                line.chords.forEach(chord => {
                    const chordSpan = document.createElement('span');
                    chordSpan.className = 'chord';
                    chordSpan.textContent = getChordDisplayText(chord.text);
                    chordSpan.style.color = '#4a90e2'; // Make chords stand out
                    chordSpan.style.fontWeight = 'bold';
                    
                    if (chord.position > 0) {
                        // Use em units for better scaling
                        chordSpan.style.marginLeft = `${chord.position * 0.6}em`; // Adjust multiplier for better spacing
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

// Update font size
function updateFontSize() {
    // Only apply manual font size if auto-resize is disabled
    if (!autoResizeText) {
        lyricsContainer.style.fontSize = `${fontSize}px`;
    }
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

// Navigation functions
function goToNextLines() {
    if (currentIndex < songData.length - 1) {
        currentIndex += 1;
        displayCurrentLines();
    }
}

function goToPreviousLines() {
    if (currentIndex > 0) {
        currentIndex -= 1;
        displayCurrentLines();
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
    
    // Update slider background for the new theme
    updateSliderBackground(fontSize);
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

// Toggle between sharps and flats
function toggleUseFlats() {
    useFlats = !useFlats;
    useFlatsBtn.textContent = useFlats ? 'Use #' : 'Use ♭';
    displayCurrentLines();
}

// Toggle auto-resize
function toggleAutoResize() {
    autoResizeText = !autoResizeText;
    
    if (autoResizeText) {
        autoResizeToggle.classList.add('active');
        lyricsContainer.classList.add('auto-resize');
        lyricsContainer.style.removeProperty('font-size');
    } else {
        autoResizeToggle.classList.remove('active');
        lyricsContainer.classList.remove('auto-resize');
        updateFontSize();
    }
}

// Toggle between chord names and numerals
function toggleNumerals() {
    showNumerals = !showNumerals;
    
    // Update the toggle button text
    const numeralsToggle = document.getElementById('numerals-toggle');
    if (numeralsToggle) {
        numeralsToggle.textContent = showNumerals ? 'Show Chords' : 'Show Numerals';
        numeralsToggle.classList.toggle('active', showNumerals);
    }
    
    // Redisplay the lines with the new setting
    displayCurrentLines();
}

// Get the chord text to display (either the chord name or its numeral)
function getChordDisplayText(chord) {
    if (showNumerals) {
        return chordToNumeral(chord);
    } else {
        return transposeChord(chord);
    }
}

// Set up event listeners
function setupEventListeners() {
    // Navigation buttons
    prevBtn.addEventListener('click', goToPreviousLines);
    nextBtn.addEventListener('click', goToNextLines);
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
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
    });
    
    // Lines to display control
    linesToDisplaySelect.addEventListener('change', () => {
        linesToDisplay = parseInt(linesToDisplaySelect.value);
        displayCurrentLines();
    });
    
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
    
    // Show/hide controls
    showControlsBtn.addEventListener('click', () => toggleControls());
    
    // Auto-resize toggle
    autoResizeToggle.addEventListener('click', toggleAutoResize);
    
    // Create and add the numerals toggle button to the chords section
    const chordsSection = document.querySelector('.panel-section:nth-child(2) .controls');
    if (chordsSection) {
        const numeralsToggle = document.createElement('button');
        numeralsToggle.id = 'numerals-toggle';
        numeralsToggle.textContent = 'Show Numerals';
        numeralsToggle.setAttribute('aria-label', 'Toggle between chord names and numerals');
        numeralsToggle.addEventListener('click', toggleNumerals);
        chordsSection.appendChild(numeralsToggle);
    }
    
    // Handle window resize
    window.addEventListener('resize', updateContainerWidth);
    
    // Close key dropdown when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('#key-select-btn') && !event.target.closest('#key-dropdown')) {
            keyDropdown.classList.remove('show');
        }
    });
}

// Initialize the app
function init() {
    console.log("Initializing app...");
    
    // Set up event listeners first
    setupEventListeners();
    
    // Then display the lines
    displayCurrentLines();
    
    // Highlight the selected key
    highlightSelectedKey();
    
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

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
