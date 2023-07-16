import React,{useState, useEffect}from "react";
import cs from './table.module.css';
import TableClient from "./tableClient";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


let TableHeader = (props) => {
   //debugger;
   const params = useParams(); //используется вместо withRouter
    useEffect( () => {
        props.getClient(params.userID)
    },[]);
    
    
    return (
        <div className={cs.tab}>
            <Link to="/">Назад</Link>
            <div className={cs.header}>{props.master.userName}</div>
            <div className={cs.header}>{props.master.date}</div> 
            {props.master.userRecords? <TableClient client={props.master.userRecords}/> : "Подождите"}
            
        </div>
        
    )
}

export default TableHeader;