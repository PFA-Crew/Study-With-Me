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

function App() {
  // handleLoginDialogClose();

  const [notes, addNote] = useState();

  const handleResourceClick = (event) => {
    event.preventDefault();
    console.log(event);
    addNote();
  };
  // https://allinworld99.blogspot.com/2016/05/create-simple-notepad-using-javascript.html
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
        <div id="hero">Study With Me</div>
        <div id="user">
          <p>Pink Fairy Armadillo</p>
          <img id="userphoto" src="https://cdn.donmai.us/original/11/3d/113df6ccf7a23bfc9bf47e850a229159.jpg" alt="PFA" />
        </div>
      </header>

      <section id="layout">
        <div id="navigation">
          {/* hello world */}
          <Notes />
          {/* <Resource notes={ notes } addNote={addNote} /> */}
          <div id="resourceLayout">
            <ul>Resources:</ul>
            <hr />
            <div id="resourcesContainer">
              <li><a href="#" onClick={handleResourceClick} id="best-study-practice">Best Study Practice</a></li>
              <li><a href="https://www.webmd.com/balance/stress-management/stress-relief-breathing-techniques" onClick={handleResourceClick} id="breathing-exercises">Breathing Exercises</a></li>
              <li><a href="https://www.mayoclinic.org/healthy-lifestyle/adult-health/multimedia/stretching/sls-20076525" onClick={handleResourceClick} id="desk-stretches">Desk Stretches</a></li>
            </div>
          </div>
        </div>
        <div id="desktop">
          <Desktop />
        </div>
      </section>
    </main>
  );
}

export default App;
