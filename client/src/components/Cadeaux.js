import React from 'react';
import TitreModalites from '../../public/img/titres/modalites.png';
import RangeRover from '../../public/img/2020-rangeOver.jpg';
import Navbar from './Navbar';
import Footer from './Footer';
class Cadeaux extends React.Component{
    render(){
        return(
            <React.Fragment>
            <Navbar/>
            <section id="Cadeaux">
                <div className="container">
                <div className="section-header" style={{paddingBottom: "180px", paddingTop: "180px"}}>
                <img src={TitreModalites} alt="" width="350px" class="img-fluid wow fadeInUp"/>
                    <br/>
                    <div className="row">
                            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="card">
                                    <img class="card-img-top" src="https://i.gaw.to/content/photos/37/77/377792_2019_Land_Rover_Range_Rover_Evoque.jpg" alt="Card image cap"/>
                                    <div class="card-body">
                                        <h3 class="card-text">Range Over Evoque</h3>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                                <div class="card">
                                    <img class="card-img-top" src="https://cdn.pixabay.com/photo/2015/10/19/14/05/burger-996037__340.jpg" alt="Card image cap"/>
                                    <div class="card-body">
                                        <h3 class="card-text">1 burger au choix</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.3s">
                                <div class="card">
                                    <img class="card-img-top" src="https://cdn.pixabay.com/photo/2019/07/29/05/52/burger-4369973__340.jpg" alt="Card image cap"/>
                                    <div class="card-body">
                                        <h3 class="card-text">1 Menu du jour</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.4s">
                                <div class="card">
                                    <img class="card-img-top" src="https://cdn.pixabay.com/photo/2019/08/12/07/31/american-4400605__340.jpg" alt="Card image cap"/>
                                    <div class="card-body">
                                        <h3 class="card-text">1 Menu au choix</h3>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.5s">
                                <div class="card">
                                    <img class="card-img-top" src="https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
                                    <div class="card-body">
                                        <h3 class="card-text">1 Dessert au choix</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.6s">
                                <div class="card">
                                    <img class="card-img-top" src="https://static9.depositphotos.com/1682899/1155/i/950/depositphotos_11558914-stock-photo-70-percent-discount.jpg" alt="Card image cap"/>
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