import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --color-background: #141414;
  --color-text: #f8f8f2;
  --color-green: #50fa7b;
  --color-black: #141414;

  font-size: 62.5%;
}

* {
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  font-family: 'Gothic A1', sans-serif;
  color: var(--color-text);
  box-sizing: border-box;

  &:first-child {
  margin-top: 0 !important;
  margin-left: 0 !important;
  }

  &:last-child {
    margin-bottom: 0 !important;
    margin-right: 0 !important;
  }
}

html,
body,
#root {
  height: 100vh;
  scroll-behavior: smooth;
  background-color: var(--color-background);
}

#root {
  display: flex;
}

#top-line {
  background: linear-gradient(45deg, #4d19e6, #b219e6, #e619b3);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 2px;
}

/* selection */
::-moz-selection {
  color: var(--color-text);
  background: #4d19e6;
}

::selection {
  color: var(--color-text);
  background: #4d19e6;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-button {
  display: none;
}

::-webkit-scrollbar-thumb {
  background-color: #636363;
  border-radius: 2px;
}

::-webkit-scrollbar-track {
  background-color: var(--color-background);
}

::-webkit-scrollbar-track-piece {
  background-color: var(--color-background);
}

a {
  color: inherit;
  text-decoration: none;
}

@media (max-width: 1024px) {
  :root {
    font-size: 50%;
  }
}
`;
