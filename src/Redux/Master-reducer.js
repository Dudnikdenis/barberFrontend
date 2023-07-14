import { clientAPI } from "../API/api";

//const тип action = "тип action"; пример action
const ADD_CLIENT = "ADD_CLIENT"; 
const UPDATE_TIME = "UPDATE_TIME"; 
const UPDATE_CLIENT_NAME = "UPDATE_CLIENT_NAME"; 
const UPDATE_SERVICE = "UPDATE_SERVICE";
const UPDATE_COMMENT = "UPDATE_COMMENT";
const SET_CLIENT = "SET_CLIENT";

let initialState = {
    master:{}
};

    // новые данные {
    //     "userName":"userName",
    //     "date":"date",
    //        "userRecords":[
    //         {
    //         "lineId":1,
    //         "userId":1,
    //         "userCompany":"userCompany",
    //         "date":"date",
    //         "time":"time",
    //         "clientName":"clientName",
    //         "procedureName":"procedureName",
    //         "comment":"comment"},
    //         {
    //            "lineId":2,
    //         "userId":1,
    //         "userCompany":"userCompany",
    //         "date":"date",
    //         "time":"time",
    //         "clientName":"clientName",
    //         "procedureName":"procedureName","
    //         comment":"comment"}
    //     ]
    //     }


let masterReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type){
        case SET_CLIENT: 
            stateCopy = {...state};
            stateCopy.master = {...state.master, ...action.master};
            return stateCopy;
        case ADD_CLIENT:
            stateCopy = {...state};
            stateCopy.master = [...state.master];
            stateCopy.master.userRecords = [...state.master[action.masterId-1].ClientName]
            stateCopy.master[action.masterId-1].ClientName.push(action.newClient) 
            return stateCopy;

        case UPDATE_TIME:
            stateCopy = {...state};
            stateCopy.master = [...state.master];
            stateCopy.master.ClientName = [...state.master[action.masterId-1].ClientName]
            stateCopy.master[action.masterId-1].ClientName[action.clientId-1].time = action.newTime
            return stateCopy;

        case UPDATE_CLIENT_NAME:
            stateCopy = {...state};
            stateCopy.master = [...state.master];
            stateCopy.master.ClientName = [...state.master[action.masterId-1].ClientName]
            stateCopy.master[action.masterId-1].ClientName[action.clientId-1].clientName = action.newClientName
            return stateCopy;

        case UPDATE_SERVICE:
            stateCopy = {...state};
            stateCopy.master = [...state.master];
            stateCopy.master.ClientName = [...state.master[action.masterId-1].ClientName]
            stateCopy.master[action.masterId-1].ClientName[action.clientId-1].service = action.newService
            return stateCopy;

        case UPDATE_COMMENT:
            stateCopy = {...state};
            stateCopy.master = [...state.master];
            stateCopy.master.ClientName = [...state.master[action.masterId-1].ClientName]
            stateCopy.master[action.masterId-1].ClientName[action.clientId-1].comment = action.newComment
            return stateCopy;

        default: 
            return state
    }
};

// export const название-диспатча = (параметр) => ({type: название action, параметр}); пример dispatch или добавляем thunk
export const AddClientCreator = (newClient,masterId) => ({type: ADD_CLIENT, newClient,masterId});

export const UpdateTimeCreator = (newTime,masterId,clientId) => ({type: UPDATE_TIME, newTime,masterId,clientId});
export const UpdateClientNameCreator = (newClientName,masterId,clientId) => ({type: UPDATE_CLIENT_NAME, newClientName,masterId,clientId});
export const UpdateServiceCreator = (newService,masterId,clientId) => ({type: UPDATE_SERVICE, newService,masterId,clientId});
export const UpdateCommentCreator = (newComment,masterId,clientId) => ({type: UPDATE_COMMENT, newComment,masterId,clientId});
export const SetClientCreator = (master) => ({type:SET_CLIENT,master});

export const getClient = () => {   // Thunk
    return (dispatch) => {
        clientAPI.GetClient().then(response => {
        dispatch (SetClientCreator(response))
      });
    };
}

export default masterReducer;
