import React from 'react'
import {Row, Col} from "react-bootstrap"

// import NFTcard from '../components/NFTcard.js'
import {Statusupdown} from '../components/CommonTags.js';

let data = [
    { "id" : "0", "img" : "./nfts/0.png", "primary" : "127", "current" : "200" },
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

const NFTs = ( { color, size } ) => {

    const NFTcard = ({id, primary, current}) => {
        let luna = 100
        let luna_percent = (Number.parseFloat(current) - Number.parseFloat(primary)) / luna
        let luna_diff = ""

        let height = parseInt(size)+60+"px";
        let width = parseInt(size)+10+"px";
        let fontSize = parseInt(parseInt(size)/5.5)+"px";

        const nftCardStyle = {
            backgroundColor: color,
            borderRadius: "10px",
            fontSize: fontSize,
            fontWeight: 700,
            margin: "5px 10px",
            padding: "5px",
            height: height,
            width: width,
            textAlign: "center"
        }

        if(luna_percent > 0) {
            luna_diff = <p className="text-secondary mb-0">{luna_percent} Luna</p>
        }

        return (
            <Col
                xl={2} lg={3} md={3} sm={4} xs={4}
                style={nftCardStyle}
                key={id}>
                <img 
                    src={require("../img/nfts/"+id+".png")}
                    width={size}
                    height={size}
                    className="rounded-7"></img>
                <p className="mb-0">
                    <Statusupdown
                        key={id}
                        primary={primary}
                        current={current} /></p>
                {luna_diff}
            </Col>
        );
    }

    const itemList = data.map((item, index) => {
        return <NFTcard 
                    key={index}
                    id={item.id}
                    img={item.img}
                    primary={item.primary}
                    current={item.current}
                />
        }
    )
    
    return (
        <Row className="d-flex justify-content-between">
            {itemList}
        </Row>
    );
}

export default NFTs;