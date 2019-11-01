import React from 'react';
import menu1 from '../../public/img/01.png'
import menu2 from '../../public/img/02.png'
import menu3 from '../../public/img/03.png'
import menu4 from '../../public/img/04.png'
import menu5 from '../../public/img/05.png'
import RangeRover from '../../public/img/RangeRover.png'
import TitreJeuConcours from '../../public/img/titres/jeu-concours.png'
import {NavLink} from 'react-router-dom';

class HomeConcours extends React.Component {
    render() {
        return(
    <section id="jeu-concours">
            <div class="container">
                <header class="section-header">
                <img src={TitreJeuConcours} alt="" width="350px" class="img-fluid"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </header>

                <div class="row jeu-concours-cols">

                <div class="col-md-2 wow fadeInUp">
                    <div class="jeu-concours-col">
                    <div class="img">
                        <img src={menu1} alt="" class="img-fluid"/>
                    </div>
                    <h2 class="title"><a href="#">Un dessert au choix</a></h2>
                    </div>
                </div>

                <div class="col-md-2 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="jeu-concours-col">
                    <div class="img">
                        <img src={menu2} alt="" class="img-fluid"/>
                    </div>
                    <h2 class="title"><a href="#">Un burger au choix</a></h2>
                    </div>
                </div>

                <div class="col-md-2 wow fadeInUp" data-wow-delay="0.2s">
                    <div class="jeu-concours-col">
                    <div class="img">
                        <img src={menu3} alt="" class="img-fluid"/>
                    </div>
                    <h2 class="title"><a href="#">Un menu du jour</a></h2>
                    </div>
                </div>

                <div class="col-md-2 wow fadeInUp" data-wow-delay="0.2s">
                    <div class="jeu-concours-col">
                    <div class="img">
                        <img src={menu4} alt="" class="img-fluid"/>
                    </div>
                    <h2 class="title"><a href="#">Un menu au choix</a></h2>

                    </div>
                </div>

                <div class="col-md-2 wow fadeInUp" data-wow-delay="0.2s">
                    <div class="jeu-concours-col">
                    <div class="img">
                        <img src={menu5} alt="" class="img-fluid"/>
                    </div>
                    <h2 class="title"><a href="#">-70% de réduction</a></h2>
                    </div>
                </div>
                </div>
                <br/><br/>
                <div class="row">
                <div class="col-md-8 box wow fadeInUp" data-wow-delay="0.2s">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <NavLink to="/inscription"><button class="button-inscrip">S'inscrire</button></NavLink>
                </div>
                <div class="col-md-4">
                    <img class="img-fluid box wow fadeInUp" data-wow-delay="0.2s" src={RangeRover} alt=""/>
                </div>
                </div>
            </div>
    </section>
        )
    }
}

export default HomeConcours
