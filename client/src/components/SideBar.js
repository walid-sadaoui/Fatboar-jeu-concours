// SideBar.js
import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import logofatboar from '../assets/img/logofatboar.png'
import avatar from '../assets/img/avatar.png'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faChartLine, faHourglassEnd, faMoneyBillWave, faUserTie, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const API_URL = process.env.REACT_APP_API_URL;
export default class SideBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            role: ''
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
            this.setState({ firstName: data.user.firstName, lastName: data.user.lastName, role: data.user.role})
        })
        .catch(err => console.log(err));
    }

    removeItem() {
        localStorage.removeItem('targetId');
        localStorage.removeItem('idGain');
    }

    render(){
        const roleU = this.state.role;
        let userlist, emailList, gainList, addTicketPage, espacePerso, tirage;
        if (roleU == "ADMIN"){
            userlist = <li class="nav-item">
                <NavLink to="/utilisateurs" class="nav-link" activeClassName="nav-link active" onClick={this.removeItem}>
                <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                    <p style={{color:"#C2C7D0", fontWeight:"bold"}}>
                        Utilisateurs
                        <span class="right badge badge-danger"></span>
                    </p>
                </NavLink>
            </li>
            emailList = <li class="nav-item">
            <NavLink to="/users-mails" class="nav-link" activeClassName="nav-link active" onClick={this.removeItem}>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                <p style={{color:"#C2C7D0", fontWeight:"bold"}}>
                    E-mail des users
                    <span class="right badge badge-danger"></span>
                </p>
            </NavLink>
            </li>
            espacePerso = <li class="nav-item">
            <NavLink to="/stats" class="nav-link" activeClassName="nav-link active" onClick={this.removeItem}>
            <FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon>
                <p style={{color:"#C2C7D0", fontWeight:"bold"}}>
                    Espace Personnel
                    <span class="right badge badge-danger"></span>
                </p>
            </NavLink>
            </li>
            tirage = <li class="nav-item">
                <NavLink to="/tirage-au-sort" class="nav-link" activeClassName="nav-link active">
                <FontAwesomeIcon icon={faHourglassEnd}></FontAwesomeIcon>
                <p style={{color:"#C2C7D0", fontWeight:"bold"}}>
                    Tirer au sort
                    <span class="right badge badge-danger"></span>
                </p>
            </NavLink>
        </li>
        }else{
            gainList = <li class="nav-item">
            <NavLink to="/gains" class="nav-link" activeClassName="nav-link active">
            <FontAwesomeIcon icon={faMoneyBillWave}></FontAwesomeIcon>
                <p style={{color:"#C2C7D0", fontWeight:"bold"}}>Mes gains</p>
            </NavLink>
        </li>
            addTicketPage = <li class="nav-item">
            <NavLink to="/backoffice" class="nav-link" activeClassName="nav-link active">
            <FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon>
                <p style={{color:"#C2C7D0", fontWeight:"bold"}}>Vue d'ensemble</p>
            </NavLink>
        </li>
        }

        return (
            <aside class="main-sidebar sidebar-dark-primary elevation-4 ">
                <NavLink to="/backoffice" class="brand-link">
                    <img src={logofatboar} alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
                         style={{opacity: '.9'}} />
                        <span class="brand-text font-weight-light">FATBOAR</span>
                </NavLink>

                <div class="sidebar">
                    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div class="image">
                            <img src={avatar} class="img-circle elevation-2" alt="User" />
                        </div>
                        <div class="info">
                            <NavLink to="/backoffice" href="#" class="d-block" style={{color:"#fff", fontWeight:"bold"}}>{this.state.firstName} {this.state.lastName}</NavLink>
                        </div>
                    </div>


                    <nav class="mt-2">
                        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                    {tirage}
                                    {espacePerso}
                                    {addTicketPage}
                                    {gainList}
                                    <li class="nav-item">
                                        <NavLink to="/mon-compte" class="nav-link" activeClassName="nav-link active">
                                        <FontAwesomeIcon icon={faUserTie}></FontAwesomeIcon>
                                            <p style={{color:"#C2C7D0", fontWeight:"bold"}}>Mon compte</p>
                                        </NavLink>
                                    </li>
                                    {userlist}
                                    {emailList}
                        </ul>
                    </nav>

                </div>

            </aside>
    )
    }
}