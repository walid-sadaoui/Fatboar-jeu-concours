import React, {Component} from 'react';
import Sidebar from './SideBar';
import AdminBar from './AdminBar';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
const API_URL = process.env.REACT_APP_API_URL;

export default class Content extends Component {
    constructor(props){
        super(props)
        this.state = {
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          phone: '',
          total: '',
          role:'',
          total: '',
          user: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
      }
  
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
  

    componentDidMount(){
        this.callApi2()
        this.callApi();
    }

    callApi2(){
        let id;
        if (localStorage.getItem("targetId")){
            id = localStorage.getItem('targetId');
        } else {
            id = localStorage.getItem('idUser');
        }
        const url = `${API_URL}/users/${id}/tickets`;
        const token = localStorage.getItem('token');
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

    callApi() {
        let id;
        if (localStorage.getItem("targetId")){
            id = localStorage.getItem('targetId');
        } else {
            id = localStorage.getItem('idUser');
        }
        const token = localStorage.getItem('token');
        const password = localStorage.getItem('pass');

        const url = `${API_URL}/users/${id}`;
        axios.get(url, {
            method: 'Get',
            headers: {
                'Authorization': 'Bearer '+token
            }
        })
        .then(response => response.data)
        .then(data => {
            this.setState({user: data.user})
            this.setState({ password: password, firstName: data.user.firstName, lastName: data.user.lastName, email: data.user.email, phone: data.user.phone, role: data.user.role});
        })
        .catch(err => console.log(err));
    }

  
    onSubmit = e => {
        e.preventDefault();
        const userData = {
          email: this.state.email,
          password: this.state.password,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          phone: this.state.phone
        };
        let id;
        if (localStorage.getItem("targetId")){
            id = localStorage.getItem('targetId');
        } else {
            id = localStorage.getItem('idUser');
        }        
        const token = localStorage.getItem('token');
        const url = `${API_URL}/users/${id}`;
        axios.put(url, userData, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'content-Type': 'application/json',
            'Authorization': 'Bearer '+token
          },
          body: JSON.stringify(userData)
        })
        .then(res => res.data)
        .then(res => {
          if (res.status === 200){
            alert('User successfully updated');
            window.location.reload();
            this.props.history.push('/mon-compte');
          }        
        })
        .catch(err => {
          console.error(err);
          alert('Error logging in please try again...')
        })
      }

