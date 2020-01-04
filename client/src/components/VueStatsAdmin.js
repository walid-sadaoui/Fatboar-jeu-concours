import React, {Component} from 'react';
import Sidebar from './SideBar';
import {NavLink} from 'react-router-dom';
import AdminBar from './AdminBar';
// import Dessert from '../../public/img/2020-dessert.jpeg';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faArrowCircleRight, faChartPie, faDownload, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

const API_URL = process.env.REACT_APP_API_URL;

class VueStatsAdmin extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: [],
            ticketUsed: '',
            allU: ''
        };
      }

    componentDidMount(){
        this.callApi();
        this.allUsers();
    }

    callApi() {

        const token = localStorage.getItem('token');
            
        const url = `${API_URL}/tickets/`;
        axios.get(url, {
            method: 'Get',
            headers: {
                'Authorization': 'Bearer '+token
            }
        })
        .then(response => response.data)
        .then(data => {
            this.setState({ users: data.tickets, ticketUsed: data.allticketsUsed});
        })
        .catch(err => console.log(err));
    }

    allUsers(){
        const token = localStorage.getItem('token');
            
        const url = `${API_URL}/users/`;
        axios.get(url, {
            method: 'Get',
            headers: {
                'Authorization': 'Bearer '+token
            }
        })
        .then(response => response.data)
        .then(data => {
            this.setState({ allU: data.allUsers});
        })
        .catch(err => console.log(err));
    }

    redirect = e => {
        console.log(e.target)
        localStorage.setItem('targetId', e.target.id);
        this.props.history.push('/mon-compte');
    }

    render(){
        const users = this.state.users;
        return (
            <React.Fragment>
            <AdminBar/>
            <Sidebar/>
            <div className="content-wrapper backoffice">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Espace personnel</h1>
                            </div>
                        </div>
                    </div>
                </div>
            
                    <div className="content wow fadeInUp">
                    <div className="container-fluid">
                    <div className="row">
                    <div className="col-lg-6">
                        <div class="small-box bg-danger">
                            <div class="inner">
                            <h1 style={{fontWeight: "bold"}}>{this.state.allU}</h1>
                            <h5>Total des participants</h5>
                            </div>
                            <div class="icon">
                            <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
                            </div>
                            <NavLink to="/utilisateurs" class="small-box-footer">
                                Voir plus <FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon>
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div class="small-box bg-success">
                            <div class="inner">
                            <h1 style={{fontWeight: "bold"}}>{this.state.ticketUsed}</h1>
                            <h5>Nombre de gains distribués</h5>
                            </div>
                            <div class="icon">
                            <FontAwesomeIcon icon={faChartPie}></FontAwesomeIcon>
                            </div>
                            <NavLink to="#" class="small-box-footer">
                                Voir plus <FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon>
                            </NavLink>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-12">
                    <div class="card">
                    <div class="card-header border-0">
                        <h3 class="card-title">Participants récents</h3>
                        <div class="card-tools">
                        <NavLink to="#" class="btn btn-tool btn-sm">
                        <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                        </NavLink>
                        <NavLink to="#" class="btn btn-tool btn-sm">
                        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                        </NavLink>
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <table class="table table-striped table-valign-middle">
                        <thead>
                        <tr>
                            <th>Identité</th>
                            <th>N° Ticket</th>
                            <th>Gain</th>
                            <th>Profil</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.users.map(ticket=> 
                                    <tr>
                                        <td>
                                        <img src="dist/img/Sonia.png" alt="user 1" class="img-circle img-size-32 mr-2"/>
                                            {ticket.user.firstName} {ticket.user.lastName}
                                        </td>
                                        <td>{ticket.ticketNumber}</td>
                                        <td>
                                            {ticket.gain.description}
                                        </td>
                                        <td>
                                        <NavLink to="#" class="text-muted" onClick={this.redirect} id={ticket.user.idUser}>
                                            <FontAwesomeIcon icon={faSearch} id={ticket.user.idUser}></FontAwesomeIcon>
                                        </NavLink>
                                        </td>
                                    </tr>
                                )
                            }                        
                        </tbody>
                        </table>
                    </div>
                    </div>                        
                            </div>
                            </div>
                    </div>
                </div>
            </div>
            </React.Fragment>

    )
    }
}

export default VueStatsAdmin