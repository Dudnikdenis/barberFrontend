import React from "react";
import { Field, reduxForm } from 'redux-form'
import { Link, useLocation} from "react-router-dom";

const RecordsForm = (props) => {

    const location = useLocation();
    const { records, userId} = location.state;
    
    return (
        <div>
            <div>
                <Link to='/'>Главная страница</Link>
            </div>
            <div>
                <Link to={"/records/user/"+userId}>Назад</Link>
            </div>
            <form onSubmit={props.handleSubmit}> 
                <Field placeholder={records.time} component = {"input"} name={"time"} /> 
                <Field placeholder={records.clientName} component = {"input"} name={"clientName"}  />
                <Field placeholder={records.procedureName} component = {"input"} name={"service"} />
                <Field placeholder={records.comment} component = {"input"} name={"comment"} />
                <button>Сохранить</button>
            </form> 
        </div>
        
    )
}

const RecordsReduxForm = reduxForm({form: 'RecordsForm'})(RecordsForm)

export default RecordsReduxForm;
