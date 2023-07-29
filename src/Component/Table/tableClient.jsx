import React, {useState} from "react";
import cs from './table.module.css';



function TableClient(props) {

    const onClicDelite = (e,lineId) => {
       props.onDelete(lineId );    }


    // const onChengeTime = (e,clientId, masterId) => {
    //     props.UpdateTimeCreator(e.target.value, masterId, clientId);
    // }

    return (
        <div className={cs.tab}>
            {props.client.map(c => 
            <div>
                <span>
                    <table key={c.Id} className={cs.tab_total}>
                            <tr>
                                <td className={cs.tdTime}>{c.time}</td>
                                <td className={cs.tdClient}>{c.clientName}</td>
                                <td className={cs.tdSevice}>{c.procedureName}</td>
                                <td className={cs.tdSevice}>{c.comment} </td>
                                <button onClick = {e=>onClicDelite(e, c.lineId)}>Удалить</button>
                            </tr>
                        </table>
                </span>
                <span>
                    
                </span>
                    
            </div>)}                 
        </div>
        
    )
}

export default TableClient;