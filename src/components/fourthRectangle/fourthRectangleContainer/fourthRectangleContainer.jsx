import React from 'react'
import Logo from '../../firstRectangle/firstRectangleContainer/logo/logo'
import FormWraper from '../formWraper/formWraper'
import './fourthRectangleContainer.scss'

function FourthRectangleContainer(){
    return(
        <div className="fourth-container">
            <Logo />
            <FormWraper />
        </div>
    )
}

export default FourthRectangleContainer