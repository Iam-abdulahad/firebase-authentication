import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from './firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      })
  };


  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Sign in by Googles</button>
      <h1>Name: {user.displayName}</h1>
      <p>I know your email address: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
