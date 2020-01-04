import React from 'react';
import logo from '../assets/img/Logo_header.png';
import logofb from '../assets/img/Facebook-color.png';
import logoinsta from '../assets/img/Insta-color.png';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';


class Navbar extends React.Component {
    render() {
        return (
          <header id="header">
            <div className="container-fluid">
              <div id="logo" className="pull-left">
               <NavLink to="/"><img className="NavLogo hvr-grow" src={logo} alt="logo" title="Fatboar logo" /></NavLink> | <NavLink to="#"><img className="hvr-grow" src={logoinsta} alt="logo" title="Fatboar logo" width="40" /></NavLink> <NavLink to="#"><img className="hvr-grow" src={logofb} alt="logo" title="Fatboar logo" width="40" /></NavLink>
              </div>
            </div>
            <nav className="navbar navbar-expand-lg" id="nav-menu-container">
            <button className="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              {/* <span className="navbar-toggler-icon"></span> */}
              {/* <i className="fa fa-bars" style={{color:"#fff", fontSize:"30px", padding:"5px"}}></i> */}
              <FontAwesomeIcon icon={faBars} style={{color:"#fff", fontSize:"40px", padding:"5px"}}></FontAwesomeIcon>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="nav-menu">
                {/* <li className="nav-item">
                <NavLink activeClassName="menu-active" to="/jeu-concours">Le jeu-concours</NavLink>
                </li> */}
                <li className="nav-item">
                <NavLink activeClassName="menu-active" to="/cadeaux">Les cadeaux</NavLink>
                </li>
                <li className="nav-item">
                <NavLink activeClassName="menu-active" to="/modalites">Les modalités</NavLink>
                </li>
                {/* <li className="nav-item" id="BtnInscription">
                  <i className="fa fa-pencil"></i><NavLink activeClassName="menu-active" to="/inscription">Je m'inscris</NavLink>
                </li> */}
                <li className="nav-item" id="BtnConnexion">
                  <FontAwesomeIcon icon={ faUser }></FontAwesomeIcon><NavLink activeClassName="menu-active" to="/connexion">Mon compte</NavLink>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li> */}
              </ul>
            </div>
          </nav>
          </header>
        )
    }
}
  export default Navbar