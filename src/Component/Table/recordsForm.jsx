import React from "react";
import { Field, reduxForm } from 'redux-form'

const RecordsForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit}> 
            <Field placeholder={props.Records.time} component = {"input"} name={"time"} /> 
            <Field placeholder={props.Records.clientName} component = {"input"} name={"clientName"}  />
            <Field placeholder={props.Records.procedureName} component = {"input"} name={"service"} />
            <Field placeholder={props.Records.comment} component = {"input"} name={"comment"} />
        </form> 
    )
}

const RecordsReduxForm = reduxForm({form: 'RecordsForm'})(RecordsForm)

export default RecordsReduxForm;
