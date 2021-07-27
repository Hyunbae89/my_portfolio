import axios from "axios";
import {API_AUTH} from "./consts";
const ENDPOINT = "";
export class PortfolioRest{

    static async getGuest(){
        return await axios.get(ENDPOINT+'/api/guest' , API_AUTH);
    }

    static async getRatings(){
        return await axios.get(ENDPOINT+'/api/ratings' , API_AUTH);
    }
    static async getRating(id){
        return await axios.get(ENDPOINT+'/api/users/'+id+'/rating' , API_AUTH);
    }
    static async postRating(id,object){
        return await axios.post(ENDPOINT+'/api/users/'+id+'/rating' , object , API_AUTH);
    }


//--------------------------------------------------------------------- User

    static async getUser(id) {
        return await axios.get(ENDPOINT+'/api/users/'+ id , API_AUTH);
    }
    static async postUser(object){
        return await axios.post(ENDPOINT+'/api/users' , object , API_AUTH);
    }
    static async postLogin(object){
        return await axios.post(ENDPOINT+'/api/login' , object , API_AUTH);
    }
    static async patchUser(id,object) {
        return await axios.put(ENDPOINT+'/api/users/'+ id , object , API_AUTH);
    }
    static async deleteUser(id) {
        return await axios.delete(ENDPOINT+'/api/users/'+ id , API_AUTH);
    }


//--------------------------------------------------------------------- URL Picker

    static async getUrlList(id){
        return await axios.get(ENDPOINT+'/api/users/'+ id +'/urls' , API_AUTH);
    }
    static async getUrlPick(id){
        return await axios.get(ENDPOINT+'/api/urls/'+ id , API_AUTH);
    }

    static async postUrlPick(object){
        return await axios.post(ENDPOINT+'/api/urls' , object , API_AUTH);
    }
    static async postUserToUrl(id,object){
        return await axios.post(ENDPOINT+'/api/users/'+ id +'/urls' , object , API_AUTH);
    }

    static async patchUrlPick(id,object){
        return await axios.put(ENDPOINT+'/api/urls/'+ id , object, API_AUTH);
    }
    static async patchUserToUrl(id,object){
        return await axios.put(ENDPOINT+'/api/users/'+ id +'/urls' , object , API_AUTH);
    }

    static async deleteUrlPick(id){
        return await axios.delete(ENDPOINT+'api/urls/'+ id , API_AUTH);
    }
    static async deleteUserToUrl(user_id, id){
        return await axios.delete(ENDPOINT+'api/users/'+ user_id +'/urls/'+id , API_AUTH);
    }


//--------------------------------------------------------------------- quote

    static async getQuoteList(){
        return await axios.get(ENDPOINT+'/api/quotes' , API_AUTH);
    }
    static async getQuote(id){
        return await axios.get(ENDPOINT+'/api/quotes/'+ id , API_AUTH);
    }
    static async getUserToQuote(id){
        return await axios.get(ENDPOINT+'/api/users/'+ id +'/quotes/', API_AUTH);
    }
    static async getQuoteToUser(id){
        return await axios.get(ENDPOINT+'/api/users/quotes/'+id, API_AUTH);
    }

    static async postQuote(object){
        return await axios.post(ENDPOINT+'/api/quotes' , object , API_AUTH);
    }
    static async postUserToQuote(id,object){
        return await axios.post(ENDPOINT+'/api/users/'+ id +'/quotes/' , object , API_AUTH);
    }

    static async patchQuote(id,object){
        return await axios.put(ENDPOINT+'/api/quotes/'+ id , object ,API_AUTH);
    }

    static async deleteQuote(id){
        return await axios.delete(ENDPOINT+'/api/quotes/'+ id , API_AUTH);
    }
    static async deleteUserToQuote(id){
        return await axios.delete(ENDPOINT+'/api/users/quotes/'+ id , API_AUTH);
    }



}
export default PortfolioRest;