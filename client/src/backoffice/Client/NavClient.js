import React from 'react';
import logo from '../../../public/img/charles.jpg';
import {NavLink} from 'react-router-dom';

class NavClient extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#"><img style={{width: '60px'}} className="NavLogo hvr-grow rounded-circle" src={logo} alt="logo" /></a><span style={{color: '#fff', fontWeight:'bold'}}>Hello Charles, bienvenue !</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/ajout-ticket"><b>Ajouter un ticket <span className="sr-only">(current)</span></b></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/client">Afficher mes gains</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/connexion">Déconnexion</NavLink>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li> */}
              </ul>
            </div>
          </nav>
        )
    }
}

export default NavClient
