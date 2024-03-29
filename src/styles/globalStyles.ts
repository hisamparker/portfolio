import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --background: hsl(0, 0%, 15%);
    --primaryLight: hsl(0, 6%, 72%);
    --primaryText: hsl(0, 6%, 83%);
    --primaryDark: hsl(0, 0%, 12%);
    --primary: hsl(0, 0%, 21%);
    --highlight : white;
    --lowlight: black;
    --primaryHover: hsla(0, 0%, 100%, 0.1);
    --primaryBorder: hsl(0deg 0% 29%);
    --error: hsl(6, 66%, 48%);
    --errorLight: hsl(5, 70%, 54%);
    --success: hsl(173, 100%, 24%);
    --successLight: hsl(174, 100%, 29%);
    --maxWidth: 1200px;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--background);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .wrapper {
    max-width: var(--maxWidth);
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--primaryLight);
    .scroll-content {
      background-color: var(--background);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--primaryDark);
      .scrollbar-thumb-y {
        background: var(--primaryLight);
      }
    }
  }
`;
export default GlobalStyles;
