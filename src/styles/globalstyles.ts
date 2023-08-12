import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {

         /* Grey Scale Palette */
        --color-gray-100: #f2f2f2;
        --color-gray-200: #d9d9d9;
        --color-gray-300: #808080;
        --color-gray-400: #333333;
        --color-gray-500: #262626;
        --color-gray-600: #191919;
        --color-gray-700: #0c0c0c;
        
        /*Produto */
        --color-purple:     #8284fa;
        --color-purpledark: #5e60ce;
        --color-blue:       #4ea8de;
        --color-blue-dark:  #1d6e9f;
        
        /*Feedback */ 
        --color-danger: #e25858;

        /* radius */
        --base-radius: 0.5rem;
    }

    /*Reset */
    * {
        margin:  0;
        padding: 0;
        box-sizing:      border-box;
        list-style:      none;
        text-decoration: none;
        outline:         none;
    }

    body {
        height: 100vh;
        #root {
            height: inherit;
        }
        background-color: #1E1E1E;
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    html, body, input, label, button, textarea, p, span {
        font-family: 'Inter', sans-serif;
    }

    h1 {
        color: black;
        font-size: 20px;
    }
`;
