import './App.css';
import { getAuth } from 'firebase/auth';
import app from './firebase.init';

const auth = getAuth(app);

function App() {
 const handleGoogleSignIn = () =>{
  console.log("warking")
 };


  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Sign in by Googles</button>
    </div>
  );
}

export default App;
