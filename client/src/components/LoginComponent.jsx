import React, { useState } from 'react';
import '../index.scss';

function LoginComponent({ setClientData }) {
  // clientDataObject set to returned value of fetch
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
      setClientData(data)
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
      setClientData(data)
      return data;

      // setLayouts(data);
    } catch (error) {
      // handle error
      console.log(error);
      return {};
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    const buttonClicked = event.nativeEvent.submitter.id; // is there a better way to do this?
    const formData = new FormData(event.target);
    const userDataObject = Object.fromEntries(formData); // {username: hello, password: world}
    if (buttonClicked === 'loginButton') handleLoginUser(userDataObject);
    else if (buttonClicked === 'createButton') handleCreateUser(userDataObject);
  };

  return (
    <div className='loginPadding'>
      <div className="loginContainer loginContainerBorder">
        <form onSubmit={submitForm}>
          <label htmlFor="username">
            <p>Username:</p>
            <input type="text" id="username" name="username" required />
          </label>
          <label htmlFor="password">
            <p>Password:</p>
            <input type="password" id="password" name="password" required />
          </label>
          {/* pass in login/sign up */}
          <div className="loginButtonContainer">
            <input type="submit" value="Login" className="submitButton" id="loginButton" />
            <input type="submit" value="Create Account" className="submitButton" id="createButton" />
          </div>
        </form>
      </div>
      <div className="waveBackground" />
    </div>
  );
}

export default LoginComponent;

/*
FILE STRUCTURE:
 client
  - /src
    - index.html
    - index.js

    - /assets
      - Ducky.pngs
      - login.scss
      - waves.svg

    - /components
      - Login Component
      - login.scss
      - /Desktop
        - Desktop Component
         ////- Ducky
        - Fidget Spinner
        - Timer
        - Notes
        - Resources/ Study Resources

*/

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         localhost:8000/
//         <Route index element={<Desktop />} />
//         localhost:8000/login
//         <Route path='/login' element={<Login />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }
