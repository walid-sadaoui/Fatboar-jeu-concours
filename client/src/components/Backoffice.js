import React, {Component} from 'react';
import Sidebar from './SideBar';
import {NavLink} from 'react-router-dom';
import AdminBar from './AdminBar';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const API_URL = process.env.REACT_APP_API_URL;
class Backoffice extends Component {
    constructor(props){
        super(props)
        this.state = {
            ticketNumber: '',
            total: '',
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this); 
      }

    componentDidMount(){
        this.callApi();
    }

    callApi(){
        const id = localStorage.getItem('idUser');
        const token = localStorage.getItem('token');
        const url = `${API_URL}/users/${id}/tickets`;
        axios.get(url, {
            method: 'Get',
            headers: {
                'Authorization': 'Bearer '+token
            }
        })
        .then(response => response.data)
        .then(res => {
            this.setState({ total: res.numberOfRows})
        })
        .catch(err => console.log(err));
    }
  
      onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };
  
      onSubmit = e => {
        e.preventDefault();
        const ticket = {
            ticketNumber: this.state.ticketNumber,
        };
        const id = localStorage.getItem('idUser');
        const token = localStorage.getItem('token');
        const url = `${API_URL}/users/${id}/ticket`;
        axios.put(url, ticket, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'content-Type': 'application/json',
            'Authorization': 'Bearer '+token
          },
          body: JSON.stringify(ticket)
        })
        .then(res => res.data)
        .then(res => {
          if (res.status === 200){
            alert('Ticket successfully added')
            this.props.history.push('/gains');
          }        
        })
        .catch(err => {
          console.error(err);
          alert('Wrong ticket number');
        })
      }

    render(){
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
                            <div className="col-lg-12">
                                <div className="small-box bg-primary">
                                    <div className="inner">
                                        <h1 style={{fontWeight: "bold"}}>{this.state.total}</h1>
                                        <h5>Total des gains</h5>
                                    </div>
                                    <div className="icon">
                                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                                    </div>
                                    <NavLink to="/gains" className="small-box-footer">
                                        Voir plus <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
                                    </NavLink>
                                </div>                          
                            </div>
                            </div>

                            <div className="row">
                            {/* <div className="col-lg-4">
                            <div class="card">
                                    <img class="card-img-top" src={Dessert} alt="Card image cap"/>
                                    <div class="card-body">
                                        <h5 class="card-text text-center"><i className="fa fa-clock"></i> Gagné il y 4 minutes...</h5>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-lg-8">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Ajouter votre nouveau ticket ici !</h3>
                                    </div>

                                    <form className="form-horizontal" onSubmit={this.onSubmit}>
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <label htmlFor="inputEmail3"
                                                       className="col-sm-2 col-form-label" style={{color: "#333333"}}>Numéro</label>
                                                <div className="col-sm-10">
                                                    <input type="number" className="form-control" id="ticketNumber" value={this.state.ticketNumber} name="ticketNumber" placeholder="Ex: 105654896" onChange={this.onChange}/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary">Ajouter</button>
                                            <button type="reset" className="btn btn-default float-right">Effacer></button>
                                        </div>
                                    </form>
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

export default Backoffice