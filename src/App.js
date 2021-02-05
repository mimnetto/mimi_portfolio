import logo from './logo.svg';
import './App.css';
import {useSpring, animated} from 'react-spring';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Mimi Netto's 2021 Portfolio
        </p>
        <a
          className="App-link"
          href="https://mimi-resume.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Current Portfolio
        </a>
      </header>
    </div>
  );
}

export default App;
