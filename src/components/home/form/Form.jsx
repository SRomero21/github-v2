import React from 'react'

//Styles
import "./form.style.css"
const form = ({handlerValue, handlerSubmit}) => {
    return (
        <form onSubmit={(e) => handlerSubmit(e)} className="formulario">
            <input onChange={({target}) => handlerValue(target)}
                type="text" placeholder="Search.." required="required" />
            <button type="submit"><i className="fa fa-search"></i></button>
        </form>
    )
}

export default form
