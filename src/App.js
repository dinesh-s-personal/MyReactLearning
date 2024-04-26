import logo from './logo.svg';
import './App.css';
import MyClassComponent from './ClassComponent';
import MyFunctionalComponent from './FunctionalComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          <MyClassComponent text={"I am from app"} number={100}/>
          <MyFunctionalComponent text={"I am from app"} number={100}/>
        </div>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React JS
        </a>
      </header>
    </div>
  );
}

export default App;
