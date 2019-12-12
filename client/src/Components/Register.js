import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
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
            this.props.history.push('/login');
          }        
        })
        .catch(err => {
          console.error(err);
          alert('Error please try again...');
        })
      }  
    
    render(){
        return (

            <div className="register-page" style={{minheight: 586.391}}>


                <div className="register-box">
                    <div className="register-logo">
                        <a href="../../index2.html"><b>FAT</b>BOAR</a>
                    </div>

                    <div className="card">
                        <div className="card-body register-card-body">
                            <p className="login-box-msg">S'enregistrer</p>

                            <form onSubmit={this.onSubmit}>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Prénom" id="firstName" name="firstName" value={this.state.firstName} onChange={this.onChange}/>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-user"></span>
                                            </div>
                                        </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Nom" id="lastName" name="lastName" value={this.state.lastName} onChange={this.onChange}/>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-user"></span>
                                            </div>
                                        </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email"  id="email" name="email" value={this.state.email} onChange={this.onChange} />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-envelope"></span>
                                            </div>
                                        </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Numéro de téléphone" id="phone" name="phone" value={this.state.phone} onChange={this.onChange} />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-phone"></span>
                                            </div>
                                        </div>
                                </div>                                
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Mot de passe" id="password" name="password" value={this.state.password} onChange={this.onChange} />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-lock"></span>
                                            </div>
                                        </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="agreeTerms" name="terms" value="agree" />
                                                <label htmlFor="agreeTerms">
                                                    Je suis d'accord <a href="/#">terms</a>
                                                </label>
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <button type="submit" className="btn btn-primary btn-block">Créer</button>
                                    </div>

                                </div>
                            </form>

                            <div className="social-auth-links text-center">
                                <p>- OU -</p>
                                <a href="/#" className="btn btn-block btn-primary">
                                    <i className="fab fa-facebook mr-2"></i>
                                    S'enregistrer par Facebook
                                </a>
                                <a href="/#" className="btn btn-block btn-dark">
                                    <i className="fab fa-github mr-2"></i>
                                    S'enregistrer par Github
                                </a>
                            </div>

                            <NavLink to="/login" className="text-center">Je suis déjà un membre</NavLink>
                        </div>

                    </div>

                </div>

            </div>


        )
    }
}