import { clientAPI, userAPI } from "../API/api";

//const тип action = "тип action"; пример action
const ADD_CLIENT = "ADD_CLIENT"; 
const UPDATE_TIME = "UPDATE_TIME"; 
const UPDATE_CLIENT_NAME = "UPDATE_CLIENT_NAME"; 
const UPDATE_SERVICE = "UPDATE_SERVICE";
const UPDATE_COMMENT = "UPDATE_COMMENT";
const SET_CLIENT = "SET_CLIENT";
const SET_IS_DID_MOUNT = "SET_IS_DID_MOUNT"
const DELITE_CLIENT = "DELITE_CLIENT"

let initialState = {
    master:[],
    isDidMount:false
    
};

let masterReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type){
        case SET_CLIENT: 
            if(state.master.toString() !== action.master.toString())
            {
                stateCopy = {...state};
                stateCopy.master = [...state.master, ...action.master];
                return stateCopy;
              
            }
            else return {...state};

        case DELITE_CLIENT: 
            stateCopy = {...state};
            stateCopy.master = [];
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
        
        case SET_IS_DID_MOUNT:
            return {...state,
                 isDidMount:action.isDidMount
                }

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
export const SetIsDidMountCreator = (isDidMount) => ({type:SET_IS_DID_MOUNT,isDidMount});
export const DeliteClientCreator = () => ({type:DELITE_CLIENT,})

export const getClient = (id, startDate, endDate) => {   // Thunk
    return (dispatch) => {
        dispatch(DeliteClientCreator());
        clientAPI.GetClient(id, startDate, endDate).then(response => {
        dispatch (SetClientCreator(response))
      });
    };
}

export const addRecordsUser= (userId, records, startDate, endDate) => {   // Thunk
    console.log("addUser");
    return (dispatch) => {
        userAPI.recordsUser(userId, records);
        clientAPI.GetClient(userId, startDate, endDate).then(response => {
            dispatch (SetClientCreator(response))
          });
    };
}

export default masterReducer;
