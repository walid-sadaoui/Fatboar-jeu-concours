import React, {Component} from 'react';
import Sidebar from './SideBar';
import AdminBar from './AdminBar';

export default class Content extends Component {
    render(){
        return (
            <React.Fragment>
            <AdminBar/>
            <Sidebar/>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Espace personnel</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="card card-primary card-outline">
                                    <div className="card-body box-profile">
                                        <div className="text-center">
                                            <img className="profile-user-img img-fluid img-circle"
                                                 src="../../dist/img/charles.jpg" alt="User profile" />
                                        </div>
                                        <h3 className="profile-username text-center">Charles Atangui</h3>
                                        <p className="text-muted text-center">Administrateur</p>
                                        <ul className="list-group list-group-unbordered mb-3">
                                            <li className="list-group-item">
                                                <b>Gains</b> <a className="float-right">1,322</a>
                                            </li>
                                            <li className="list-group-item">
                                                <b>Tickets</b> <a className="float-right">543</a>
                                            </li>
                                        </ul>

                                    </div>

                                </div>



                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">À propos de moi</h3>
                                    </div>

                                    <div className="card-body">
                                            <strong><i className="fas fa-map-marker-alt mr-1"></i> Ville</strong>
                                            <p className="text-muted">Lyon, France</p>
                                            <hr/>
                                            <strong><i className="fas fa-calendar mr-1"></i> Date de naissance</strong>
                                            <p className="text-muted">18 Novembre 1992</p>
                                            <hr/>
                                            <strong><i className="fas fa-envelope-open-text mr-1"></i> Contact</strong>
                                            <p className="text-muted">info@charlesatangui.com</p>
                                    </div>

                                </div>

                            </div>

                            <div className="col-md-9">
                                <div className="card">
                                    <div className="card-header p-2">
                                        <ul className="nav nav-pills">
                                            <li className="nav-item"><a className="nav-link active" href="#activity"
                                                                        data-toggle="tab">Modifier</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#timeline"
                                                                        data-toggle="modal" data-target="#exampleModalCenter">Supprimer mon compte</a></li>
                                        </ul>
                                    </div>

                                    <div className="card-body">
                                        <div className="tab-content">
                                           
                                            <div className="tab-pane active" id="settings">
                                                <form className="form-horizontal">
                                                    <div className="form-group row">
                                                        <label style={{color:"#333333", fontWeight:"bold"}} htmlFor="inputName" className="col-sm-2 col-form-label">Nom</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control" id="inputName" placeholder="Changer le nom"/>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label style={{color:"#333333", fontWeight:"bold"}} htmlFor="inputName2"
                                                               className="col-sm-2 col-form-label">Prénom</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control" id="inputName2"
                                                                   placeholder="Changer le prénom"/>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label style={{color:"#333333", fontWeight:"bold"}} htmlFor="inputEmail"
                                                               className="col-sm-2 col-form-label">Adresse E-mail</label>
                                                        <div className="col-sm-10">
                                                            <input type="email" className="form-control" id="inputEmail"
                                                                   placeholder="Changer l'adresse e-mail"/>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label style={{color:"#333333", fontWeight:"bold"}} htmlFor="inputExperience"
                                                               className="col-sm-2 col-form-label">Ville</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control" id="inputExperience"
                                                                    placeholder="Changer la ville"/>
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
                                                    <i className="fa fa-exclamation-triangle fa-2x"></i> <h6>Vous êtes sur le point de supprimer définitivement votre compte.
                                                        Confirmez-vous cette opérattion ?
                                                    </h6>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Oui, je confirme</button>
                                                    <button type="button" class="btn btn-primary">Non, c'était une erreur</button>
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