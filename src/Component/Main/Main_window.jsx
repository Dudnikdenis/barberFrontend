import React from "react";
import TableContainer from "../Table/tableContainer";
import UserContainer from "../User/userContainer";
import {
    BrowserRouter, Routes,
    Switch,
    Route,
    Link,
  } from 'react-router-dom'
//import cs from './main_window.module.css'

function Main(){    
    return(
        <div >
            <BrowserRouter>
                    <Routes>
                        <Route path='/' element = {<UserContainer/>  }/>    
                        <Route path='/user/:userID' element = {<TableContainer/>  }/>
                    </Routes>
            </BrowserRouter>
                                  
        </div>
    )
}

export default Main;