
import {EventEmitter} from "events"
import dispatcher from "../dispatcher"
import "axios"

class UserStore extends EventEmitter {
    
    loadUsers() {
        console.log("store: loadUsers")
        // axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        this.emit("LOAD_USERS");
    }
    
    handleActions(action) {
        switch (action.type) {
            case "LOAD_USERS":{
                this.loadUsers();
                break;
            }
        }
    }
}

const userStore = new UserStore;
dispatcher.register(userStore.handleActions.bind(userStore));
export default userStore;


