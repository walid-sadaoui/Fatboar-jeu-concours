import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';



export default class Dashboard extends Component {
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

                            <form action="../../index.html" method="post">
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
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="agreeTerms" name="terms" value="agree" />
                                                <label htmlFor="agreeTerms">
                                                    Je suis d'accord <a href="#">terms</a>
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
                                <a href="#" className="btn btn-block btn-primary">
                                    <i className="fab fa-facebook mr-2"></i>
                                    S'enregistrer par Facebook
                                </a>
                                <a href="#" className="btn btn-block btn-dark">
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