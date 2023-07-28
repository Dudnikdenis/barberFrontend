import axios from "axios";

const instance = axios.create({
    baseURL: 'http://104.154.140.254:8080/', //http://34.16.144.78:8080/records/1   http://localhost:3001/'  
    headers: {
        'accept': '*/*',
        'Content-Type': 'application/json'
    }
})
export const clientAPI = {
    async GetClient(id, startDate, endDate) 
    {
        const response = await instance.get(`records/user/${id}?startDate=${startDate}&endDate=${endDate}`);
        return response.data;
    }
}

export const userAPI = {
    async GetUser() 
    {
        const response = await instance.get("users");
        return response.data;
    },

    async AddUser(user) 
    {
         await instance.post("users", user);
    },

    async recordsUser(userID,records) 
    {
         await instance.post(`records/user/${userID}`, records);
    }
}



// let test = {
//     userId: 1,
//     userName: "John Doe",
//     listRecords: [
//         {
//             date: "2020-01-01",
//             userRecords:[
//                 {
//                     lineId: 0,
//                     userId: 1,            
//                     time: "09:30",
//                     clientName: "Магомет",
//                     procedureName: "Стрижка",
//                     procedureCost: "1000",
//                     procedureDiscount: "10%",
//                     comment: "Предупредить за 30 минут"
//                 }
//             ]
//         }
//     ]
// }
