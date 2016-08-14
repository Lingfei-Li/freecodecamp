
import dispatcher from "../dispatcher"
import "axios"


export function loadUsers() {
    dispatcher.dispatch({
        type:"LOAD_USERS"
    });
}