// SideBar.js
import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class SideBar extends Component {
    render(){
        return (
            <aside class="main-sidebar sidebar-dark-primary elevation-4 ">
                <NavLink to="/backoffice" class="brand-link">
                    <img src="dist/img/logofatboar.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
                         style={{opacity: '.9'}} />
                        <span class="brand-text font-weight-light">FATBOAR</span>
                </NavLink>

                <div class="sidebar">
                    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div class="image">
                            <img src="dist/img/charles.jpg" class="img-circle elevation-2" alt="User" />
                        </div>
                        <div class="info">
                            <NavLink to="/backoffice" href="#" class="d-block" style={{color:"#fff", fontWeight:"bold"}}>Charles Atangui</NavLink>
                        </div>
                    </div>


                    <nav class="mt-2">
                        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                            {/* <li class="nav-item has-treeview menu-open">
                                <a href="#" class="nav-link active">
                                    <i class="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        Starter Pages
                                        <i class="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul class="nav nav-treeview">
                                    <li class="nav-item">
                                        <NavLink to="/gains" activeClassName="nav-link active">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Mes gains</p>
                                        </NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink to="/mon-compte" class="nav-link" activeClassName="nav-link active">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Mon compte</p>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li> */}
                            <li class="nav-item">
                                        <NavLink to="/backoffice" class="nav-link" activeClassName="nav-link active">
                                            <i class="fas fa-money-bill nav-icon"></i>
                                            <p style={{color:"#C2C7D0", fontWeight:"bold"}}>Vue d'ensemble</p>
                                        </NavLink>
                                    </li>
                            <li class="nav-item">
                                        <NavLink to="/gains" class="nav-link" activeClassName="nav-link active">
                                            <i class="fas fa-money-bill nav-icon"></i>
                                            <p style={{color:"#C2C7D0", fontWeight:"bold"}}>Mes gains</p>
                                        </NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink to="/mon-compte" class="nav-link" activeClassName="nav-link active">
                                            <i class="fas fa-user-tie nav-icon"></i>
                                            <p style={{color:"#C2C7D0", fontWeight:"bold"}}>Mon compte</p>
                                        </NavLink>
                                    </li>
                            <li class="nav-item">
                                <NavLink to="/utilisateurs" class="nav-link" activeClassName="nav-link active">
                                    <i class="nav-icon fas fa-users"></i>
                                    <p style={{color:"#C2C7D0", fontWeight:"bold"}}>
                                        Utilisateurs
                                        <span class="right badge badge-danger"></span>
                                    </p>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                </div>

            </aside>
    )
    }
}