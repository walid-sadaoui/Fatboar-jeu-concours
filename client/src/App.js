import React from 'react';
import './style/bootstrap.min.css';
import './index.css';
import facebk from './images/facebook.png';
import instag from './images/insta.png';
import Contact from './Contact';
import Inscription from './Inscription';
import Connexion from  './Connexion'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class App extends  React.Component {
  render() {


    return (
 <div className="#">
     
          <Router>
          <div>
          
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" >FATBOAR |</Link>
            <img src={instag} alt="" height="1.5%" width="1.5%"/>
            <img src={facebk} alt="" height="2%" width="2%"/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                          <Link to={'/'} className="nav-link"> ACCUEIL <span className="sr-only">(current)</span> </Link>
                        </li>
                        <li className="nav-item">
                          <Link to={''} className="nav-link">  LE JEU-CONCOURS </Link>
                        </li>
                        <li className="nav-item">
                          <Link to={''} className="nav-link">LES MODALITÉS</Link>
                        </li>
                        <li className="nav-item">
                          <Link to={'/contact'} className="nav-link"> CONTACT </Link>
                        </li>
                    
                  </ul>
                    <ul>
                    <Link to ={'/inscription'}><button type="button" className="btn btn-light" >JE M'INSCRIS</button></Link>
                    <Link to ={'/connexion'}><button type="button" className="btn btn-light" >JE ME CONNECTE</button></Link>
                    </ul>
                  
            </div>
            </nav>
            
            
            <Switch>
                {/* <Route exact path='/' component={} /> */}
                <Route path='/contact' component={Contact} />
                <Route path='/inscription' component={Inscription} />
                <Route path='/connexion' component={Connexion} />
            </Switch>
          </div>
        </Router>
        
        </div>
    )
  }
}


export default App;
