import React, { useState } from 'react'
import './why.scss'

function Why(props) {
    const [number, setNumber] = useState(props.number)
    const [text, setText] = useState(props.text)
    const [clas, setClass] = useState(props.class)
    return (
        <div className={`why ${clas}`} >
            <h2 className="why__header">{number}</h2>
            <hr/>
            <span className="why__text">
                <p>{text}</p>
            </span>
        </div>
    )
}

export default Why
