import React, {Component} from 'react';
import './App.css';

import ParentComponent from './components/ParentComponent';
// import EventBind from './components/EventBind';
// import ClassClick from './components/ClassClick';
// import FunctionClick from './components/FunctionClick';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Message from './components/Message';
// import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
      <ParentComponent/>
      {/* <EventBind /> */}
      {/* <ClassClick/> */}
      {/* <FunctionClick/> */}
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Greet name="Salinpaul" lastname="Valooran">
        <button>hello</button>
      </Greet>
      <Greet name="Bruce" lastname="Vane">
        <p>This is children props</p>
      </Greet>
      <Welcome/> */}
      <br />
      <br />
      TESTING
    </div>
  );
}

export default App;
