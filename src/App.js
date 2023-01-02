import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from './firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      })
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then( result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error => {
      console.error(error);
    })
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        setUser({});
      });
  }


  return (
    <div className="App">
      {
        user.uid ? <button onClick={handleSignOut}>Sign out</button>
          :
          <>
            <button onClick={handleGoogleSignIn}>Google SignIn</button>
            <button onClick={handleGithubSignIn}>Github SignIn</button>
          </>

      }
      <h1>Name: {user.displayName}</h1>
      <p>I know your email address: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
