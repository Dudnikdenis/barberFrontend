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
        console.log(state.master.toString() !== action.master.toString());
            if(state.master.toString() !== action.master.toString())
            {
                stateCopy = {...state};
                stateCopy.master = [...state.master, ...action.master];
                for (let i = 0;i<stateCopy.master.length;i++){
                    stateCopy.master[i].userRecords = [ ...action.master[i].userRecords]
                }
                return stateCopy;
              
            }
            else return {...state};

        default: 
            return state
    }
};

// export const название-диспатча = (параметр) => ({type: название action, параметр}); пример dispatch или добавляем thunk
export const AddClientCreator = (newClient,masterId) => ({type: ADD_CLIENT, newClient,masterId});
export const SetClientCreator = (master) => ({type:SET_CLIENT,master});
export const DeliteClientCreator = (i) => ({type:DELITE_CLIENT,i})
export const getClient = (id, startDate, endDate) => {   // Thunk
    return (dispatch) => {
        dispatch(DeliteClientCreator());
        clientAPI.GetClient(id, startDate, endDate).then(response => {
        dispatch (SetClientCreator(response))
      });
    };
}

export const deliteRecordsUser = (lineId) => { 
    return (dispatch) => {
        dispatch(DeliteClientCreator());
        clientAPI.DeliteRecordsUser(lineId);
        // clientAPI.GetClient(id, startDate, endDate).then(response => {
        //     dispatch (SetClientCreator(response))});
    };
}

export const addRecordsUser= (userId, records, startDate, endDate) => { 
    return (dispatch) => {
        clientAPI.recordsUser(userId, records).then(response => {
            console.log("addrecords");
            console.log(response);    
            //dispatch (SetClientCreator(response))
              });
        // clientAPI.GetClient(userId, startDate, endDate).then(response => {
        //     dispatch (SetClientCreator(response))
        //   });
    };
}

export const updateRecordsUser = (lineId, records) => { 
    return (dispatch) => {
        dispatch(DeliteClientCreator());
        clientAPI.UpdateRecordsUser(lineId, records);
        // clientAPI.GetClient(id, startDate, endDate).then(response => {
        //     dispatch (SetClientCreator(response))});
    };
}

export default masterReducer;
