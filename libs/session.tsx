import env from "../env.json"

export default {
    put(key,message){
        window.sessionStorage.setItem(key,message)
    },
    pull(key){
        const data = window.sessionStorage.getItem(key);
        window.sessionStorage.removeItem(key);
        if(data != undefined){
            return data;
        }else{
            return ""
        }
    }
}