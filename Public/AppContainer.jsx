'use strict';

import React,{Component} from "react";
import  AddUser from  "./AddUser";
import Users from "./Users";



export default class AppContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            users:[{
                id:Date.now(),
                name: 'John'
            }

            ]
        }
    }

    addUser(user){
        this.setState(state => ({
            users: state.users.concat({id : Date.now(),name:user.name})
        }))
    }

    render() {
        return <div>
            <h1>Users App</h1>
            <AddUser adduser={user => this.addUser(user)}/>
            <Users users={this.state.users}/>
        </div>;
    }
}

