import logo from './logo.svg';
import './App.css';
const axios = require('axios');

function App() {

  const getSig = (address, nonce) => {
    Axios.get(`https://3dq0uoq813.execute-api.us-east-1.amazonaws.com/users/${address}/${nonce}`).then(response => {
      const {sig} = response.data;
      console.log("FROM API: ")
      console.log(sig)
    })
  }

  getSig('0x1817F384f0344d4699A1a28b8d5c61F7df6Fd470', 0);
  getSig('0x1817F384f0344d4699A1a28b8d5c61F7df6Fd470', 1);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Roblox Counter Dapp
        </p>
      </header>
    </div>
  );
}

export default App;
