import axios from "axios";
import {API_AUTH} from "./consts";

export class PortfolioRest{

    // static async getUser(id){
    //     return await axios.get('api/users/'+id, API_AUTH);
    // }
    //
    // static async postUser(object){
    //     return await axios.post('api/users/', object, API_AUTH);
    // }

    static async getGuest(){
        return await axios.get('user/guest',API_AUTH);
    }
    static async getUser(id) {
        return await axios.get('users/'+ id , API_AUTH);
    }
    static async postUser(object){
        return await axios.post('users/', object, API_AUTH);
    }
}
export default PortfolioRest;