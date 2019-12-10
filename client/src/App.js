// App.js

import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './Components/Header';
import Sidebar from './Components/SideBar';


import ShowEarning from './Components/ShowEarning';
import Connexion from './Components/Connexion';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';
import EditAccount from "./Components/EditAccount";

import ShowUsers from "./Components/ShowUsers";

import Login from "./Components/Login";
import Register from "./Components/Register";

class App extends React.Component{
    render(){
        return (<BrowserRouter>

                <Header/>
                <Sidebar/>
                <div>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/dashboard" component={Dashboard}/>
                        <Route path="/connexion" component={Connexion}/>
                        <Route path="/show-earning" component={ShowEarning}/>
                        <Route path="/edit-account" component={EditAccount}/>
                        <Route path="/show-users" component={ShowUsers}/>
                        <Route path="/register" component={Register}/>
                    </Switch>
                </div>
                <div>
                <Footer/>
            </div>
        </BrowserRouter>
        )
    }
}

export default App