import React, { useState, useEffect, useRef, createContext } from 'react';
import './assets/App.scss';
import LoginComponent from './LoginComponent.jsx';
import Notes from './Notes.jsx';
import Notepad from './Notepad.jsx';
import Desktop from './Desktop.jsx';
import Ducky from './Ducky.jsx';
import FidgetSpinner from './FidgetSpinner.jsx';
import CustomizationModal from './CustomizationModal.jsx';

function MainContainer() {
  // clientDataObject -> {user: {username: "hello", duckColor: "yellow"}, notes: []}
  // handleLoginDialogClose();
  const [noteContent, setNoteContent] = useState({ title: '', content: '' });
  const [notes, addNote] = useState([]);

  // State to keep:
  const [totalNotes, setTotalNotes] = useState([]);
  const [username, setUsername] = useState('');

  // Customization Modal State
  const [showCustomizationModal, setShowCustomizationModal] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch('/notes', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) {
          throw new Error('request for updated notes failed');
        }
        const results = await response.json();
        setTotalNotes(results.notes);
        setUsername(results.username);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNotes();
  }, []);

  // Widget State Handler (Ducky enabled by default)
  const [customizationOptions, setCustomizationOptions] = useState([
    'ducky',
    '',
    '',
    '',
  ]);

  // Ducky Enabler/Disabler State & Functionality
  const [duckyEnabled, setDuckyEnabled] = useState(false);
  const duckySetter = () => {
    setDuckyEnabled(!duckyEnabled);
    if (duckyEnabled === false) {
      const updatedOptions = customizationOptions.map(element => {
        if (element === 'ducky') return '';
        return element;
      });
      console.log(updatedOptions);
      setCustomizationOptions(updatedOptions);
    } else {
      let hasBeenReplaced = false;
      const updatedOptions = customizationOptions.map(element => {
        if (element === '' && !hasBeenReplaced) {
          hasBeenReplaced = true;
          return 'ducky';
        }
        return element;
      });
      console.log(updatedOptions);
      setCustomizationOptions(updatedOptions);
    }
  };

  // Ducky Chooser
  const [duckyVisual, setDuckyVisual] = useState('yellow');
  const handleDuckyVisual = event => {
    const duckyVisualSet = event.target.value;
    setDuckyVisual(duckyVisualSet);
  };

  // Ducky Position Handler
  // Outstanding Issues: Dropdown menu will not retain the selected position, cannot change back to Top Left without resetting, Ducky will overpower any existing widget in position, reselecting current position will kill the ducky
  const [duckyPosition, setDuckyPosition] = useState('topleft');
  const handleDuckyPosition = event => {
    const duckySpotSet = event.target.value;

    if (duckySpotSet === 'topleft') {
      const updatedOptions = customizationOptions.map((element, index) => {
        if (element === 'ducky') return '';
        if (index === 0) return 'ducky';
        return element;
      });
      setCustomizationOptions(updatedOptions);
    } else if (duckySpotSet === 'topright') {
      const updatedOptions = customizationOptions.map((element, index) => {
        if (element === 'ducky') return '';
        if (index === 1) return 'ducky';
        return element;
      });
      setCustomizationOptions(updatedOptions);
    } else if (duckySpotSet === 'bottomleft') {
      const updatedOptions = customizationOptions.map((element, index) => {
        if (element === 'ducky') return '';
        if (index === 2) return 'ducky';
        return element;
      });
      setCustomizationOptions(updatedOptions);
    } else if (duckySpotSet === 'bottomright') {
      const updatedOptions = customizationOptions.map((element, index) => {
        if (element === 'ducky') return '';
        if (index === 3) return 'ducky';
        return element;
      });
      setCustomizationOptions(updatedOptions);
    }
  };

  // Fidget Spinner Enabler/Disabler State & Functionality
  const [fidgetEnabled, setFidgetEnabled] = useState(true);
  const fidgetSetter = () => {
    setFidgetEnabled(!fidgetEnabled);
    if (fidgetEnabled === false) {
      const updatedOptions = customizationOptions.map(element => {
        if (element === 'fidget') return '';
        return element;
      });
      console.log(updatedOptions);
      setCustomizationOptions(updatedOptions);
    } else {
      let hasBeenReplaced = false;
      const updatedOptions = customizationOptions.map(element => {
        if (element === '' && !hasBeenReplaced) {
          hasBeenReplaced = true;
          return 'fidget';
        }
        return element;
      });
      console.log(updatedOptions);
      setCustomizationOptions(updatedOptions);
    }
  };

  // Pomodoro Timer Enabler/Disabler State
  const [timerEnabled, settimerEnabled] = useState(true);
  const timerSetter = () => {
    settimerEnabled(!timerEnabled);
    if (timerEnabled === false) {
      const updatedOptions = customizationOptions.map(element => {
        if (element === 'timer') return '';
        return element;
      });
      console.log(updatedOptions);
      setCustomizationOptions(updatedOptions);
    } else {
      let hasBeenReplaced = false;
      const updatedOptions = customizationOptions.map(element => {
        if (element === '' && !hasBeenReplaced) {
          hasBeenReplaced = true;
          return 'timer';
        }
        return element;
      });
      console.log(updatedOptions);
      setCustomizationOptions(updatedOptions);
    }
  };

  const [resourceURL, resourceURLSetter] = useState('');
  const [resourceWindow, setResourceWindow] = useState(false);

  const handleResourceClick1 = event => {
    event.preventDefault();
    const url = event.target.href;
    resourceURLSetter(url);
    setResourceWindow(true);
  };

  return (
    // INTERFACE
    <main>
      <header>
        <div id='hero'>
          <p>Study With Me</p>
        </div>
        <div id='user'>
          {/* <p>Pink Fairy Armadillo</p> */}
          <p>{username}</p>
          <img
            id='userphoto'
            src='https://cdn.donmai.us/original/11/3d/113df6ccf7a23bfc9bf47e850a229159.jpg'
            alt='PFA'
          />
          <span
            className='material-symbols-rounded'
            onClick={() => {
              setShowCustomizationModal(true);
            }}
          >
            settings
          </span>
        </div>
      </header>

      <section id='layout'>
        <div id='navigation'>
          {/* <Notes totalNotes={totalNotes}  notes={clientDataObject.notes} /> */}
          <Notes
            setTotalNotes={setTotalNotes}
            setNoteContent={setNoteContent}
            totalNotes={totalNotes}
          />

          <div id='resourceLayout'>
            <ul>Resources</ul>
            <hr />
            <div id='personalResourcesContainer'>
              <li>
                <a
                  href='https://react.dev/reference/react'
                  onClick={handleResourceClick1}
                >
                  Intro to React Hooks
                </a>
              </li>
              <li>
                <a
                  href='https://www.mongodb.com/docs/atlas/'
                  onClick={handleResourceClick1}
                >
                  MongoDB Atlas
                </a>
              </li>
              <li>
                <a
                  href='https://cssgrid-generator.netlify.app/'
                  onClick={handleResourceClick1}
                >
                  CSS Grid Generator
                </a>
              </li>
            </div>
            <ul>Study Resources</ul>
            <hr />
            <div id='studyResourcesContainer'>
              {/* <li><a href="#" onClick={handleResourceOpen}>Best Study Practices</a></li> */}
              <li>
                <a
                  href='https://www.indeed.com/career-advice/career-development/how-to-take-break-from-studying'
                  onClick={handleResourceClick1}
                >
                  How to Take a Break from Studying
                </a>
              </li>

              {/* <li><a href="https://www.webmd.com/balance/stress-management/stress-relief-breathing-techniques" onClick={handleResourceOpen}>Breathing Exercises</a></li> */}
              <li>
                <a
                  href='https://www.webmd.com/balance/stress-management/stress-relief-breathing-techniques'
                  onClick={handleResourceClick1}
                >
                  Breathing Exercises
                </a>
              </li>

              {/* <li><a href="https://www.mayoclinic.org/healthy-lifestyle/adult-health/multimedia/stretching/sls-20076525" onClick={handleResourceOpen}>Desk Stretches</a></li> */}
              <li>
                <a
                  href='https://www.healthline.com/health/deskercise'
                  onClick={handleResourceClick1}
                >
                  Desk Stretches
                </a>
              </li>
            </div>
          </div>
        </div>
        {/* noteContent={noteContent}
        setTotalNotes={setTotalNotes}
        notes={clientDataObject.notes} */}
        <div id='desktop'>
          <Desktop
            customizationOptions={customizationOptions}
            // setTotalNotes={setTotalNotes}
            // notes={clientDataObject.notes}
            duckyVisual={duckyVisual}
            resourceURL={resourceURL}
            resourceWindow={resourceWindow}
            setResourceWindow={setResourceWindow}
            username={username}
            // noteContent={noteContent}
          />
        </div>
        <div className='cell' id='cell6'>
          <Notepad
            username={username}
            totalNotes={totalNotes}
            setTotalNotes={setTotalNotes}
          />
        </div>
      </section>
      {showCustomizationModal && (
        <CustomizationModal
          duckyEnabled={duckyEnabled}
          duckySetter={duckySetter}
          handleDuckyVisual={handleDuckyVisual}
          duckyVisual={duckyVisual}
          duckyPosition={duckyPosition}
          handleDuckyPosition={handleDuckyPosition}
          timerEnabled={timerEnabled}
          timerSetter={timerSetter}
          fidgetEnabled={fidgetEnabled}
          fidgetSetter={fidgetSetter}
          setShowCustomizationModal={setShowCustomizationModal}
        />
      )}
      <div className='waveBackground' />
    </main>
  );
}

export default MainContainer;
