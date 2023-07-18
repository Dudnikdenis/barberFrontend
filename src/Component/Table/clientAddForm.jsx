import React from "react";
import { Field, reduxForm } from 'redux-form'
import cs from './table.module.css';

const ClientAddForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component = {"input"} className={cs.input} name={"date"}  placeholder = "Дата"/> 
            <Field component = {"input"} className={cs.input} name={"time"}  placeholder = "Время"/> 
            <Field component = {"input"} name={"clientName"}  placeholder = "Имя клиента"/>
            <Field component = {"input"} name={"service"} placeholder = "Услуга"/>
            <Field component = {"input"} name={"comment"} placeholder = "Коментарий"/>
            <button>Записать</button>
        </form> 
    )
}

const ClientAddReduxForm = reduxForm({form: 'ClientAddForm'})(ClientAddForm)

export default ClientAddReduxForm;

// "lineId": 0,
//      "userId": 1,
//      "date": "2020-01-01",
//       "time": "09:30",
//      "clientName": "Магомет",
//      "procedureName": "Стрижка",
//   "procedureCost": "1000",
//   "procedureDiscount": "10%",
//      "comment": "Предупредить за 30 минут"