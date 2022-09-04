
import env from "../env.json"

export default {
    state(){
        const data = window.localStorage.getItem(env.sessionName);
        if(data != undefined){
            return JSON.parse(data);
        }else{
            return data;
        }
    },
    save(data) {
        window.localStorage.setItem(env.sessionName, JSON.stringify({
            ...data,
        }));
    },
    store(data){
        window.localStorage.setItem(env.sessionName, JSON.stringify({
            user: data.user,
            token: data.token,
            email: data.email,
            verified: data.verified
        }));
    },
    check(){
        return this.state() != undefined;
    },
    checkAdmin(){
        const state = this.state();
        if(state == undefined){
            return false;
        }else{
            if(state["admin"] == undefined){
                return false
            }else{
                return true
            }
        }
    },
    getToken(){
        if(this.check()){
            const state = this.state();
            return state.token;
        }else{
            return "";
        }
    },  
    getUser(){
        if(this.check()){
            const state = this.state();
            return state.user;
        }else{
            return null
        }
    },
    getAdmin(){
        if(this.checkAdmin()){
            const state = this.state();
            return state.admin;
        }else{
            return null
        }
    },
    getEmail(){
        if(this.check()){
            const state = this.state();
            return state.email;
        }else{
            return "";
        }
    },
    verified(){
        if(this.check()){
            const state = this.state();
            return state.verified;
        }else{
            return false;
        }
    },
    setVerified(value){
        if(this.check()){
            this.store({
                ...this.state(),
                verified: value
            })
        }
    },
    remove(){
        window.localStorage.removeItem(env.sessionName);
    },
    logout(){
        window.localStorage.removeItem(env.sessionName);
        window.location.assign("/");
    }
}