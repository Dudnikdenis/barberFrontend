import React,{useState, useEffect}from "react";
import cs from './table.module.css';
import TableClient from "./tableClient";

let TableHeader = (props) => {
   //debugger;
    
    useEffect( () => {
        props.getClient()
    },[]);
    
    
    return (
        <div className={cs.tab}>
            <div className={cs.header}>{props.master.userName}</div>
            <div className={cs.header}>{props.master.date}</div> 
            {props.master.userRecords? <TableClient client={props.master.userRecords}/> : "Подождите"}
            
        </div>
        
    )
}

export default TableHeader;