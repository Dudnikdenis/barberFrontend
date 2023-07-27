import React from "react";
import TableContainer from "../Table/tableContainer";
import UserContainer from "../User/userContainer";
import {
    BrowserRouter, Routes,
    Route,
  } from 'react-router-dom'
  import ClientPage from "../ClientPage/clientPage";
//import cs from './main_window.module.css'

function Main(){    
    return(
        <div >
            <BrowserRouter>
                    <Routes>
                        <Route path='/' element = {<ClientPage/>  }/>
                        <Route path='/users' element = {<UserContainer/>  }/>    
                        <Route path='/records/user/:userID' element = {<TableContainer/>  }/>
                    </Routes>
            </BrowserRouter>
                                  
        </div>
    )
}

export default Main;