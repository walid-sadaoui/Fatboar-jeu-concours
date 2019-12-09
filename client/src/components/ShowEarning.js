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
                   <div className="content">
                       <div className="content-header">
                           <div className="container-fluid">
                               <div className="row mb-2">
                                   <div className="col-sm-6">
                                       <h1 className="m-0 text-dark">Liste de vos gains</h1>
                                   </div>
                               </div>
                           </div>
                       </div>

                        <div className="row">
                            <div className="col-md-4">
                                <div className="card card-widget widget-user">
                                    <div className="widget-user-header bg-gradient-blue">
                                        <h3 className="widget-user-username">Burger raclette</h3>
                                        <h5 className="widget-user-desc">Le Seigneur Des Burgers</h5>
                                    </div>
                                    <div className="widget-user-image">
                                        <img className="img-circle elevation-2" src="../dist/img/food/02.png"
                                             alt="User Avatar" />
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col-sm-6 border-right">
                                                <div className="description-block">
                                                    <h5 className="description-header">1056</h5>
                                                    <span className="description-text">TICKET</span>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="description-block">
                                                    <h5 className="description-header">35</h5>
                                                    <span className="description-text">GAINS</span>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="col-md-4">

                                <div className="card card-widget widget-user">

                                    <div className="widget-user-header bg-gradient-danger">
                                        <h3 className="widget-user-username">Cocktail </h3>
                                        <h5 className="widget-user-desc">Cocktail Americain</h5>
                                    </div>
                                    <div className="widget-user-image">
                                        <img className="img-circle elevation-2" src="../dist/img/food/01.png"
                                             alt="User Avatar" />
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">

                                            <div className="col-sm-6 border-right">
                                                <div className="description-block">
                                                    <h5 className="description-header">1056</h5>
                                                    <span className="description-text">TICKET</span>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="description-block">
                                                    <h5 className="description-header">35</h5>
                                                    <span className="description-text">GAINS</span>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="col-md-4">

                                <div className="card card-widget widget-user">

                                    <div className="widget-user-header bg-gradient-orange">
                                        <h3 className="widget-user-username">Kebab </h3>
                                        <h5 className="widget-user-desc">Lamelles de kebab</h5>
                                    </div>
                                    <div className="widget-user-image">
                                        <img className="img-circle elevation-2" src="../dist/img/food/food2.jpg"
                                             alt="User Avatar" />
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col-sm-6 border-right">
                                                <div className="description-block">
                                                    <h5 className="description-header">1056</h5>
                                                    <span className="description-text">TICKET</span>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="description-block">
                                                    <h5 className="description-header">35</h5>
                                                    <span className="description-text">GAINS</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-widget widget-user">
                                    <div className="widget-user-header bg-gradient-blue">
                                        <h3 className="widget-user-username">Burger raclette</h3>
                                        <h5 className="widget-user-desc">Le Seigneur Des Burgers</h5>
                                    </div>
                                    <div className="widget-user-image">
                                        <img className="img-circle elevation-2" src="../dist/img/food/02.png"
                                             alt="User Avatar" />
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col-sm-6 border-right">
                                                <div className="description-block">
                                                    <h5 className="description-header">1056</h5>
                                                    <span className="description-text">TICKET</span>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="description-block">
                                                    <h5 className="description-header">35</h5>
                                                    <span className="description-text">GAINS</span>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="col-md-4">

                                <div className="card card-widget widget-user">

                                    <div className="widget-user-header bg-gradient-danger">
                                        <h3 className="widget-user-username">Cocktail </h3>
                                        <h5 className="widget-user-desc">Cocktail Americain</h5>
                                    </div>
                                    <div className="widget-user-image">
                                        <img className="img-circle elevation-2" src="../dist/img/food/01.png"
                                             alt="User Avatar" />
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">

                                            <div className="col-sm-6 border-right">
                                                <div className="description-block">
                                                    <h5 className="description-header">1056</h5>
                                                    <span className="description-text">TICKET</span>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="description-block">
                                                    <h5 className="description-header">35</h5>
                                                    <span className="description-text">GAINS</span>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="col-md-4">

                                <div className="card card-widget widget-user">

                                    <div className="widget-user-header bg-gradient-orange">
                                        <h3 className="widget-user-username">Kebab </h3>
                                        <h5 className="widget-user-desc">Lamelles de kebab</h5>
                                    </div>
                                    <div className="widget-user-image">
                                        <img className="img-circle elevation-2" src="../dist/img/food/food2.jpg"
                                             alt="User Avatar" />
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col-sm-6 border-right">
                                                <div className="description-block">
                                                    <h5 className="description-header">1056</h5>
                                                    <span className="description-text">TICKET</span>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="description-block">
                                                    <h5 className="description-header">35</h5>
                                                    <span className="description-text">GAINS</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-widget widget-user">
                                    <div className="widget-user-header bg-gradient-blue">
                                        <h3 className="widget-user-username">Burger raclette</h3>
                                        <h5 className="widget-user-desc">Le Seigneur Des Burgers</h5>
                                    </div>
                                    <div className="widget-user-image">
                                        <img className="img-circle elevation-2" src="../dist/img/food/02.png"
                                             alt="User Avatar" />
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col-sm-6 border-right">
                                                <div className="description-block">
                                                    <h5 className="description-header">1056</h5>
                                                    <span className="description-text">TICKET</span>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="description-block">
                                                    <h5 className="description-header">35</h5>
                                                    <span className="description-text">GAINS</span>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="col-md-4">
                                <div className="card card-widget widget-user">
                                    <div className="widget-user-header bg-gradient-danger">
                                        <h3 className="widget-user-username">Cocktail </h3>
                                        <h5 className="widget-user-desc">Cocktail Americain</h5>
                                    </div>
                                    <div className="widget-user-image">
                                        <img className="img-circle elevation-2" src="../dist/img/food/01.png"
                                             alt="User Avatar" />
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col-sm-6 border-right">
                                                <div className="description-block">
                                                    <h5 className="description-header">1056</h5>
                                                    <span className="description-text">TICKET</span>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="description-block">
                                                    <h5 className="description-header">35</h5>
                                                    <span className="description-text">GAINS</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">

                                <div className="card card-widget widget-user">
                                    <div className="widget-user-header bg-gradient-orange">
                                        <h3 className="widget-user-username">Kebab </h3>
                                        <h5 className="widget-user-desc">Lamelles de kebab</h5>
                                    </div>
                                    <div className="widget-user-image">
                                        <img className="img-circle elevation-2" src="../dist/img/food/food2.jpg"
                                             alt="User Avatar" />
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col-sm-6 border-right">
                                                <div className="description-block">
                                                    <h5 className="description-header">1056</h5>
                                                    <span className="description-text">TICKET</span>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="description-block">
                                                    <h5 className="description-header">35</h5>
                                                    <span className="description-text">GAINS</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                   </div>
                   </div>
               </div>
               </React.Fragment>

    )
    }
}