import logo from './logo.svg';
import './App.css';
import Addition from './components/addition/Addition.js';
import Subs from './components/subs/Subs.js';
import Mul from './components/mul/Mul.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Demo calculator - by Miguel
        </p>

	  <Addition />
	  <Subs />
	  <Mul />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
