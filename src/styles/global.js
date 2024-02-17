import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.WHITE_900}
    }

    body, input, button, textarea {
        font-family: 'Roboto Slab', serif;
    }

    a { 
        text-decoration: none;
        cursor: pointer;
        transition: filter .2s;
    }

    button:hover, a:hover {
        filter: brightness(.9);
    }
`