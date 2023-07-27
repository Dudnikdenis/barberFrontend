import React,{useEffect}from "react";
import cs from './table.module.css';
import TableClient from "./tableClient";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ClientAddReduxForm from "./clientAddForm";


let TableHeader = (props) => {

    const AddClient = (formData) => {
        let result = {
            lineId: 0,
            userId: props.master.userId,
            date: formData.date,
            time: formData.time,
            clientName: formData.clientName,
            procedureName: formData.service,
            procedureCost: "1000",
            procedureDiscount: "10%",
            comment: formData.comment
        }
        props.addRecordsUser(props.master.userId, result)
    }

   const {userID} = useParams(); //используется вместо withRouter
    useEffect( () => {
        if(!props.isDidMount)
        {            
            props.getClient(userID, "01-01-2020", "02-01-2020");
            props.SetIsDidMountCreator(true);
        }
        
    },[]);
    
    
    return (
        <div className={cs.tab}>
            <span className={cs.span}>
                <Link className={cs.link} to="/">Главная страница </Link>
            </span>
            <span className={cs.span}>
                <Link className={cs.link} to="/users">Назад</Link>
            </span>
            {props.userName?  <div>
                <div className={cs.header}>{props.userName}</div>
                {props.master.map(m=>
                <div>
                    <div className={cs.header}>{m.date}</div> 
                    {m.userRecords.length===0? <TableClient client={m.userRecords} {...props}/> : "Нет записей"}
                </div>
                )
            }
            </div> : "Подождите"}
            
            <ClientAddReduxForm onSubmit={AddClient}></ClientAddReduxForm>
            
        </div>
        
    )
}

export default TableHeader;