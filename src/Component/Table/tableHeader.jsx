import React,{useState, useEffect}from "react";
import cs from './table.module.css';
import TableClient from "./tableClient";

let TableHeader = (props) => {
    // console.log(props.master);
    // debugger;
    
    useEffect( () => {
        props.getClient()
    },[]);
    
    
    return (
        <div className={cs.tab}>{props.master.map( m =>
            <div>
                <div className={cs.header}>{m.userName}</div>
                <div className={cs.header}>{m.date}</div> 
                <TableClient client={m.userRecords}/> 
            </div> )} 
        </div>
        
    )
}

export default TableHeader;