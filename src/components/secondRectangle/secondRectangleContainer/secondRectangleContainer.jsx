import React from 'react'
import LeftBlock from '../leftBlock/leftBlock'
import RightBlock from '../rightBlock/rightBlock'
import './secondRectangleContainer.scss'

function SecondRectangleContainer(){
    return(
        <div className='second-container'>
            <LeftBlock />
            <RightBlock />
        </div>
    )
}


export default SecondRectangleContainer