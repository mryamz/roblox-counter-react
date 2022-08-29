import { useEffect, useState } from "react";


function Forum() {
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

    return (
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
            <button>
                Hit API
            </button>
        </forum>
    )

}

export default Forum;