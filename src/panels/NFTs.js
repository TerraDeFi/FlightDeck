import React from 'react'
import {Row, Col} from "react-bootstrap"

import NFTcard from '../components/NFTcard.js'

const NFTs = () => {
    let data = [
        { "id" : "0", "img" : "./nfts/0.png", "primary" : "120", "current" : "150" },
        { "id" : "1", "img" : "./nfts/1.png", "primary" : "121", "current" : "90" },
        { "id" : "2", "img" : "./nfts/2.png", "primary" : "220", "current" : "220" },
        { "id" : "3", "img" : "./nfts/3.png", "primary" : "123", "current" : "220" },
        { "id" : "4", "img" : "./nfts/4.png", "primary" : "124", "current" : "220" },
        { "id" : "5", "img" : "./nfts/5.png", "primary" : "125", "current" : "220" },
        { "id" : "6", "img" : "./nfts/6.png", "primary" : "120", "current" : "220" },
        { "id" : "7", "img" : "./nfts/7.png", "primary" : "220", "current" : "220" },
        { "id" : "8", "img" : "./nfts/8.png", "primary" : "122", "current" : "220" },
        { "id" : "9", "img" : "./nfts/9.png", "primary" : "357", "current" : "220" },
        { "id" : "10", "img" : "./nfts/10.png", "primary" : "124", "current" : "220" }
    ]

    const gridStyle = {
        padding: "15px"
    }

    let itemList = data.map((item, index) => {
        return <NFTcard key={index} id={item.id} img={item.img} primary={item.primary} current={item.current} />
    })
    
    return (
        <Row style={gridStyle}>
            {itemList}
        </Row>
    );
}

export default NFTs;