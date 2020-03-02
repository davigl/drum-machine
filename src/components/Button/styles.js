import styled from 'styled-components';

import buttonImage from '~/assets/images/button.png';

export const ButtonEightBits = styled.button`
  height: calc(76px * 0.8);
  width: calc(177px * 0.8);
  background-image: url(${buttonImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;

  @media (max-width: 768px) {
    width: calc(177px * 0.7);
    height: calc(76px * 0.7);
    font-size: 15px;
  }
`;

export const ButtonWrapper = styled.div``;
