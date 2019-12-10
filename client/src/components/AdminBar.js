// Header.js
import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Header extends Component {
    render(){
        return (
            <nav className="main-header navbar navbar-expand navbar-white navbar-light ">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars"></i></a>
                    </li>
                    {/* <li className="nav-item d-none d-sm-inline-block">
                        <a href="index3.html" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="#" className="nav-link">Contact</a>
                    </li> */}
                </ul>


                <form className="form-inline ml-3">
                    <div className="input-group input-group-sm">
                        <input className="form-control form-control-navbar" type="search" placeholder="Effectuez une recherche..."
                               aria-label="Search"/>
                        <div className="input-group-append">
                            <button className="btn btn-navbar" type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>


                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink to="/" title="Se déconnecter" className="nav-link" data-widget="control-sidebar" data-slide="true">
                            <i className="fas fa-power-off fa-2x"></i>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}