import  React from 'react';
import ChildPOC from './components/ChildPOC';
import ChildWorker from './components/WebWorker';
import DebounceComp from './components/Debounce';
import ThrottleComp from './components/Throttling';
function App() {
    return (
        <>
            <div>Hello React!</div>
            {/* <ChildPOC/> */}
            <ChildWorker/>
            <DebounceComp/>
            <ThrottleComp/>
        </>

    );
}
export default App;