import React, {useEffect} from "react";
import User from "./User";

const Users = (props) => {
    useEffect( () =>{
        props.getUser();
    },[])

    return(
        <div>
            {props.users? <User users={props.users}/> :"Подождите!"}
        </div>
    )
};

export default Users;