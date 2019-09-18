import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Modalites from './Modalites';
import Contact from './Contact';
import Connexion from './Connexion';
import Inscription from './Inscription';

class App extends React.Component{
    render(){
        return(
            <div>
            <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path="/modalites" component={Modalites}/>
                <Route path="/jeu-concours#contact" component={Contact}/>
                <Route path="/connexion" component={Connexion}/>
                <Route path="/inscription" component={Inscription}/>
                <Route path="/" component={Home}/>
            </Switch>
            <Footer/>
            </BrowserRouter>
            </div>
        )
    }
}

export default App