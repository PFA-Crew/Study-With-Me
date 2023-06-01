import React from 'react';

const CustomizationModal = ({
  duckyEnabled,
  duckySetter,
  handleDuckyVisual,
  duckyVisual,
  duckyPosition,
  handleDuckyPosition,
  timerEnabled,
  timerSetter,
  fidgetEnabled,
  fidgetSetter,
  setShowCustomizationModal,
}) => {
  return (
    <div className='customModal'>
      <div className='customizationContent'>
        <span
          className='material-symbols-rounded'
          id='customClose'
          onClick={() => setShowCustomizationModal(false)}
        >
          close
        </span>
        <div>
          <label>Lucky Ducky Disabled: </label>
          <input
            type='checkbox'
            id='duckCheck'
            checked={duckyEnabled}
            onChange={duckySetter}
          ></input>
        </div>
        <div>
          <label>Choose a Lucky Ducky:</label>
          <select
            name='duckies'
            id='duckies'
            onChange={handleDuckyVisual}
            value={duckyVisual}
          >
            <option value='yellow'>Yellow</option>
            <option value='blunicorn'>Blunicorn</option>
            <option value='black'>Black</option>
            <option value='santa'>Santa</option>
            <option value='sailor'>Sailor</option>
            <option value='crown'>Crown</option>
            <option value='constable'>Constable</option>
          </select>
        </div>
        <div>
          <label>Lucky Ducky Position:</label>
          <select
            name='duckiesPos'
            id='duckiesPos'
            value={duckyPosition}
            onChange={handleDuckyPosition}
          >
            <option value='topleft'>Top Left</option>
            <option value='topright'>Top Right</option>
            <option value='bottomleft'>Bottom Left</option>
            <option value='bottomright'>Bottom Right</option>
          </select>
        </div>
        <div>
          <label>Pomodoro Timer Disabled: </label>
          <input
            type='checkbox'
            id='pomCheck'
            defaultChecked={timerEnabled}
            onChange={timerSetter}
          ></input>
        </div>
        {/* Future option: specify location for Pomodoro Timer */}
        {/* <div>
            <label for="pomPos">Pomodoro Timer Position:</label>
            <select name="pomPos" id="pomPos">
              <option value="topleftt">Top Left</option>
              <option value="topright">Top Right</option>
              <option value="bottomleft">Bottom Left</option>
              <option value="bottomright">Bottom Right</option>
            </select>
          </div> */}
        <div>
          <label>Fidget Spinner Disabled: </label>
          <input
            type='checkbox'
            id='fidgetCheck'
            defaultChecked={fidgetEnabled}
            onChange={fidgetSetter}
          ></input>
        </div>
        {/* Future option: specify location for Fidget Spinner */}
        {/* <div>
            <label for="fidgetPos">Fidget Spinner Position:</label>
            <select name="fidgetPos" id="fidgetPos">
              <option value="topleftt">Top Left</option>
              <option value="topright">Top Right</option>
              <option value="bottomleft">Bottom Left</option>
              <option value="bottomright">Bottom Right</option>
            </select>
          </div> */}
      </div>
    </div>
  );
};

export default CustomizationModal;
