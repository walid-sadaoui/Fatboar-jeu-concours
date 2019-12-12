// SideBar.js

import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export default class SideBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: ''
        };
      }

    componentDidMount(){
        this.callApi();
    }

    callApi() {
        const id = localStorage.getItem('idUser');
        const token = localStorage.getItem('token');
            
        const url = `${API_URL}/users/${id}`;
        axios.get(url, {
            method: 'Get',
            headers: {
                'Authorization': 'Bearer '+token
            }
        })
        .then(response => response.data)
        .then(data => {
            this.setState({ firstName: data.user.firstName, lastName: data.user.lastName})
        })
        .catch(err => console.log(err));
    }

    render(){
        return (
            <aside class="main-sidebar sidebar-dark-primary elevation-4 ">
                <NavLink to="/dashboard" class="brand-link">
                    <img src="dist/img/logofatboar.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
                         style={{opacity: '.8'}} />
                        <span class="brand-text font-weight-light">Fatboar</span>
                </NavLink>


                <div class="sidebar">
                    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div class="image">
                            <img src="dist/img/charles.jpg" class="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div class="info">
                            <a href="/#" class="d-block">{this.state.firstName} {this.state.lastName}</a>
                        </div>
                    </div>

                    <nav class="mt-2">
                        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                            <li class="nav-item has-treeview menu-open">
                                <a href="/#" class="nav-link active">
                                    <i class="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        Starter Pages
                                        <i class="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul class="nav nav-treeview">
                                    <li class="nav-item">
                                        <NavLink to="/show-earning" activeClassName="nav-link active">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Mes gains</p>
                                        </NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink to="/edit-account" class="nav-link" activeClassName="nav-link active">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Mon compte</p>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/show-users" class="nav-link" activeClassName="nav-link active">
                                    <i class="nav-icon fas fa-users"></i> 
                                    <p>
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