import React, { useState } from 'react'
import './why.css'

function Why(props) {
    const [number, setNumber] = useState(props.number)
    const [text, setText] = useState(props.text)
    const [clas, setClass] = useState(props.class)
    console.log(clas)
    return (
        <div className={`why ${clas}`} >
            <h2>{number}</h2>
            <hr/>
            <span>
               
                <p>{text}</p>
            </span>
        </div>
    )
}

export default Why
