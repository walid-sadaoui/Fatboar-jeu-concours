import React, {Component} from 'react';
import Sidebar from './SideBar';
import RangeRover from 'public/img/RangeRover.png';
import AdminBar from './AdminBar';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

class TirageGagnant extends Component {
    constructor(props){
        super(props)
        this.state = {
            ticket: {},
            user: {}
        };
      }

    componentDidMount(){
        this.callApi();
    }

    callApi() {
        const token = localStorage.getItem('token');
            
        const url = `${API_URL}/tickets/winning`;
        axios.get(url, {
            method: 'Get',
            headers: {
                'Authorization': 'Bearer '+token
            }
        })
        .then(response => response.data)
        .then(data => {
            this.setState({ ticket: data.ticket });
            this.setState({ user: data.ticket.user });
        })
        .catch(err => console.log(err));
    }

    render(){
        return (
            <React.Fragment>
            <AdminBar/>
            <Sidebar/>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6 mx-auto">
                                <h1 className="m-0 text-dark text-center"><b><i class="nav-icon fas fa-trophy"></i> Gagnant final <i class="nav-icon fas fa-trophy"></i></b></h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content wow fadeInUp">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <div class="card card-widget widget-user">
                                <div class="widget-user-header bg-danger">
                                    <h3 class="widget-user-username">{this.state.user.firstName} {this.state.user.lastName}</h3>
                                    <h5 class="widget-user-desc">Client</h5>
                                </div>
                                <div class="widget-user-image">
                                    <img class="img-circle elevation-2" width="100%" src="../dist/img/Mams.png" alt="Avatar gagnant"/>
                                </div>
                                <div class="card-footer">
                                    <div class="row">
                                    <div class="col-sm-6 border-right">
                                        <div class="description-block">
                                        <h5 class="description-header">{this.state.ticket.ticketNumber}</h5>
                                        <span class="description-text">TICKET</span>
                                        </div>
                                    </div>
                                    
                                    <div class="col-sm-6">
                                        <div class="description-block">
                                        <h5 class="description-header">{this.state.ticket.idGain}</h5>
                                        <span class="description-text">GAIN</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="col-lg-8 mx-auto">
                                <div className="small-box bg-light">
                                    <div className="inner">
                                        <h2 style={{fontWeight: "bold", textAlign:"center"}}>RANGE ROVER EVOQUE</h2>
                                        <h6 className="text-center">Le gagnant final est {this.state.user.firstName} {this.state.user.lastName}, qui sera verra remettre ce véhicule au restaurant, en présence de l'hussier.</h6>
                                    </div>
                                    <div className="icon">
                                        <img className="img-fluid" style={{width:"80%"}} src={RangeRover} alt="lot final" />
                                    </div>
                                    {/* <NavLink to="#" className="small-box-footer">
                                        Voir plus <i className="fas fa-arrow-circle-right"></i>
                                    </NavLink> */}
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

export default TirageGagnant
