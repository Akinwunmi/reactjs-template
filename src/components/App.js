import React, {useState} from 'react';
import logo from '../logo.svg';
import './App.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <img src={logo} alt="logo"/>
      Test applicatie
      <br /><br />
      Knop met teller:
      <br /><br />
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </div>
  );
}

export default App;