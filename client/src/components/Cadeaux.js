import React from 'react';
import TitreCadeaux from 'public/img/titres/cadeaux.png';
import RangeRover from 'public/img/2020-rangeOver.jpg';
import Burger from 'public/img/2020-burger.webp';
import MenuJour from 'public/img/2020-menu-jour.webp';
import MenuChoix from 'public/img/2020-menu-choix.webp';
import Dessert from 'public/img/2020-dessert.jpeg';
import Remise from 'public/img/2020-pourcentage.jpg';
import Navbar from './Navbar';
import Footer from './Footer';

class Cadeaux extends React.Component{
    render(){
        return(
            <React.Fragment>
            <Navbar/>
            <section id="Cadeaux">
                <div className="container">
                <div className="section-header" style={{paddingBottom: "180px", paddingTop: "160px"}}>
                <img src={TitreCadeaux} alt="" width="510px" class="img-fluid wow fadeInUp"/>
                    <br/>
                    <div className="row">
                            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="card">
                                    <img class="card-img-top" src={RangeRover} alt="Card image cap"/>
                                    <div class="card-body">
                                        <h3 class="card-text">Range Over Evoque</h3>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                                <div class="card">
                                    <img class="card-img-top" src={Burger} alt="Card image cap"/>
                                    <div class="card-body">
                                        <h3 class="card-text">1 burger au choix</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.3s">
                                <div class="card">
                                    <img class="card-img-top" src={MenuJour} alt="Card image cap"/>
                                    <div class="card-body">
                                        <h3 class="card-text">1 Menu du jour</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.4s">
                                <div class="card">
                                    <img class="card-img-top" src={MenuChoix} alt="Card image cap"/>
                                    <div class="card-body">
                                        <h3 class="card-text">1 Menu au choix</h3>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.5s">
                                <div class="card">
                                    <img class="card-img-top" src={Dessert} alt="Card image cap"/>
                                    <div class="card-body">
                                        <h3 class="card-text">1 Dessert au choix</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.6s">
                                <div class="card">
                                    <img class="card-img-top" src={Remise} alt="Card image cap"/>
                                    <div class="card-body">
                                        <h3 class="card-text">70% de réduction</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                </div>                       
            </section>
            <Footer/>
            </React.Fragment>
        )
    }
}

export default Cadeaux