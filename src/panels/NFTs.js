import React from 'react'
import {Row, Col} from "react-bootstrap"

import NFTcard from '../components/NFTcard.js'

const NFTs = () => {
    let data = [
        { "id" : "0", "img" : "./nfts/0.png", "primary" : "120", "current" : "200" },
        { "id" : "1", "img" : "./nfts/1.png", "primary" : "121", "current" : "131" },
        { "id" : "2", "img" : "./nfts/2.png", "primary" : "200", "current" : "220" },
        { "id" : "3", "img" : "./nfts/3.png", "primary" : "168", "current" : "250" },
        { "id" : "4", "img" : "./nfts/4.png", "primary" : "124", "current" : "220" },
        { "id" : "5", "img" : "./nfts/5.png", "primary" : "180", "current" : "220" },
        { "id" : "6", "img" : "./nfts/6.png", "primary" : "178", "current" : "220" },
        { "id" : "7", "img" : "./nfts/7.png", "primary" : "219", "current" : "240" },
        { "id" : "8", "img" : "./nfts/8.png", "primary" : "122", "current" : "220" },
        { "id" : "9", "img" : "./nfts/9.png", "primary" : "102", "current" : "220" },
        { "id" : "10", "img" : "./nfts/10.png", "primary" : "104", "current" : "230" }
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