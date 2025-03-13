# BlindTab React Component Structure

This document outlines the component structure for the React version of BlindTab, focusing on maximizing space for the leadsheet text to help visually impaired users.

## Component Hierarchy

```
App
├── ThemeProvider
│   └── BlindTabApp
│       ├── Header
│       │   ├── SongInfo
│       │   └── SongLibraryButton
│       ├── ControlsPanel
│       │   ├── DisplaySettings
│       │   │   ├── ThemeToggle
│       │   │   ├── FontSizeControls
│       │   │   └── LinesDisplayControls
│       │   ├── ChordSettings
│       │   │   ├── KeySelector
│       │   │   └── AccidentalToggle (flats/sharps)
│       │   ├── SongManagement
│       │   │   ├── EditSongButton
│       │   │   ├── ImportSongButton
│       │   │   └── ExportSongButton
│       │   └── AutoScrollSettings
│       │       ├── AutoScrollToggle
│       │       └── BPMControls
│       ├── LeadsheetDisplay
│       │   └── LyricsContainer
│       │       ├── LineContainer
│       │       │   ├── ChordContainer
│       │       │   │   └── Chord
│       │       │   └── LyricLine
│       │       └── FixedPositionContainer
│       ├── Navigation
│       │   ├── PreviousButton
│       │   └── NextButton
│       └── Modals
│           ├── SongEditorModal
│           ├── SongSelectionModal
│           │   ├── SearchBar
│           │   ├── SortControls
│           │   └── SongList
│           │       └── SongItem
│           └── AddSongModal
│               └── SongForm
```

## Component Descriptions

### Core Components

- **App**: The root component that wraps everything
- **ThemeProvider**: Manages theme state (light/dark)
- **BlindTabApp**: Main application container

### Header Components

- **Header**: Contains song information and library button
- **SongInfo**: Displays current song title and artist
- **SongLibraryButton**: Button to open song selection modal

### Control Panel Components

- **ControlsPanel**: Sidebar with all settings
- **DisplaySettings**: Font size and display options
- **ChordSettings**: Key selection and accidental preferences
- **SongManagement**: Edit, import, export functionality
- **AutoScrollSettings**: Auto-scroll toggle and BPM controls

### Leadsheet Display Components

- **LeadsheetDisplay**: Main content area
- **LyricsContainer**: Container for lyrics and chords
- **LineContainer**: Individual line of lyrics with chords
- **ChordContainer**: Container for chord positioning
- **Chord**: Individual chord display
- **LyricLine**: Line of lyrics text

### Navigation Components

- **Navigation**: Previous/next buttons
- **PreviousButton**: Go to previous lines
- **NextButton**: Go to next lines

### Modal Components

- **SongEditorModal**: Edit current song
- **SongSelectionModal**: Browse and select songs
- **AddSongModal**: Add new song form

## State Management

For state management, we'll use React's Context API with hooks:

- **ThemeContext**: Manages light/dark theme
- **SongContext**: Manages current song data and library
- **DisplayContext**: Manages display settings (font size, lines to display)
- **TransposeContext**: Manages key transposition

## Data Flow

1. Song data is loaded from markdown files
2. Data is parsed and stored in SongContext
3. LeadsheetDisplay renders the current song
4. User interactions update the appropriate context
5. Components re-render based on context changes

## Accessibility Features

- Large text support with auto-resize
- High contrast themes
- Keyboard navigation
- ARIA attributes for screen readers
- Focus management for modals

## Future Enhancements

- Server-side song storage
- User accounts and preferences
- Mobile app with React Native
- Offline support with PWA
- Screen reader optimizations 