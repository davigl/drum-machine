import React, { useRef, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { setDisplay } from '~/redux/actions/drum';

import { ButtonEightBits, ButtonWrapper } from './styles';

export default function Button({
  name, id, audioFile, audioName
}) {
  const audioRef = useRef(null);
  const dispatch = useDispatch();
  const playMusic = useCallback(
    () => {
      audioRef.current.play();
      setDisplay(dispatch, audioName);
    }, [audioName, dispatch]
  );

  useEffect(() => {
    function downHandler({ key }) {
      if (key.toLowerCase() === name.toLowerCase()) {
        playMusic();
      }
    }

    window.addEventListener('keydown', downHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, [audioName, dispatch, name, playMusic]);

  return (
    <ButtonWrapper onClick={playMusic} className="drum-pad" id={id}>
      <ButtonEightBits>{name}</ButtonEightBits>
      <audio src={audioFile} ref={audioRef} className="clip" id={id}>
        <track kind="captions" />
      </audio>
    </ButtonWrapper>
  );
}
