import React from 'react';
import DrumPad from './DrumPad';

const PadBank = ({ handleDisplay, power, volume }) => {
  const pads = [
    {
      key: 'Q',
      id: 'Heater-1',
      url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3',
    },
    {
      key: 'W',
      id: 'Heater-2',
      url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3',
    },
    {
      key: 'E',
      id: 'Heater-3',
      url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3',
    },
    {
      key: 'A',
      id: 'Heater-4',
      url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3',
    },
    {
      key: 'S',
      id: 'Clap',
      url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3',
    },
    {
      key: 'D',
      id: 'Open-HH',
      url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3',
    },
    {
      key: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3',
    },
    {
      key: 'X',
      id: 'Kick',
      url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3',
    },
    {
      key: 'C',
      id: 'Closed-HH',
      url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3',
    },
  ];

  return (
    <div className='grid grid-cols-3 gap-1 w-full pr-12 pl-12 pt-9 pb-9'>
      {pads.map((pad) => (
        <DrumPad
          key={pad.key}
          keyTrigger={pad.key}
          id={pad.id}
          url={pad.url}
          handleDisplay={handleDisplay}
          power={power}
          volume={volume}
        />
      ))}
    </div>
  );
};

export default PadBank;
