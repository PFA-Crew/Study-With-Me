import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.scss';

function LoginComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await fetch('/auth/create', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (data.err) {
        setErrorMessage(data.err.message);
      } else if (data.username) {
        // successful sign-up, redirect to the app
        navigate('/app');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async () => {
    try {
      const postURL = '/auth/login';
      const fetchResponse = await fetch(postURL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await fetchResponse.json();
      if (data.err) {
        setErrorMessage(data.err.message);
      } else if (data.username) {
        // successful log-in, redirect to the app
        navigate('/app');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='loginPadding'>
      <div className='loginContainer loginContainerBorder'>
        <form onSubmit={e => e.preventDefault()}>
          <label htmlFor='username'>
            <p>Username:</p>
            <input
              type='text'
              id='username'
              name='username'
              required
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </label>
          <label htmlFor='password'>
            <p>Password:</p>
            <input
              type='password'
              id='password'
              name='password'
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
          <div className='loginButtonContainer'>
            <button
              className='submitButton'
              id='loginButton'
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className='submitButton'
              id='createButton'
              onClick={handleSignup}
            >
              Create Account
            </button>
          </div>
        </form>
        <span>{errorMessage}</span>
      </div>
      <div className='waveBackground' />
    </div>
  );
}

export default LoginComponent;
