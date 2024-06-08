import React from 'react';

const Controls = ({ displayText, power, setPower, volume, setVolume }) => {
  const handlePowerChange = (e) => {
    setPower(e.target.checked);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  return (
    <div className='flex flex-col items-center justify-center pb-8 space-y-4 md:mr-8 md:ml-8'>
      <div className='flex flex-col items-center'>
        <label className='mb-2 text-xl font-bold'>Power</label>
        <label className='switch'>
          <input
            type='checkbox'
            checked={power}
            onChange={handlePowerChange}
            className='hidden'
          />
          <div
            className={`slider-wrapper bg-gray-300 rounded-full w-16 h-8 flex items-center ${
              power ? 'bg-gray-500 text-right' : ''
            }`}
          >
            <div
              className={`slider-thumb w-6 h-6 bg-white rounded-full ${
                power ? 'transform translate-x-10 bg-red-700' : ''
              }`}
            ></div>
          </div>
        </label>
      </div>
      <div
        id='display'
        className={`mt-4 text-lg border-2 min-h-10 min-w-32 flex justify-center items-center text-center ${
          power ? 'bg-red-400' : 'bg-slate-400'
        }`}
      >
        {power && displayText}
      </div>
      <div id='volume' className='mt-4 flex flex-col items-center '>
        <label className='block text-lg'>Volume</label>
        <input
          type='range'
          min='0'
          max='1'
          step='0.01'
          value={volume}
          onChange={handleVolumeChange}
          disabled={!power}
          className='w-full mt-2'
        />
      </div>
    </div>
  );
};

export default Controls;
