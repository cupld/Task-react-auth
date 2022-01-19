import { makeAutoObservable, observable, action } from "mobx";
import axios from "axios";

import api from "./api"

class AuthStore {
    user = null;

    constructor(){
        makeAutoObservable(this,{});
    }

    signUp = async (user) => {
        try{
          const response = await api.post(
            "/signup",user
            );
            // this.user=decode(response.data.token);
        }
        catch(error){
          console.log(error);
          
        }
      };
}
const authStore = new AuthStore();
export default authStore;