// Header.js
import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faBars, faPowerOff } from '@fortawesome/free-solid-svg-icons';

const API_URL = process.env.REACT_APP_API_URL;
export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            role: '',
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
            this.setState({ role: data.user.role})
        })
        .catch(err => console.log(err));
    }

    disconnect = e => {
        localStorage.removeItem('token');
        localStorage.removeItem('idUser');
        localStorage.removeItem('pass');
        localStorage.removeItem('gainId');
        localStorage.removeItem('targetId');
    }

    render(){
        let roleU = this.state.role;
        let searchBar;
        if (roleU === "ADMIN"){
            searchBar = <form className="form-inline ml-3">
            <div className="input-group input-group-sm">
                <input className="form-control form-control-navbar" type="search" placeholder="Effectuez une recherche..."
                       aria-label="Search"/>
                <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </form>
        }
        return (
            <nav className="main-header navbar navbar-expand navbar-white navbar-light ">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#"><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></a>
                    </li>
                </ul>

                {searchBar}


                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink to="/connexion" class="nav-link" activeClassName="nav-link active" onClick={this.disconnect}>
                        <FontAwesomeIcon icon={faPowerOff}></FontAwesomeIcon>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}