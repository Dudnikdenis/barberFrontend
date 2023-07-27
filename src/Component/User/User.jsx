import React from "react";
import { Link } from "react-router-dom";
import AddUserReduxForm from "./AddUserReduxForm";
import cs from "./user.module.css";

const User = (props) => {

    const AddUser = (data) => {
        props.addUser({
            userId: 0,
            userName: data.userName,
            userCompany: data.userCompany,
            userPhoneNumber: data.userPhoneNumber,
            userProfession: data.userProfession,
            userRole: data.userRole,
            usersAccessed: data.usersAccessed,
            password: data.password,
            email: data.email,
            picture: data.picture
        })
    }

    return(
        <div>
            <div className={cs.totalLink}>
                <Link className={cs.link} to="/">Главная страница </Link>
            </div>
            {props.users.map(us=>
                <div className={cs.user} key={us.userId}>
                    <Link className={cs.userLink} to={"/records/user/"+us.userId}>{us.userName}</Link>
                </div>
            )}
            <AddUserReduxForm onSubmit={AddUser}/>
        </div>
    )
};

export default User;

//   "userId": 0,
//   "userName": "Петя Пупков",
//   "userCompany": "My Company",
//   "userPhoneNumber": "8909058030",
//   "userProfession": "Парикмахер",
//   "userRole": "USER",
//   "usersAccessed": "доделать",
//   "password": "123456",
//   "email": "dycjh@example.com",
//   "picture": "string"