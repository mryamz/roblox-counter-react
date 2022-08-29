import { useEffect, useState } from "react";
import SigEntry from "./SigEntry";
const axios = require('axios');


function Forum({ onHitAPI }) {
    const [nonce, setNonce] = useState('');
    const [haveMetamask, sethaveMetamask] = useState(true);
    const [isConnected, setIsConnected] = useState(false);
    const [accountAddress, setAccountAddress] = useState('');

    const { ethereum } = window;

    const handleWalletClick = async e => {
        try {
            if (!ethereum) {
                sethaveMetamask(false);
            }
            const accounts = await ethereum.request({
                method: 'eth_requestAccounts',
            });
            setAccountAddress(accounts[0]);
            setIsConnected(true);
        } catch (error) {
            setIsConnected(false);
        }
    }

    const handleChange = e => {
        setNonce(e.target.value);
    }

    useEffect(() => {
        const checkMetamaskAvailability = async () => {
            if (!ethereum) {
                sethaveMetamask(false);
            }
            sethaveMetamask(true);
        };
        checkMetamaskAvailability();
    }, []);


    const [sigs, setsigs] = useState([])

    const getSig = async () => {

        try {
            const response = await axios.get(`https://3dq0uoq813.execute-api.us-east-1.amazonaws.com/users/${accountAddress}/${nonce}`);
            const { sig } = response.data;
            setsigs([sig ? sig : 'bad api call', ...sigs])
        } catch (error) {
            setsigs([error, ...sigs])
        }
    }

    return (
        <div>
            <forum>
                <button onClick={handleWalletClick}>
                    {accountAddress ? accountAddress : 'Connect MetaMask Wallet'}
                </button>
                <input
                    type='text'
                    value={nonce}
                    placeHolder='Enter Nonce for API'
                    onChange={handleChange}
                />
                <button onClick={getSig}>
                    Hit API
                </button>
            </forum>
            <h1>Game Admin Signatures</h1>
            <SigEntry sigs={sigs}></SigEntry>
        </div>

    )

}

export default Forum;