import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyClassComponent from './ClassComponent';
import MyFunctionalComponent from './FunctionalComponent';
import { LoginForm } from './LoginForm';
import { CompA } from './components/CompA';
import { CompB } from './components/CompB';
import LifeCycleMethods from './components/LifeCycleMethods';

function App() {

  const [localSwitch, toggleSwitch] = React.useState(true);

  const [count, setCount] = React.useState(0);

  const updateToggleSwitch = () => {
    toggleSwitch(!localSwitch);
  }

  return (
    <div className="App">
      <header className="App-header">

        <button onClick={() => updateToggleSwitch()}>Toggle</button>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        {/* <LifeCycleMethods count={count}/> */}
        <CompA propSwitch = {localSwitch}/>
        <CompB />
        {/* <LoginForm /> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
      </header>
    </div>
  );
}

export default App;
