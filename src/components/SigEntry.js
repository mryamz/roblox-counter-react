import { ethers } from 'ethers'
import React from 'react'

function SigEntry({ sigs }) {

    const handleSigClick = async(sig) => {
        // call smart contract

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
