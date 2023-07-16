import axios from "axios";

const instance = axios.create({
    baseURL: 'http://34.16.144.78:8080/' //http://34.16.144.78:8080/records/1   http://localhost:3001/'  
})
export const clientAPI = {
    async GetClient(id) 
    {
        const response = await instance.get(`records/user/${id}`);
        return response.data;
    }
}

export const userAPI = {
    async GetUser() 
    {
        const response = await instance.get("users");
        return response.data;
    }
}
