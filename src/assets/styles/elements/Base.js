import { createGlobalStyle } from 'styled-components';

import Bits from '~/assets/fonts/8Bit.TTF';
import background from '~/assets/images/background.png';

import { colors } from '../partials/_variables';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: '8Bits';
    src: url(${Bits});
  }
  body {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: '8Bits';
    background-image: url(${background});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    color: ${colors['light-shades']};
  }
  button {
    color: ${colors['light-shades']};
    font-family: '8Bits';
    font-size: 25px;
    cursor: pointer;
  }
  button:focus {
    outline: none;
  }
  button:active {
    transform: translateY(4px);
  }
`;

export default GlobalStyle;
