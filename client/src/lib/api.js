import axios from "axios";
import {API_AUTH} from "./consts";

export class PortfolioRest{

    static async getGuest(){
        return await axios.get('user/guest',API_AUTH);
    }
    static async getUser(id) {
        return await axios.get('users/'+ id , API_AUTH);
    }
    static async postUser(object){
        return await axios.post('users/', object, API_AUTH);
    }
    static async postLogin(object){
        return await axios.post('login/',object,  API_AUTH);
    }

    static async getUrlList(id){
        return await axios.get('users/'+ id +'/urls', API_AUTH);
    }
    static async postUrlPick(object){
        return await axios.post('urls/',object, API_AUTH);
    }
    static async postUserToUrl(id,object){
        return await axios.post('users/'+ id +'/urls',object, API_AUTH);
    }

    static async getUrlPick(id){
        return await axios.get('urls/'+ id , API_AUTH);
    }

}
export default PortfolioRest;