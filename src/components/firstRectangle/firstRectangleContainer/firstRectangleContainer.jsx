import React from 'react'
import Header from '../header/header'
import WhoWeAre from '../whoWeAre/whoWeAre'
import './firstRectangleContainer.scss'

function FirstRectangleContainer(){
    return(
        <div className="first-rectangle">
            <Header />
            <WhoWeAre />
        </div>
    )
}

export default FirstRectangleContainer