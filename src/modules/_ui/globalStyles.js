import { css } from '@emotion/core'

export default function getGlobalStyles(variables) {
  return css`
    html,
    body {
      padding: 0;
      margin: 0;
      min-height: 100%;
      color: ${variables.colors.text.primary};
      background-color: #eee;
      font-family: 'sukhumvit';
      font-size: 16px;
      overflow-x: hidden;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    img {
      width: 100%;
      max-width: 100%;
      height: auto;
    }
    a {
      color: ${variables.colors.link};
      font-weight: bold;
    }
    a,
    button {
      outline: none;
      cursor: pointer;
    }
    strong {
      font-weight: bold;
    }
    * {
      box-sizing: border-box;
    }
    h1 {
      font-size: 2.5em;
      font-weight: bold;
    }
    h2 {
      font-size: 2em;
      font-weight: bold;
    }
    h3 {
      font-size: 1.5em;
      font-weight: bold;
    }
  `
}
