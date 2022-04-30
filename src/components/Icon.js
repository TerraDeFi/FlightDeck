import React from 'react'

const Icon = ({name, size}) => {
    
    return <img src={require("../img/"+name+".png")} width={size} height={size}></img>
}

export default Icon