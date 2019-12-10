import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../public/img/logofatboar.png';
import TitreInscription from '../../public/img/titres/inscription.png';


export default class Dashboard extends Component {
    render(){
        return (

            <div className="register-page" style={{minheight: 5}}>
                <div className="register-box">
                    <div className="register-logo">
                    
                    <img src={TitreInscription} alt="fatboar-inscription" width="100%" class="img-fluid"/>
                    </div>
                    <div className="card habillage-form">
                        <div className="card-body register-card-body">
                            {/* <p className="login-box-msg">S'enregistrer</p> */}
                            <form action="../../index.html" method="post">
                            <div className="input-group mb-3">
                                    <input type="number" className="form-control" placeholder="N° du Ticket (optionnel) " />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-ticket-alt"></span>
                                            </div>
                                        </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Nom" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-user"></span>
                                            </div>
                                        </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email" />
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
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Confirmer mot de passe" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-lock"></span>
                                            </div>
                                        </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-primary btn-block">S'inscrire</button>
                                    </div>

                                </div>
                            </form>

                            <div className="social-auth-links text-center">
                                <p className="centre">- OU -</p>
                                <a href="#" className="btn btn-block btn-primary">
                                <i className="fab fa-facebook mr-2"></i> Inscription par Facebook
                                </a>
                                <a href="#" className="btn btn-block btn-danger">
                                <i className="fab fa-google mr-2"></i> Inscription par Google
                                </a>
                            </div>
                            <NavLink to="/login"><h6 className="centre">Je suis déjà un membre</h6></NavLink>
                        </div>

                    </div>

                </div>

            </div>


        )
    }
}