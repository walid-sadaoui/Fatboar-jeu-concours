import React from 'react';
// import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Modalites from './Modalites';
import ShowEarning from './ShowEarning';
import EditAccount from './EditAccount';
import ShowUsers from './ShowUsers';
import Register from './Register';
import Dashboard from './Dashboard';
import Cadeaux from './Cadeaux';
import Connexion from './Connexion';
import Login from './Login';
import Inscription from './Inscription';
import Client from '../backoffice/Client/AdminClient';
import AddTicket from '../backoffice/Client/AddTicket';

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                {/* <div>
                    <Navbar/>
                </div> */}
                <div style={{height: "90%"}}>
                    <Switch>
                        <Route path="/client" component={Client}/>
                        <Route path="/ajout-ticket" component={AddTicket}/>
                        <Route path="/connexion" component={Connexion}/>
                        <Route path="/inscription" component={Inscription}/>
                        <Route path="/modalites" component={Modalites}/>
                        <Route path="/cadeaux" component={Cadeaux}/>
                        <Route path="/dashboard" component={Dashboard}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/show-earning" component={ShowEarning}/>
                        <Route path="/edit-account" component={EditAccount}/>
                        <Route path="/show-users" component={ShowUsers}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/" component={Home}/>
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