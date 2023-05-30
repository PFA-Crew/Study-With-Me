import React, { useState } from 'react';
import '../index.scss';

function LoginComponent({ setClientData }) {
  // clientDataObject set to returned user
  // TODO: Add visuals for wrong login information
        // Loading gif for login
  const handleCreateUser = async (createUserData) => {
    try {
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
  };

  const handleLoginUser = async (loginUserData) => {
    try {
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