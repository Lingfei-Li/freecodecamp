
import React from "react"
import userStore from "../store/userStore" 
import * as actions from "../action/actions"


export default class Layout extends React.Component {
    constructor(){
        super();
        this.state = {
            text: "hello",
            showSpin: false 
        };
        actions.loadUsers();
    }
    showSpin() {
        console.log("show spin");
        this.setState({
            showSpin: true
        });
    }
    hideSpin(){
        this.setState({
            showSpin: false
        });
    }

    componentWillMount() {
        userStore.on("LOAD_USERS", this.showSpin);
    }

    
    render() {
        return (
            <div>
                { this.state.showSpin ? <div className="spin"></div> : null }
                { this.state.users}
            </div>
        );
        
    }
    
    
}

