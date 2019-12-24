import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import TitreInscription from '../assets/img/titres/inscription.png';
import Footer from './Footer';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

const API_URL = process.env.REACT_APP_API_URL;

export default class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
          firstName: '',
          lastName: '',
          password: '',
          email: '',
          phone: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);  
      }
    
      onChange = e => {
        this.setState({ [e.target.id]: e.target.value});
      }
    
      onSubmit = e => {
        e.preventDefault();
        const userData = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          password: this.state.password,
          email: this.state.email,
          phone: this.state.phone
        };
    
        const url = `${API_URL}/auth/register`;
        console.log(url)
        axios.post(url, userData, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        })
        .then(res => res.data)
        .then(res => {
          if (res.status === 200){
            alert('Inscription réussie !')
            this.props.history.push('/connexion');
          }        
        })
        .catch(err => {
          console.error(err);
          alert('Error please try again...');
        })
      } 

    render(){
        return (
            <React.Fragment>
            <div className="register-page" style={{paddingBottom: "100px"}}>
                <div className="register-box">
                    <div className="register-logo">
                    <img src={TitreInscription} alt="fatboar-inscription" width="100%" class="wow fadeInUp"/>
                    </div>
                    <div className="card habillage-form wow fadeInUp">
                        <div className="card-body register-card-body">
                            {/* <p className="login-box-msg">S'enregistrer</p> */}
                            <form onSubmit={this.onSubmit}>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Prénom"  name="firstName" value={this.state.firstName} id="firstName" onChange={this.onChange} required/>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                            </div>
                                        </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Nom"  name="lastName" value={this.state.lastName} id="lastName" onChange={this.onChange} required/>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                            </div>
                                        </div>
                                </div>                                
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="E-mail" name="email" value={this.state.email} id="email" onChange={this.onChange} required/>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                            </div>
                                        </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Mot de passe" name="password" value={this.state.password} id="password" onChange={this.onChange} required/>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                            <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                                            </div>
                                        </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="tel" className="form-control" placeholder="Numéro de téléphone" name="phone" value={this.state.phone} id="phone" onChange={this.onChange} required/>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                            <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                                            </div>
                                        </div>
                                </div>
                                    <span className="centre">
                                        <button type="submit" className="btn btn-primary btn-block">S'inscrire</button>
                                    </span>
                            </form>

                            <div className="social-auth-links text-center">
                                <p className="centre">- OU -</p>
                                <a href="#" className="btn btn-block btn-primary">
                                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> Inscription par Facebook
                                </a>
                                <a href="#" className="btn btn-block btn-danger">
                                <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Inscription par Google
                                </a>
                            </div>
                            <NavLink to="/connexion"><h6 className="centre">Je suis déjà un membre</h6></NavLink>
                        </div>
                    </div>
                    <NavLink to="/" className="btn btn-block btn-default wow fadeInUp" data-wow-delay="0.3s">
                    <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Retour à l'accueil
                    </NavLink>
                </div>
            </div>
            </React.Fragment>
        )
    }
}