import './App.css';
import ClickCounterTwo from './components/ClickCounterTwo';

import Counter from './components/Counter';
import HoverConterTwo from './components/HoverConterTwo';
function App() {
  return (
    <div className="App">
      <br />

      <Counter render={ (count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo>
        )}
      />

      <Counter render={ (count, incrementCount) => (
          <HoverConterTwo count={count} incrementCount={incrementCount}></HoverConterTwo>
        )}
      />

      <br /><br />
      <div>
        Testing
      </div>
    </div>
  );
}

export default App;











// PREVIOUS CODE

// // import ClickCounterTwo from './components/ClickCounterTwo';
// // import HoverConterTwo from './components/HoverConterTwo';
// // import User from './components/User';
// // import ClickCounter from './components/ClickCounter';
// // import HoverCounter from './components/HoverCounter';
// // import Hero from './Hero';
// // import ErrorBoundary from './components/ErrorBoundary';
// // import PortalDemo from './components/PortalDemo';
// // import FRParentInput from './components/FRParentInput';
// // import FocusInput from './components/FocusInput'; 
// // import RefsDemo from './components/RefsDemo';
// // import ParentComp from './components/ParentComp';
// // import PureComp from './components/PureComp';
// // import FragmentDemo from './components/FragmentDemo';
// // import FragmentDemo2 from './components/FragmentDemo2';
// // import Table from './components/Table';
// function App() {
//   return (
//     <div className="App">
//       <br />
// {/* 
//       <ClickCounterTwo/>
//       <HoverConterTwo/>
//       <User render={(isLoggedIn) => isLoggedIn ? 'Salinpaul' : 'Guset'}/> */}
//       {/* <ClickCounter name={'Salinpaul'}/> */}
//       {/* <HoverCounter name={'Valooran'}/> */}
//       {/* <ErrorBoundary>
//         <Hero heroName={"Batman"}/>
//       </ErrorBoundary>
//       <ErrorBoundary>
//         <Hero heroName={"Superman"}/>
//       </ErrorBoundary>
//       <ErrorBoundary>
//         <Hero heroName={"Joker"}/>
//       </ErrorBoundary> */}
      
      
//       {/* <PortalDemo/> */}
//       {/* <FRParentInput/> */}
//         {/* <FocusInput/> */}
//         {/* <RefsDemo/> */}
//         {/* <ParentComp/> */}
//         {/* <PureComp/> */}
//         {/* <Table/>
//       <FragmentDemo2/>
//       <FragmentDemo/> */}
//       <br /><br />
//       <div>
//         Testing
//       </div>
//     </div>
//   );
// }

// export default App;
