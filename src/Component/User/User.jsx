import React from "react";
import { Link } from "react-router-dom";

const User = (props) => {
    return(
        <div>
            {props.users.map(us=>
                <div key={us.userId}>
                    <Link to={"/user/"+us.userId}>{us.userName}</Link>
                </div>
            )};
        </div>
    )
};

export default User;