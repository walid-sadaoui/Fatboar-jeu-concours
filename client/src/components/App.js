import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Modalites from './Modalites';
import Contact from './Contact';
import Cadeaux from './Cadeaux';
import Connexion from './Connexion';
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
                        
                        <Route path="/#contact" component={Contact}/>
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