import React from 'react';
// import bg from '../../public/img/bg-food.png';
import logofatboar from '../../public/img/logofatboar.png';

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
                        <img className="img-fluid wow fadeInUp" src={logofatboar} alt="" width="220"/>
                            <h2 className="wow fadeInUp">ENVIE DE GAGNER DES CADEAUX ?</h2>
                            <h3 className="wow fadeInUp" data-wow-delay="0.1s"><strong>Inscrivez-vous à notre jeu-concours</strong></h3>
                            <a href="#jeu-concours" className="btn-get-started scrollto wow fadeInUp" data-wow-delay="0.1s">DÉCOUVRIR</a>
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
