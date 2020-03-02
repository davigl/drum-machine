import styled from 'styled-components';

import { _drum, _machine } from '~/assets/styles/partials/_animations';
import { colors } from '~/assets/styles/partials/_variables';

export const DrumContainer = styled.div;

export const DrumName = styled.div`
  animation: ${_drum} 1s ease infinite;
  color: #FB4264;
  font-size: 5vw;
  line-height: 5vw;
  text-shadow: 0 0 3vw #F40A35;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 9vw;
    line-height: 12vw;
  }
`;

export const MachineName = styled(DrumName)`
  animation: ${_machine} 1s ease-in-out infinite;
  color: #426DFB;
  text-shadow: 0 0 3vw #2356FF;
`;

export const ButtonsContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  margin-top: 20px;
  height: 250px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const Display = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #343434;
  width: 80%;
  height: 80px;
  margin-top: 35px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  border: 5px ${colors['light-shades']} solid;
`;

export const DisplayLabel = styled.label`
  position: absolute;
  top: -15px;
  background-color: #343434;
  padding: 7px;
`;

export const DrumWrapper = styled.div``;
