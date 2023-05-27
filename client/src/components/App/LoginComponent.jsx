import React from 'react';

function App({ handleCreateUser, handleLoginUser }) {
  const submitForm = (event) => {
    event.preventDefault();
    const buttonClicked = event.nativeEvent.submitter.id; // is there a better way to do this?
    const formData = new FormData(event.target);
    const clientDataObject = Object.fromEntries(formData); // {username: hello, password: world}
    if (buttonClicked === 'loginButton') handleLoginUser();
    else if (buttonClicked === 'createButton') handleCreateUser();
  };
  /* no way to gradually switch background colors */
  // const switchToNight = (event) => {
  //   console.log(document.getElementsByTagName('body')[0]);
  //   document.getElementsByTagName('body')[0].style.background
  //   = 'linear-gradient(#25003e 8%, #054a91 90%, #054A91 100%)';
  // };

  return (
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
  );
}

export default App;

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
