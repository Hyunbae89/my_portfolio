import axios from "axios";
import {API_AUTH} from "./consts";

export class PortfolioRest{

    static async getGuest(){
        return await axios.get('/api/guest' , API_AUTH);
    }


//--------------------------------------------------------------------- User

    static async getUser(id) {
        return await axios.get('/api/users/'+ id , API_AUTH);
    }
    static async postUser(object){
        return await axios.post('/api/users' , object , API_AUTH);
    }
    static async postLogin(object){
        return await axios.post('/api/login' , object , API_AUTH);
    }


//--------------------------------------------------------------------- URL Picker

    static async getUrlList(id){
        return await axios.get('/api/users/'+ id +'/urls' , API_AUTH);
    }
    static async getUrlPick(id){
        return await axios.get('/api/urls/'+ id , API_AUTH);
    }

    static async postUrlPick(object){
        return await axios.post('/api/urls' , object , API_AUTH);
    }
    static async postUserToUrl(id,object){
        return await axios.post('/api/users/'+ id +'/urls' , object , API_AUTH);
    }

    static async patchUrlPick(id,object){
        return await axios.put('/api/urls/'+ id , object, API_AUTH);
    }
    static async patchUserToUrl(id,object){
        return await axios.put('/api/users/'+ id +'/urls' , object , API_AUTH);
    }

    static async deleteUrlPick(id){
        return await axios.delete('api/urls/'+ id , API_AUTH);
    }
    static async deleteUserToUrl(user_id, id){
        return await axios.delete('api/users/'+ user_id +'/urls/'+id , API_AUTH);
    }


//--------------------------------------------------------------------- quote

    static async getQuoteList(){
        return await axios.get('/api/quotes' , API_AUTH);
    }
    static async getQuote(id){
        return await axios.get('/api/quotes/'+ id , API_AUTH);
    }

    static async postQuote(object){
        return await axios.post('/api/quotes' , object , API_AUTH);
    }
    static async postUserToQuote(id,object){
        return await axios.post('/api/users/'+ id +'/quotes/' , object , API_AUTH);
    }

    static async patchQuote(id,object){
        return await axios.patch('/api/quotes/'+ id , object ,API_AUTH);
    }

    static async deleteQuote(id){
        return await axios.delete('/api/quotes/'+ id , API_AUTH);
    }
    static async deleteUserToQuote(user_id,id){
        return await axios.delete('/api/users/'+ user_id + '/quotes/'+ id , API_AUTH);
    }



}
export default PortfolioRest;