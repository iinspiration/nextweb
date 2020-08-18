import { css } from '@emotion/core'

export default function getGlobalStyles(variables) {
  return css`
    html,
    body {
      padding: 3rem 1rem;
      margin: 0;
      min-height: 100%;
      font-family: 'Open Sans', sans-serif;
      font-size: 16px;
      color: ${variables.colors.text.dark};
      line-height: 1.5;
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
    h1,
    h2,
    h3 {
      color: ${variables.colors.link};
    }
    h2 {
      border-bottom: 1px solid ${variables.colors.background.darkGray};
      padding-bottom: 10px;
    }
    h3 {
      font-size: 24px;
      margin: 5px 0;
    }
    a,
    button {
      outline: none;
      cursor: pointer;
    }
  `
}
