import React, {Component} from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
      <Counter/>
      {/* <Message/> */}
      {/* <Greet name="Salinpaul" lastname="Valooran">
        <button>hello</button>
      </Greet>
      <Greet name="Bruce" lastname="Vane">
        <p>This is children props</p>
      </Greet>
      <Welcome/> */}
    </div>
  );
}

export default App;
