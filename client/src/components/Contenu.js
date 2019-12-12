import React, {Component} from 'react';



class MonCompte extends Component {
    render(){
        return (

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
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="small-box bg-primary">
                                    <div className="inner">
                                        <h3>150</h3>

                                        <p>Gain gagner</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fas fa-shopping-cart"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">
                                        Voir plus <i className="fas fa-arrow-circle-right"></i>
                                    </a>
                                </div>

                                <div className="card card-primary card-outline">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>

                                        <p className="card-text">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's
                                            content.
                                        </p>
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Ajouter votre nouveau tiket ici !</h3>
                                    </div>

                                    <form className="form-horizontal">
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <label htmlFor="inputEmail3"
                                                       className="col-sm-2 col-form-label">Numéro</label>
                                                <div className="col-sm-10">
                                                    <input type="number" className="form-control" id="inputEmail3"
                                                           placeholder="Ex: 1056" />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-info">Ajouter</button>
                                            <button type="submit" className="btn btn-default float-right">Effacer
                                            </button>
                                        </div>

                                    </form>
                                </div>

                                <div className="card card-primary card-outline">
                                    <div className="card-header">
                                        <h5 className="m-0">Featured</h5>
                                    </div>
                                    <div className="card-body">
                                        <h6 className="card-title">Special title treatment</h6>

                                        <p className="card-text">With supporting text below as a natural lead-in to
                                            additional content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

    )
    }
}

export default MonCompte