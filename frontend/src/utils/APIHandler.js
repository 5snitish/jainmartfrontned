const {default:Axios} = require('axios');
const {default:Config} = require("./Config")


import AuthHandler from "./AuthHandler";

class ApiHandler{
    async checklogin (){
        if(AuthHandler.checkTokenExpiry()){
            var response = await Axios.post(Config.refreshApiUrl,{refresh:AuthHandler.getRefreshToken()})

        }
    }
}