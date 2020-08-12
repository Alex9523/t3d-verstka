import React from 'react'
import CardIndustries from './CardIndustries/cardIndustries'
import './thirdRectangleContainer.css'

function ThirdRectangleContainer(){
    return(
        <div className="third-rectangle">
            <div className='third-rectangle__title'><p>INDUSTRIES</p></div>
            <CardIndustries />
        </div>
    )
}

export default ThirdRectangleContainer