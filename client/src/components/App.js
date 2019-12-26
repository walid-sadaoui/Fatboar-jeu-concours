import React from 'react';
// import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Modalites from './Modalites';
import Gains from './Gains';
import Utilisateurs from './ListeUtilisateurs';
import Register from './Inscription';
import Backoffice from './Backoffice';
import Cadeaux from './Cadeaux';
import Connexion from './Connexion';
import Inscription from './Inscription';
import MonCompte from './Compte';
import Donnees from './Donnees';
import Mentions from './Mentions';
import EmailsUsers from './EmailsUsers';
import VueStatsAdmin from './VueStatsAdmin';
import Tirage from './Tirage';
import TirageGagnant from './TirageGagnant';

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                {/* <div>
                    <Navbar/>
                </div> */}
                <div style={{height: "90%"}}>
                    <Switch>
                        <Route path="/connexion" component={Connexion}/>
                        <Route path="/inscription" component={Inscription}/>
                        <Route path="/modalites" component={Modalites}/>
                        <Route path="/donnees-personnelles" component={Donnees}/>
                        <Route path="/mentions-legales" component={Mentions}/>
                        <Route path="/cadeaux" component={Cadeaux}/>
                        <Route path="/backoffice" component={Backoffice}/>
                        <Route path="/tirage-au-sort" component={Tirage}/>
                        <Route path="/gagnant-final" component={TirageGagnant}/>
                        <Route path="/stats" component={VueStatsAdmin}/>
                        <Route path="/users-mails" component={EmailsUsers}/>
                        <Route path="/gains" component={Gains}/>
                        <Route path="/mon-compte" component={MonCompte}/>
                        <Route path="/utilisateurs" component={Utilisateurs}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/" component={Home}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App
