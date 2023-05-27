import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import LoginComponent from './LoginComponent.jsx';

function App() {
  // const [showCreateDialog, setShowCreateDialog] = useState(false);
  // const [showLoginDialog, setShowLoginDialog] = useState(false);
  const createRefUsername = useRef(null);
  const createRefPassword = useRef(null);
  const loginRefUsername = useRef(null);
  const loginRefPassword = useRef(null);

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

  const handleCreateUser = async (clientDataObject) => {
    try {
      // make enclosing function async
      const postURL = '/auth/create';
      const fetchResponse = await fetch(postURL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        // TODO: what/where is layouts?
        // if user is being created, shouldn't there be a layout predefined inside db?
        // body: JSON.stringify({ username: createRefUsername.current.value, password: createRefPassword.current.value, layouts }),
        body: JSON.stringify(clientDataObject),
      });
      const data = await fetchResponse.json();
      console.log(data);
    } catch (error) {
      // handle error
      console.log(error);
    }

    // handleCreateDialogClose();
  };
  const handleLoginUser = async (clientDataObject) => {
    try {
      // make enclosing function async
      const postURL = '/auth/login';
      const fetchResponse = await fetch(postURL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientDataObject),
      });
      const data = await fetchResponse.json();
      // figure out how to populate state from this response
      console.log(data);
      // setLayouts(data);
    } catch (error) {
      // handle error
      console.log(error);
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

  return (
    <>
      <div className="loginContainer loginContainerBorder">
        <LoginComponent handleCreateUser={handleCreateUser} handleLoginUser={handleLoginUser} />
      </div>
      <div className="waveBackground" />
    </>
  );
}

export default App;