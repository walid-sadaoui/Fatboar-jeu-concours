import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import TitreConnexion from 'public/img/titres/connexion.png';
import Footer from "./Footer";
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

class Connexion extends Component {
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
          const { user: { idUser}, token} = res;
          localStorage.setItem('token', token);
          localStorage.setItem('idUser', idUser);
          if (res.status === 200){
            this.props.history.push('/mon-compte');
          }        
        })
        .catch(err => {
          console.error(err);
          alert('Error logging in please try again...')
        })
      }

    render(){
        return (
            <React.Fragment>
            <div className="login-page" style={{paddingBottom: "100px"}}>
                <div className="login-box">
                    <div className="login-logo">
                    <img className="wow fadeInUp" src={TitreConnexion} width="100%" alt="connexion-fatboar"/>
                    </div>
                    <div className="card habillage-form wow fadeInUp">
                        <div className="card-body login-card-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="E-mail" id="email" name="email" value={this.state.email} onChange={this.onChange}/>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-envelope"></span>
                                            </div>
                                        </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Mot de passe"  id="password" name="password" value={this.state.password} onChange={this.onChange}/>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-lock"></span>
                                            </div>          
                                        </div>
                                </div>
                                    <span className="centre">
                                        <button type="submit" className="btn btn-primary btn-block">Se connecter</button>
                                    </span>
                            </form>

                            <div className="social-auth-links text-center mb-3">
                                <p className="centre">- OU -</p>
                                <a href="#" className="btn btn-block btn-primary">
                                    <i className="fab fa-facebook mr-2"></i> Connection par Facebook
                                </a>
                                <a href="#" className="btn btn-block btn-danger">
                                    <i className="fab fa-google mr-2"></i> Connection par Google
                                </a>
                            </div>
                            <h6 className="centre">
                                <a href="#">Mot de passe oublié ?</a>
                            </h6>
                            <h6 className="centre">
                                <NavLink to="/inscription" className="text-center">Je souhaite créer un compte</NavLink>
                            </h6>
                        </div>

                    </div>
                    <NavLink to="/" className="btn btn-block btn-default wow fadeInUp" data-wow-delay="0.3s">
                        <i className="fas fa-home mr-2"></i> Retour à l'accueil
                    </NavLink>
                </div>
            </div>
            <Footer/>
            </React.Fragment>

        )
    }
}
export default Connexion