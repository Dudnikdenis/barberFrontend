import React from "react";
import {connect} from 'react-redux'
import TableHeader from "./tableHeader";
import { AddClientCreator, 
    UpdateTimeCreator, 
    UpdateClientNameCreator, 
    UpdateServiceCreator, 
    UpdateCommentCreator,
    getClient,
    addRecordsUser,
    SetIsDidMountCreator} from "../../Redux/Master-reducer";

    

let mapStateToProps = (state) => {
    return{ 
        master: state.master,
        isDidMount:state.master.isDidMount,
        userName:state.master.userName
    };
}

const TableContainer = connect(mapStateToProps,{
    AddClientCreator, 
    UpdateTimeCreator, 
    UpdateClientNameCreator, 
    UpdateServiceCreator, 
    UpdateCommentCreator,
    getClient, addRecordsUser,SetIsDidMountCreator})(TableHeader);

export default TableContainer;