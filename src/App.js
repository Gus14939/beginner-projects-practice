// import logo from './logo.svg';
import './App.css';
import Accordion from './accordion/Accordion';
import RandomColour from './randomColour/RandomColour';

function App() {
  return (
    <div className="App">

      {/* Accordion component */}
      <Accordion />
      {/* Random colour component */}
      <RandomColour />
    </div>
  );
}

export default App;
