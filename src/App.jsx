import { useState } from 'react';
import Controls from './components/Controls';
import PadBank from './components/PadBank';

function App() {
  const [displayText, setDisplayText] = useState('');
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(0.5);

  const handleDisplay = (text) => {
    setDisplayText(text);
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-slate-400'>
      <div
        id='drum-machine'
        className='border-4 border-red-500 rounded flex flex-col md:flex-row md:w-[40rem] md:h-[20rem] bg-slate-200'
      >
        <PadBank handleDisplay={handleDisplay} power={power} volume={volume} />
        <Controls
          displayText={displayText}
          power={power}
          setPower={setPower}
          volume={volume}
          setVolume={setVolume}
        />
      </div>
    </div>
  );
}

export default App;
