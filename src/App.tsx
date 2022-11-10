import React, {Component} from 'react';
import './App.css';

import StyleSheets from './components/StyleSheets';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
// import NameList1 from './components/NameList1';
// import NameList from './components/NameList';
// import UserGreeting from './components/UserGreeting';
// import ParentComponent from './components/ParentComponent';
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
      <h1 className='error'>Error</h1>
      <h1 className={styles.sucess}>Sucess</h1>
      <Inline/>
      <StyleSheets primary={false}/>
      {/* <NameList1/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
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
