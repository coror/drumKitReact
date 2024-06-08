import React, { useEffect, useCallback } from 'react';

const DrumPad = ({ keyTrigger, id, url, handleDisplay, power, volume }) => {
  const playSound = useCallback(() => {
    if (!power) return; // Do nothing if the power is off
    const audio = document.getElementById(keyTrigger);
    audio.volume = volume;
    audio.currentTime = 0;
    audio.play();
    handleDisplay(id);
  }, [keyTrigger, id, power, volume, handleDisplay]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key.toUpperCase() === keyTrigger) {
        playSound();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [keyTrigger, playSound]);

  return (
    <div
      id={id}
      onClick={playSound}
      className='flex items-center justify-center text-center border-2 rounded-xl pr-3 pl-3 pt-2 pb-2 shadow-2xl bg-slate-400 '
    >
      {keyTrigger}
      <audio className='clip' id={keyTrigger} src={url} />
    </div>
  );
};

export default DrumPad;
