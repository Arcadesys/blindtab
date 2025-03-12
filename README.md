# BlindTab - Accessible Lyrics Display

A simple, accessible web application for displaying song lyrics and chords with easy navigation.

## Features

- **Simple Display**: Shows two lines of lyrics and chords at a time for easy reading
- **Accessible Navigation**: 
  - Tap/click on left/right sides to navigate
  - Previous/Next buttons
  - Keyboard navigation (arrow keys and spacebar)
- **Accessibility Options**:
  - Adjustable font size
  - Light/Dark theme toggle
- **Chord Tools**:
  - Transpose chords up or down
  - Toggle between sharps (#) and flats (♭)
- **Responsive Design**: Works on both desktop and mobile browsers

## How to Use

1. Open `index.html` in any modern web browser
2. Navigate through the lyrics using:
   - The Previous/Next buttons
   - Clicking/tapping on the left or right side of the lyrics display
   - Using keyboard arrow keys (left/right or up/down) or spacebar
3. Adjust font size with the A+/A- buttons
4. Toggle between light and dark themes with the sun/moon button
5. Use the Transpose button to cycle through different key options
6. Toggle between sharps and flats notation with the "Use ♭" button

## Current Song

The app currently displays "Fake Plastic Trees" by Radiohead as a demo.

## Development

This is a simple vanilla JavaScript application with no dependencies. To modify:

1. Edit the HTML structure in `index.html`
2. Modify styles in `styles.css`
3. Update functionality in `script.js`

To add or change songs, modify the `songData` array in `script.js`.

## Future Enhancements

- Song selection menu
- Import/export song data
- Auto-scroll functionality
- Custom chord diagrams
- Transposition tools

## License

MIT 