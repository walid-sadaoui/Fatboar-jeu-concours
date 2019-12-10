import React, {Component} from 'react';
import axios from 'axios';
const API_URL = "http://localhost:5001";

export default class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
          email: '',
          password: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this); 
      }
  
      onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };
  
      onSubmit = e => {
        e.preventDefault();
        const userData = {
          email: this.state.email,
          password: this.state.password
        };
        localStorage.setItem('pass', userData.password);
        const url = `${API_URL}/auth/login`;
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
          const { token } = res;
          const { user: { idUser, firstName, lastName, phone, email} } = res;
          localStorage.setItem('token', token);
          localStorage.setItem('idUser', idUser);
          localStorage.setItem('lastName', lastName);
          localStorage.setItem('firstName', firstName);
          localStorage.setItem('email', email);
          localStorage.setItem('phone', phone);
          if (res.status === 200){
            this.props.history.push('/show-earning');
          }        
        })
        .catch(err => {
          console.error(err);
          alert('Error logging in please try again...')
        })
      }
  
    render(){
        return (

            <div className="login-page" style={{minheight: 512.391}}>


                <div className="login-box">
                    <div className="login-logo">
                        <a href="../../index2.html"><b>FAT</b>BOAR</a>
                    </div>

                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Connectez-vous pour commencer !</p>

                            <form onSubmit={this.onSubmit}>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email" value={this.state.email} id="email" onChange={this.onChange}/>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-envelope"></span>
                                            </div>
                                        </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Password" id="password" value={this.state.password} onChange={this.onChange}/>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-lock"></span>
                                            </div>
                                        </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="remember" />
                                                <label htmlFor="remember">
                                                    Se souvenir de moi
                                                </label>
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <button type="submit" className="btn btn-primary btn-block">login in</button>
                                    </div>

                                </div>
                            </form>

                            <div className="social-auth-links text-center mb-3">
                                <p>- OU -</p>
                                <a href="/#" className="btn btn-block btn-primary">
                                    <i className="fab fa-facebook mr-2"></i> Connection par Facebook
                                </a>
                                <a href="/#" className="btn btn-block btn-danger">
                                    <i className="fab fa-github mr-2"></i> Connection par Github
                                </a>
                            </div>


                            <p className="mb-1">
                                <a href="forgot-password.html">Mot de passe oublié</a>
                            </p>
                            <p className="mb-0">
                                <a href="register.html" className="text-center">S'inscrire</a>
                            </p>
                        </div>

                    </div>
                </div>

            </div>


        )
    }
}