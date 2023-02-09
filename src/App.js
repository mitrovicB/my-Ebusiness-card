import './App.css';
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Info />
        <About />
        <Interests />
      </div>
    </div>
  );
}

export default App;
