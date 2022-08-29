import logo from './logo.svg';
import './App.css';
import Forum from './components/Forum';
const axios = require('axios');

function App() {

  const getSig = (address, nonce) => {
    axios.get(`https://3dq0uoq813.execute-api.us-east-1.amazonaws.com/users/${address}/${nonce}`, {
    }).then(response => {
      const {sig} = response.data;
      return sig;
    })
  }

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