      handleDelete = e => {
        e.preventDefault();
        let id;
        if (localStorage.getItem("targetId")){
            id = localStorage.getItem('targetId');
        } else {
            id = localStorage.getItem('idUser');
        }
        const token = localStorage.getItem('token');     
        const url = `${API_URL}/users/${id}`;
        axios.delete(url, {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'content-Type': 'application/json',
              'Authorization': 'Bearer '+token
            },
        })
        .then(res => {
            if (res.status === 200){
                this.props.history.push('/connexion');
                alert('User Deleted !')
            }
        })
        .catch(err => {
            console.log(err);
            alert("Error !");
        })
      }

      getId = e => {
        const userId = localStorage.getItem("targetId");
        localStorage.setItem("idGain", userId);
        console.log(localStorage.getItem("idGain"));
      }

    render(){
        const role = this.state.role;
        let seeGains;
        if (role === "CLIENT"){
            seeGains = <li className="list-group-item">
                <NavLink to="/gains" onClick={this.getId}><b>Nombre de Gains</b> </NavLink><a className="float-right">{this.state.total}</a>
            </li>                                        
        }
        return (
            <React.Fragment>
            <AdminBar/>
            <Sidebar/>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Compte personnel</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content wow fadeInUp">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="card card-primary card-outline">
                                    <div className="card-body box-profile">
                                        <div className="text-center">
                                            <img className="profile-user-img img-fluid img-circle"
                                                 src="../../dist/img/charles.jpg" alt="User profile" />
                                        </div>
                                        <h3 className="profile-username text-center">{this.state.user.firstName} {this.state.user.lastName}</h3>
                                        <p className="text-muted text-center">{this.state.role}</p>
                                        <ul className="list-group list-group-unbordered mb-3">
                                            {seeGains}
                                        </ul>
                                    </div>
                                </div>

                                <div className="card card-blue">
                                    <div className="card-header">
                                        <h3 className="card-title">À propos de moi</h3>
                                    </div>

                                    <div className="card-body">
                                            <strong><i className="fas fa-phone mr-1"></i>Téléphone</strong>
                                            <p className="text-muted">{this.state.user.phone}</p>
                                            <hr/>
                                            <strong><i className="fas fa-envelope-open-text mr-1"></i> Contact</strong>
                                            <p className="text-muted">{this.state.user.email}</p>
                                    </div>

                                </div>

                            </div>

                            <div className="col-md-9">
                                <div className="card">
                                    <div className="card-header p-2">
                                        <ul className="nav nav-pills">
                                            <li className="nav-item"><a className="nav-link active btn-danger" href="#activity"
                                            data-toggle="tab">Modifier</a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="#timeline"
                                            data-toggle="modal" data-target="#exampleModalCenter">Supprimer mon compte</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="card-body">
                                        <div className="tab-content">
                                           
                                            <div className="tab-pane active" id="settings">
                                                <form className="form-horizontal" onSubmit={this.onSubmit}>
                                                    <div className="form-group row">
                                                        <label style={{color:"#333333", fontWeight:"bold"}} htmlFor="inputName" className="col-sm-2 col-form-label">Nom</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control" id="lastName" placeholder="Changer le nom" value={this.state.lastName} onChange={this.onChange}/>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label style={{color:"#333333", fontWeight:"bold"}} htmlFor="inputName2"
                                                               className="col-sm-2 col-form-label">Prénom</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control" id="firstName" value={this.state.firstName} onChange={this.onChange}
                                                                   placeholder="Changer le prénom"/>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label style={{color:"#333333", fontWeight:"bold"}} htmlFor="inputEmail"
                                                               className="col-sm-2 col-form-label">Adresse E-mail</label>
                                                        <div className="col-sm-10">
                                                            <input type="email" className="form-control" id="email" value={this.state.email} onChange={this.onChange}
                                                                   placeholder="Changer l'adresse e-mail"/>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label style={{color:"#333333", fontWeight:"bold"}} htmlFor="inputExperience"
                                                               className="col-sm-2 col-form-label">Mot de passe</label>
                                                        <div className="col-sm-10">
                                                            <input type="password" className="form-control" id="password" value={this.state.password} onChange={this.onChange}
                                                                    placeholder="Changer votre mot de passe"/>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label style={{color:"#333333", fontWeight:"bold"}} htmlFor="inputExperience"
                                                               className="col-sm-2 col-form-label">Téléphone</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control" id="phone" value={this.state.phone} onChange={this.onChange}
                                                                    placeholder="Changer le N° de Téléphone"/>
                                                        </div>
                                                    </div>
                    
                                                    <div className="form-group row">
                                                        <div className="offset-sm-2 col-sm-10">
                                                            <button type="submit" className="btn btn-danger">Modifier
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>

                                            {/* Supprimer compte */}
                                            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered" role="document">
                                                <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalCenterTitle">Supprimer votre compte ?</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <i className="fa fa-exclamation-triangle fa-2x" style={{textAlign:"center!important"}}></i> <h6>Vous êtes sur le point de supprimer définitivement votre compte.
                                                        Confirmez-vous cette opérattion ?
                                                    </h6>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" onClick={this.handleDelete}>Oui, je confirme</button>
                                                    <button type="reset" class="btn btn-dark" data-dismiss="modal">Non, c'était une erreur</button>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                            {/* End Supp Compte */}
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>
            </div>
            </React.Fragment>

    )
    }
}