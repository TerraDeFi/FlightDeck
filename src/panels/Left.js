import React from 'react'
import Icon from "react-crypto-icons"

import Panel from '../components/Panel.js'

const leftStyle = {

}

const TokenCombo = ({name}) => {
    return (
        <div>
            <Icon name='btc' size={30} /><span>{name}</span>
            <Icon />

        </div>
        
    )  
}

const Left = () => {
    return (
        <div className="p-5">
            <p ><span className="h4">Borrow</span> Slippage<span>&nbsp;&nbsp;5%</span></p>
            <p>Swap Asset</p>
            <Panel components={<TokenCombo name="UST" />} />
        </div>    
    )


}

export default Left