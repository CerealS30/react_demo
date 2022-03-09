import logo from './logo.svg';
import './App.css';
import Addition from './components/addition/Addition.js';
import Subs from './components/subs/Subs.js';
import Mul from './components/mul/Mul.js';
import Div from './components/div/Div.js';
import Sin from './components/sin/Sin.js';

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
	  <Div />
    <Sin />

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
