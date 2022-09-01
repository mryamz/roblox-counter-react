import { ethers } from 'ethers'
import React from 'react'
const counterAbi = require("../abi/counter.json")


function SigEntry({ sigs }) {

    const handleSigClick = async(sig) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        const signer = provider.getSigner();
        const counter = new ethers.Contract('0xB236F455045D8eb6Da61Bc4522c08421A227817F', counterAbi, provider);

        counter.connect(signer).incr(sig[1], sig[0]);
    }

    return sigs.map((sig, index) => (
        <div>
            <button onClick={() => handleSigClick(sig)}>
                {`${sig[0]} ${sig[1]}`}
            </button>
        </div>
        )
    )
}

export default SigEntry
