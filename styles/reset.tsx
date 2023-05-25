import { css } from "@emotion/react";

export const reset = css`
  @font-face {
    font-family: "nexongoth";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  * {
    font-family: "nexongoth";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.4;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(179, 179, 179);
    border-radius: 25px;
  }

  html {
    font-size: 16px;
  }

  body {
    font-size: 1rem;
    color: #000;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  ol,
  ul,
  li {
    list-style: none;
  }
`;
