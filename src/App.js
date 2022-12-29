import './App.css';
import { getAuth } from 'firebase/auth';
import app from './firebase.init';

function App() {

  const auth = getAuth(app);
  return (
    <div className="App">
      <button>Sign in by Googles</button>
    </div>
  );
}

export default App;
