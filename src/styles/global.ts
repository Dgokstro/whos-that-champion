import { css } from "@emotion/react";

export const globalStyles = css`
  :root {
    font-family: roboto;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    display: flex;
    min-width: 320px;
    width: 100vw;
    min-height: 100vh;
  }
`;

export default globalStyles;
