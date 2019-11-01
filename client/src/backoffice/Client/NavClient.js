import React from 'react';
import logo from '../../../public/img/charles.jpg';
import {NavLink} from 'react-router-dom';

class NavClient extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark wow fadeInUp">
            <a class="navbar-brand" href="#"><img style={{width: '60px'}} className="NavLogo hvr-grow rounded-circle" src={logo} alt="logo" /></a><span style={{color: '#fff', fontWeight:'bold'}}>Hello Charles, bienvenue !</span>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#"><b>Ma liste de gains <span class="sr-only">(current)</span></b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Gérer mon compte</a>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/connexion">Déconnexion</NavLink>
                </li>
                {/* <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li> */}
              </ul>
            </div>
          </nav>
        )
    }
}

export default NavClient
