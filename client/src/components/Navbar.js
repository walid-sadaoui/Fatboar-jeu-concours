import React from 'react';
import logo from '../../public/img/Logo_header.png';
import logofb from '../../public/img/Facebook-color.png';
import logoinsta from '../../public/img/Insta-color.png';
import {NavLink} from 'react-router-dom';

class Navbar extends React.Component{
    render() {
      return(
        <section>
        <header id="header">
          <div className="container-fluid">
            <div id="logo" className="pull-left">
              <NavLink to="/"><img className="NavLogo hvr-grow" src={logo} alt="logo" title="Fatboar logo" /></NavLink> | <a href="#"><img className="hvr-grow" src={logoinsta} alt="logo" title="Fatboar logo" width="40" /></a> <a href="#"><img className="hvr-grow" src={logofb} alt="logo" title="Fatboar logo" width="40" /></a>
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li><NavLink activeClassName="menu-active" to="/jeu-concours">Le jeu-concours</NavLink></li>
                <li><NavLink activeClassName="menu-active" to="/modalites">Les modalités</NavLink></li>
                <li><NavLink activeClassName="menu-active" to="/jeu-concours#contact">Contact</NavLink></li>
                <li id="BtnInscription"><i className="fa fa-pencil"></i><NavLink activeClassName="menu-active" to="/inscription">Je m'inscris</NavLink></li>
                <li id="BtnConnexion"><i className="fa fa-user"></i><NavLink activeClassName="menu-active" to="/connexion">Je me connecte</NavLink></li>
              </ul>
            </nav>
          </div>
        </header>
        </section>
      )
    }
  }

  export default Navbar