import logo from './logo.svg';
import './App.css';
import Addition from './components/addition/Addition.js';
import Subs from './components/subs/Subs.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Demo calculator
        </p>

	  <Addition />
	  <Subs />

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
