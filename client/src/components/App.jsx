import React, {
  useState, useEffect, useRef, createContext,
} from 'react';
import './assets/App.scss';
import LoginComponent from './LoginComponent.jsx';
import Notes from './Notes.jsx';
import Desktop from './Desktop.jsx';
import Resource from './Resources.jsx';
import Ducky from './Ducky.jsx';
import ResourceNotepad from './ResourceNotepad.jsx';
import FidgetSpinner from './FidgetSpinner.jsx'

function App() {
  // handleLoginDialogClose();

  const [notes, addNote] = useState();

  const handleResourceClose = () => {
    addNote();
  };

  const handleResourceOpen = (event) => {
    // fetch request made on click to backend ->
    // needs noteID?
    event.preventDefault();
    addNote(<ResourceNotepad handleResourceClose={handleResourceClose} />);
  };

  const handleResourceClick = (event) => {
    event.preventDefault();
    console.log(event);
    addNote();
  };
  // https://allinworld99.blogspot.com/2016/05/create-simple-notepad-using-javascript.html

  // Customization Modal State
  const [ customWindow, setCustomWindow ] = useState(false);

  // Widget State Handler (Ducky enabled by default)
  const [ customizationOptions, setCustomizationOptions ] = useState(['ducky', '', '', ''])

  // Ducky Enabler/Disabler State & Functionality
  const [ duckyEnabled, setDuckyEnabled ] = useState(false)
  const duckySetter = () => {
    setDuckyEnabled(!duckyEnabled)
    if (duckyEnabled === false) {
      const updatedOptions = customizationOptions.map(element => {
        if (element === 'ducky') return '';
        return element;
      });
      console.log(updatedOptions)
      setCustomizationOptions(updatedOptions);
    } else {
      let hasBeenReplaced = false
      const updatedOptions = customizationOptions.map((element) => {
        if (element === '' && !hasBeenReplaced) {
          hasBeenReplaced = true;
          return 'ducky';
        }
        return element;
      });
      console.log(updatedOptions)
      setCustomizationOptions(updatedOptions);
    }
  }

  // Ducky Chooser
  const [ duckyVisual, setDuckyVisual ] = useState("yellow")
  const handleDuckyVisual = (event) => {
    const duckyVisualSet = event.target.value;
    setDuckyVisual(duckyVisualSet);
  }

  // Ducky Position Handler
  // Outstanding Issues: Dropdown menu will not retain the selected position, cannot change back to Top Left without resetting, Ducky will overpower any existing widget in position, reselecting current position will kill the ducky
  const [ duckyPosition, setDuckyPosition ] = useState('topleft')
  const handleDuckyPosition = (event) => {
    const duckySpotSet = event.target.value;
  
    if (duckySpotSet === "topleft") {
      const updatedOptions = customizationOptions.map((element, index) => {
        if (element === 'ducky') return '';
        if (index === 0) return 'ducky';
        return element;
      });
      setCustomizationOptions(updatedOptions);
    } else if (duckySpotSet === "topright") {
      const updatedOptions = customizationOptions.map((element, index) => {
        if (element === 'ducky') return '';
        if (index === 1) return 'ducky';
        return element;
      });
      setCustomizationOptions(updatedOptions);
    } else if (duckySpotSet === "bottomleft") {
      const updatedOptions = customizationOptions.map((element, index) => {
        if (element === 'ducky') return '';
        if (index === 2) return 'ducky';
        return element;
      });
      setCustomizationOptions(updatedOptions);
    } else if (duckySpotSet === "bottomright") {
      const updatedOptions = customizationOptions.map((element, index) => {
        if (element === 'ducky') return '';
        if (index === 3) return 'ducky';
        return element;
      });
      setCustomizationOptions(updatedOptions);
    }
  };

  // Fidget Spinner Enabler/Disabler State & Functionality
  const [ fidgetEnabled, setFidgetEnabled ] = useState(true)
  const fidgetSetter = () => {
    setFidgetEnabled(!fidgetEnabled);
    if (fidgetEnabled === false) {
      const updatedOptions = customizationOptions.map(element => {
        if (element === 'fidget') return '';
        return element;
      });
      console.log(updatedOptions)
      setCustomizationOptions(updatedOptions);
    } else {
      let hasBeenReplaced = false
      const updatedOptions = customizationOptions.map((element) => {
        if (element === '' && !hasBeenReplaced) {
          hasBeenReplaced = true;
          return 'fidget';
        }
        return element;
      });
      console.log(updatedOptions)
      setCustomizationOptions(updatedOptions);
    }
  };

  // Pomodoro Timer Enabler/Disabler State
  const [ timerEnabled, settimerEnabled ] = useState(true)
  const timerSetter = () => {
    settimerEnabled(!timerEnabled);
    if (timerEnabled === false) {
      const updatedOptions = customizationOptions.map(element => {
        if (element === 'timer') return '';
        return element;
      });
      console.log(updatedOptions)
      setCustomizationOptions(updatedOptions);
    } else {
      let hasBeenReplaced = false
      const updatedOptions = customizationOptions.map((element) => {
        if (element === '' && !hasBeenReplaced) {
          hasBeenReplaced = true;
          return 'timer';
        }
        return element;
      });
      console.log(updatedOptions)
      setCustomizationOptions(updatedOptions);
    }
  };

  const [ resourceURL, resourceURLSetter ] = useState('')
  const [ resourceWindow, setResourceWindow ] = useState(false);

  const handleResourceClick1 = (event) => {
    event.preventDefault();
    const url = event.target.href;
    resourceURLSetter(url);
    setResourceWindow(true);
  }

  return (
  /*
    <>
      <div className="loginContainer loginContainerBorder">
        <LoginComponent
    handleCreateUser={handleCreateUser}
    handleLoginUser={handleLoginUser}
    clientDataObject={clientDataObject}
    setClientData={setClientData}
        />              { <createDesktop account=> }
        { <function createDesktop => (props) => if account
        !== {} return <Desktop account=accoutndata />> }

      </div>
      <div className="waveBackground" />
    </>

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />{button}</div>
    );
  }    */

    // INTERFACE
    <main>
      <header>
        <div id="hero"><p>Study With Me</p></div>
        <div id="user">
          <p>Pink Fairy Armadillo</p>
          <img id="userphoto" src="https://cdn.donmai.us/original/11/3d/113df6ccf7a23bfc9bf47e850a229159.jpg" alt="PFA" />
          <span className="material-symbols-rounded" onClick={() => {setCustomWindow(true)}}>settings</span>
        </div>
      </header>

      <section id="layout">
        <div id="navigation">
          <Notes />

          <div id="resourceLayout">
            <ul>Resources</ul>
            <hr />
            <div id="personalResourcesContainer">
              <li><a href="https://react.dev/reference/react" onClick={handleResourceClick1}>Intro to React Hooks</a></li>
              <li><a href="https://www.mongodb.com/docs/atlas/" onClick={handleResourceClick1}>MongoDB Atlas</a></li>
              <li><a href="https://flexboxfroggy.com/" onClick={handleResourceClick1}>Flexbox Froggy</a></li>
            </div>
            <ul>Study Resources</ul>
            <hr />
            <div id="studyResourcesContainer">
              <li><a href="#" onClick={handleResourceOpen}>Best Study Practices</a></li>
              <li><a href="https://www.webmd.com/balance/stress-management/stress-relief-breathing-techniques" onClick={handleResourceOpen}>Breathing Exercises</a></li>
              <li><a href="https://www.mayoclinic.org/healthy-lifestyle/adult-health/multimedia/stretching/sls-20076525" onClick={handleResourceOpen}>Desk Stretches</a></li>
            </div>
          </div>

        </div>

        <div id="desktop">
          <Desktop customizationOptions={customizationOptions} notes={notes} duckyVisual={duckyVisual} resourceURL={resourceURL} resourceWindow={resourceWindow} setResourceWindow={setResourceWindow}/>
        </div>
      </section>

      {/* Customization Modal */}
      {customWindow && (
          <div className='customModal'>
            <div className='customizationContent'>
              <span className="material-symbols-rounded" id='customClose' onClick={() => setCustomWindow(false)}>close</span>
              <div>
                <label>Lucky Ducky Disabled: </label><input type="checkbox" id="duckCheck" checked={duckyEnabled} onChange={duckySetter}></input>
              </div>
              <div>
                <label>Choose a Lucky Ducky:</label>
                <select name="duckies" id="duckies" onChange={handleDuckyVisual} value={duckyVisual}>
                  <option value="yellow">Yellow</option>
                  <option value="blunicorn">Blunicorn</option>
                  <option value="black">Black</option>
                  <option value="santa">Santa</option>
                  <option value="sailor">Sailor</option>
                  <option value="crown">Crown</option>
                  <option value="constable">Constable</option>
                </select> 
              </div>
              <div>
                <label>Lucky Ducky Position:</label>
                <select name="duckiesPos" id="duckiesPos"  value={duckyPosition} onChange={handleDuckyPosition}>
                  <option value="topleft">Top Left</option>
                  <option value="topright">Top Right</option>
                  <option value="bottomleft">Bottom Left</option>
                  <option value="bottomright">Bottom Right</option>
                </select> 
              </div>
              <div>
                <label>Pomodoro Timer Disabled: </label><input type="checkbox" id="pomCheck" defaultChecked={timerEnabled} onChange={timerSetter}></input>
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
                <label>Fidget Spinner Disabled: </label><input type="checkbox" id="fidgetCheck" defaultChecked={fidgetEnabled} onChange={fidgetSetter}></input>
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
        )}
    </main>
  );
}

export default App;
