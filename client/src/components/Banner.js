import React from 'react';
// import bg from '../../public/img/bg-food.png';
import RangeRover from '../../public/img/RangeRover.png'
// import logofatboar from '../../public/img/logofatboar.png';
import {NavLink} from 'react-router-dom';
import Footer from './Footer';

class Banner extends React.Component{
    render(){
        return(
            <section id="intro">
                <div className="intro-container">
                    <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators"></ol>
                    <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <div className="carousel-container">
                        <div className="carousel-content">
                        <img className="img-fluid wow fadeInUp" src={RangeRover} alt="" width="420"/>
                        <h2 className="wow fadeInUp" data-wow-delay="0.1s">ET SI VOUS ÉTIEZ L'HEUREUX GAGNANT ?</h2>
                        <h3 className="wow fadeInUp" data-wow-delay="0.1s"><strong>Gagnez un Range Rover et bien d'autres lots</strong></h3>
                        <NavLink to="/inscription" className="btn-get-started scrollto wow fadeInUp hvr-grow" data-wow-delay="0.1s">JOUEZ DÈS MAINTENANT</NavLink>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Banner;
