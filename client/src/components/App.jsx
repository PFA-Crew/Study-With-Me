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
  // const [showCreateDialog, setShowCreateDialog] = useState(false);
  // const [showLoginDialog, setShowLoginDialog] = useState(false);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  // const clientContext = createContext();
  const [clientDataObject, setClientData] = useState({});

  // const handleCreateDialogOpen = () => {
  //   setShowCreateDialog(true);
  // };

  // const handleCreateDialogClose = () => {
  //   setShowCreateDialog(false);
  // };
  // const handleLoginDialogOpen = () => {
  //   setShowLoginDialog(true);
  // };

  // const handleLoginDialogClose = () => {
  //   setShowLoginDialog(false);
  // };

  const handleCreateUser = async (createUserData) => {
    try {
      // make enclosing function async
      const postURL = '/auth/create';
      const fetchResponse = await fetch(postURL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(createUserData),
      });
      const data = await fetchResponse.json();
      console.log(data);
      return data;
    } catch (error) {
      // handle error
      console.log(error);
      return {};
    }

    // handleCreateDialogClose();
  };
  const handleLoginUser = async (loginUserData) => {
    try {
      // make enclosing function async
      const postURL = '/auth/login';
      const fetchResponse = await fetch(postURL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginUserData),
      });
      const data = await fetchResponse.json();
      // figure out how to populate state from this response
      console.log(data);
      return data;

      // setLayouts(data);
    } catch (error) {
      // handle error
      console.log(error);
      return {};
    }

    // handleLoginDialogClose();
  };

  // function CreateUserDialog() {
  //   return (
  //     <dialog open onClose={handleCreateDialogClose}>
  //       <input
  //         type="text"
  //         ref={createRefUsername}
  //         placeholder="username 😎"
  //       />
  //       <input
  //         type="text"
  //         ref={createRefPassword}
  //         placeholder="password 😤"
  //       />
  //       <button onClick={handleCreateUser}>create account</button>
  //     </dialog>
  //   );
  // }

  // function LoginUserDialog() {
  //   return (
  //     <dialog open onClose={handleLoginDialogClose}>
  //       <input
  //         type="text"
  //         ref={loginRefUsername}
  //         placeholder="username 🔫"
  //       />
  //       <input
  //         type="text"
  //         ref={loginRefPassword}
  //         placeholder="password 😻"
  //       />
  //       <button onClick={handleLoginUser}>Login</button>
  //     </dialog>
  //   );
  // }

  // function CreateUser({ onClick }) {
  //   return (
  //     <button className="create-user" onClick={onClick}> Create Account</button>
  //   );
  // }
  // function LoginUser({ onClick }) {
  //   return (
  //     <button className="login-user" onClick={onClick}> Login</button>
  //   );
  // }

  // two buttons on modal to either sign in or sign up
  // click button that activates get request to sign in
  // goes to auth route, creates document in mongo db
  // login goes to auth route
  // on login, pass data from json into appropriate props - will need layout identifiers
  // <div className='app'>
  //     <div className='account'>
  //         {showCreateDialog ? (
  //         <CreateUserDialog onClose={handleCreateDialogClose}/>
  //         ) : (
  //         <CreateUser onClick ={handleCreateDialogOpen}/>)}

  //         {showLoginDialog ? (
  //         <LoginUserDialog onClose={handleLoginDialogClose}/>
  //         ) : (
  //         <LoginUser onClick ={handleLoginDialogOpen}/>)}
  //     </div>

  // </div>
  // const displayResourcePad = () => {
  //   return (
  //     <ResourceNotepad />
  //   )
  // }
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

          <div id="resourceLayout">
            <ul>Resources:</ul>
            <hr />
            <div id="resourcesContainer">
              <li><a href="#" onClick={handleResourceOpen}>Best Study Practice</a></li>
              <li><a href="https://www.webmd.com/balance/stress-management/stress-relief-breathing-techniques" onClick={handleResourceOpen}>Breathing Exercises</a></li>
              <li><a href="https://www.mayoclinic.org/healthy-lifestyle/adult-health/multimedia/stretching/sls-20076525" onClick={handleResourceOpen}>Desk Stretches</a></li>

            </div>
          </div>
        </div>
        <div id="desktop">
          <Desktop notes={notes} />
        </div>
      </section>
    </main>
  );
}

export default App;
