import React from "react";
import { Link } from "react-router-dom";
import cs from "./clientPage.module.css"

const ClientPage = () => {
    return(
        <div>
            <header>
                <span className={cs.divLink}>
                    <Link className={cs.link} to="/users" >Users</Link>
                </span>
                <span className={cs.divLink}>
                    <Link className={cs.link} to="/" >Отзывы </Link>
                </span>
                <span className={cs.divLink}>
                    <Link className={cs.link} to="/" >Новости </Link>
                </span>                
            </header>            
        </div>
    )
};

export default ClientPage;