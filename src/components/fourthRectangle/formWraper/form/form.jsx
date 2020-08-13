import React from 'react'
import './form.scss'

function Form(){
    return(
        <form className="form">
            <h5 className="form__input-header">Hello</h5>
            <input type="text" className="form__input"></input>
            <h5 className="form__input-header">Email</h5>
            <input type="email" className="form__input"></input>
            <h5 className="form__input-header">Number</h5>
            <input type="number" className="form__input"></input>
            <button className="form__button">To get the consultation</button>
        </form>
    )
}

export default Form