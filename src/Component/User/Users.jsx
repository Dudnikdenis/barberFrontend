import React, {useEffect} from "react";
import User from "./User";

const Users = (props) => {
    useEffect( () =>{
        props.getUser();
    },[])

    return(
        <div>
            {props.users.length===0? "Подождите!" : <User users={props.users} {...props}/> }
        </div>
    )
};

export default Users;