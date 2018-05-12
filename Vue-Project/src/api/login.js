import {Logins} from "../URL/loginURL"

export class Login{
    getLogin(cb){
        fetch(Logins).then((res) => {
            res.json().then((data) => {
                cb(data);
            })
        });
    }
}