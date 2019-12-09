import React, {Component} from 'react';
import Navbar from './Navbar';
export default class Dashboard extends Component {
    render(){
        return (
            <React.Fragment>
            <Navbar/>
            <div className="login-page" style={{minheight: 512.391}}>
                <div className="login-box">
                    <div className="login-logo">
                        <a href="../../index2.html"><b>FAT</b>BOAR</a>
                    </div>

                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Connectez-vous pour commencer !</p>

                            <form action="../../index3.html" method="post">
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-envelope"></span>
                                            </div>
                                        </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Password" />
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
                                <a href="#" className="btn btn-block btn-primary">
                                    <i className="fab fa-facebook mr-2"></i> Connection par Facebook
                                </a>
                                <a href="#" className="btn btn-block btn-danger">
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
            </React.Fragment>

        )
    }
}