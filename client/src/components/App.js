import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Modalites from './Modalites';
import Contact from './Contact';
import Connexion from './Connexion';
import Inscription from './Inscription';
import Client from '../backoffice/Client/AdminClient';
import AddTicket from '../backoffice/Client/AddTicket';

class App extends React.Component{
    render(){
        return(
            <div>
            <BrowserRouter>
            
            <Switch>
                
                <Route path="/client" component={Client}/>
                <Route path="/ajout-ticket" component={AddTicket}/>
                <div>
                    <Navbar/>
                    <Route path="/modalites" component={Modalites}/>
                    <Route path="/#contact" component={Contact}/>
                    <Route path="/connexion" component={Connexion}/>
                    <Route path="/inscription" component={Inscription}/>
                    <Route path="/" component={Home}/>
                </div>
            </Switch>
            <Footer/>
            </BrowserRouter>
            </div>
        )
    }
}

export default App