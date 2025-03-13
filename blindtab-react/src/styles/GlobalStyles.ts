import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --auto-resize-font-size: clamp(16px, calc(4vw + 4vh), 200px);
    
    /* Light theme variables */
    --background-color: #ffffff;
    --text-color: #333333;
    --secondary-text-color: #666666;
    --border-color: #dddddd;
    --hover-color: #f0f0f0;
    --primary-color: #4a90e2;
    --primary-hover-color: #357abd;
    --success-color: #28a745;
    --success-hover-color: #218838;
    --warning-color: #ffc107;
    --warning-hover-color: #e0a800;
    --danger-color: #dc3545;
    --danger-hover-color: #c82333;
    --modal-background: #fefefe;
    --modal-shadow: rgba(0, 0, 0, 0.2);
  }

  body {
    font-family: 'Arial', sans-serif;
    transition: background-color 0.3s, color 0.3s;
    min-height: 100vh;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin: 0;
    background-color: var(--background-color);
    color: var(--text-color);
  }

  body.dark-theme {
    --background-color: #222222;
    --text-color: #f0f0f0;
    --secondary-text-color: #aaaaaa;
    --border-color: #555555;
    --hover-color: #444444;
    --primary-color: #7ab5ff;
    --primary-hover-color: #5a95df;
    --success-color: #28a745;
    --success-hover-color: #218838;
    --warning-color: #ffc107;
    --warning-hover-color: #e0a800;
    --danger-color: #dc3545;
    --danger-hover-color: #c82333;
    --modal-background: #333333;
    --modal-shadow: rgba(0, 0, 0, 0.4);
  }

  #root {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  button {
    cursor: pointer;
  }

  /* Add a pulse animation for the auto-resize button */
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export default GlobalStyles; 