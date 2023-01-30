import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --light-primary: #2196F3;
    --light-secondary: #4CAF50;
    --light-tertiary: #03A9F4;
    --light-error: #F44336;

    --dark-primary: #2b4d66;
    --dark-secondary: #0077be;
    --dark-tertiary: #2e5c5f;
    --dark-error: #66232e;
}

@media (prefers-color-scheme: dark) {
    :root {
        --color-primary: var(--dark-primary);
        --color-secondary: var(--dark-secondary);
        --color-tertiary: var(--dark-tertiary);
        --color-error: var(--dark-error);
        --color-background: #101419;
        --color-text: #DDDDDD;
    }
}

@media (prefers-color-scheme: light) {
    :root {
        --color-primary: var(--light-primary);
        --color-secondary: var(--light-secondary);
        --color-tertiary: var(--light-tertiary);
        --color-error: var(--light-error);
        --color-background: #EFEFEF;
        --color-text: #101419;
    }
}

body {
    background-color: var(--color-background);
    color: var(--color-text);
    display: flex;
    display: flex;
    flex-direction: column;
    margin: 0px;
    min-height: 100vh;
    overflow-y: hidden;
    padding: 0;
}

#app {
    display: grid;
    flex: 1;
    grid-template-areas: "menu" "tool" "main" "stat";
    grid-template-rows: min-content min-content 1fr 24px;
    max-height: 100vh;
}
`;
