import React from 'react';
import { useSelector } from 'react-redux';

import Button from '~/components/Button';

import {
  tomOne, tomTwo, tomThree, SnareOne, SnareTwo, SnareThree, HatOpen, HHClosed, Kick
} from './audios';
import {
  DrumName, DrumWrapper, MachineName, ButtonsContainer, Display, DisplayLabel
} from './styles';

export default function Drum() {
  const drum = useSelector((state) => state.drum);

  return (
    <DrumWrapper id="drum-machine">
      <DrumName> DRUM </DrumName>
      <MachineName> MACHINE </MachineName>
      <Display id="display">
        <DisplayLabel>Display</DisplayLabel>
        {drum.display}
      </Display>
      <ButtonsContainer>
        <Button name="Q" id="Q" audioFile={tomOne} audioName="Tom 1" />
        <Button name="W" id="W" audioFile={tomTwo} audioName="Tom 2" />
        <Button name="E" id="E" audioFile={tomThree} audioName="Tom 3" />
        <Button name="A" id="A" audioFile={SnareOne} audioName="Snare 1" />
        <Button name="S" id="S" audioFile={SnareTwo} audioName="Snare 2" />
        <Button name="D" id="D" audioFile={SnareThree} audioName="Snare 3" />
        <Button name="Z" id="Z" audioFile={HatOpen} audioName="Hat Open" />
        <Button name="X" id="X" audioFile={HHClosed} audioName="HH Closed" />
        <Button name="C" id="C" audioFile={Kick} audioName="Kick" />
      </ButtonsContainer>
    </DrumWrapper>
  );
}
