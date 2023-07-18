import React from "react";
import { Link } from "react-router-dom";
import AddUserReduxForm from "./AddUserReduxForm";

const User = (props) => {

    const AddUser = (data) => {

        
    }

    return(
        <div>
            {props.users.map(us=>
                <div key={us.userId}>
                    <Link to={"/user/"+us.userId}>{us.userName}</Link>
                </div>
            )};
            <AddUserReduxForm onSubmit={AddUser}/>
        </div>
    )
};

export default User;