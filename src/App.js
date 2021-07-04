import logo from './logo.svg';
import './App.css';
import Button from '@hig/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HIG Testing App
        </p>
        <Button title="Hello, world!" />
      </header>
    </div>
  );
}

export default App;
