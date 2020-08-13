import React from 'react'
import Form from './form/form'
import './formWraper.scss'

function FormWraper(){
    return(
        <div className="form-wraper">
            <div className="form-wraper__people-pictures" />
            <Form />
        </div>
    )
}

export default FormWraper