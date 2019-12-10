import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import TitreConnexion from '../../public/img/titres/connexion.png';

class Connexion extends Component {
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
                            <form action="#" method="post">
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="E-mail" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-envelope"></span>
                                            </div>
                                        </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Mot de passe" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-lock"></span>
                                            </div>          
                                        </div>
                                </div>
                                    <span className="centre">
                                    <NavLink to="/dashboard"><button type="submit" className="btn btn-primary btn-block">Se connecter</button></NavLink>
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
                                <a href="forgot-password.html">Mot de passe oublié ?</a>
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
            </React.Fragment>

        )
    }
}
export default Connexion