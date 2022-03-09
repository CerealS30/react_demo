import logo from './logo.svg';
import './App.css';
import Addition from './components/addition/Addition.js';
import Subs from './components/subs/Subs.js';
import Mul from './components/mul/Mul.js';
import Div from './components/div/Div.js';
import Sin from './components/sin/Sin.js';
import Cos from './components/cos/cos.js';
import Tan from './components/cos/tan.js';
import Ln from './components/ln/Ln.js';
import Exponent from './components/exponent/Exponent.js';
import Log from './components/log/Log.js';

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
    <Ln />
	  <Exponent />
	  <Log />
	<Cos />
	<Tan />

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
