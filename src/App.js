import logo from './logo.svg';
import './App.css';
import Forum from './components/Forum';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <h1>Roblox Ethereum Full Stack Dapp Demo</h1>
      <p>Roblox -{'>'} API -{'>'} Database -{'>'} Dapp-{'>'} MetaMask -{'>'} Smart Contract</p>
        <Forum></Forum>
      </header>
    </div>
  );
}

export default App;
