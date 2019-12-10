// App.js
import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './Components/Header';
import Sidebar from './Components/SideBar';
import ShowEarning from './Components/ShowEarning';
import Connexion from './Components/Connexion';
import Backoffice from './Components/Backoffice';
import EditAccount from "./Components/EditAccount";
import ShowUsers from "./Components/ShowUsers";
import Register from "./Components/Register";

class App extends React.Component{
    render(){
        return (<BrowserRouter>
                <Header/>
                <Sidebar/>
                <div>
                    <Switch>
                        <Route path="/backoffice" component={Backoffice}/>
                        <Route path="/connexion" component={Connexion}/>
                        <Route path="/gains" component={ShowEarning}/>
                        <Route path="/mon-compte" component={EditAccount}/>
                        <Route path="/utilisateurs" component={ShowUsers}/>
                        <Route path="/register" component={Register}/>
                    </Switch>
                </div>
                <div>
            </div>
        </BrowserRouter>
        )
    }
}

export default App