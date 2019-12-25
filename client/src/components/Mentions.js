import React from 'react';
import TitreLegales from '../assets/img/titres/legales.png'
import Navbar from './Navbar';
import Footer from './Footer';
import {NavLink} from 'react-router-dom';

class Mentions extends React.Component{
    render(){
        return(
            <React.Fragment>
            <Navbar/>
            <section id="Mentions">
                <div className="container">
                <div className="section-header" style={{paddingBottom: "180px", paddingTop: "180px"}}>
                <img src={TitreLegales} alt="" width="380px" class="img-fluid wow fadeInUp"/>
                    <div>
                        <h2 className="wow fadeInUp" data-wow-delay="0.1s">Éditeur du site</h2>
                        <span className="wow fadeInUp" data-wow-delay="0.2s">
                        Restaurant FATBOAR<br/>
                        Implantation : Europe intracommunautaire<br/>
                        Siège social : 1Bis Rue Gustave Eiffel, 78280 Guyancourt<br/>
                        Capital social SA : 750 000 €<br/>
                        N° de SIRET : 53443759500142 <br/>
                        Chiffre d'affaire : 18 650 200 €<br/>
                        <b>Directeur de publication :</b> Éric Bourdon
                        </span>
                    </div><br/>
                    <div>
                        <h2 className="wow fadeInUp" data-wow-delay="0.1s">Développement du site</h2>
                        <span className="wow fadeInUp" data-wow-delay="0.2s">
                        FURIOUS DUCK<br/>
                        Capital social : 122.600 euros<br/>
                        Siège social : 66 avenue des Champs Elysées, 75008 Paris<br/>
                        Email : contact@furious.com
                        </span>
                    </div><br/>
                    <div>
                        <h2 className="wow fadeInUp" data-wow-delay="0.3s">Hébergement du site</h2>
                        <span className="wow fadeInUp" data-wow-delay="0.4s">
                        L’hébergement du présent site Web est assuré par les serveurs de la société OUIHEBERG<br/>
                        22 rue du muscat<br/>
                        30470 AIMARGUES<br/>
                        SIRET: 841 223 480 00010<br/>
                        Teléphone : 09 72 17 91 89<br/> 
                        </span>
                    </div><br/>
                    <div>
                        <h2 className="wow fadeInUp" data-wow-delay="0.5s">Conditions d’utilisation</h2>
                        <span className="wow fadeInUp" data-wow-delay="0.6s">Ce site est proposé en différents langages Web (HTML, Javascript, CSS, etc…) pour un meilleur confort d’utilisation et un graphisme plus agréable, nous vous recommandons de recourir à des navigateurs modernes comme Google Chrome, Firefox, Safari, etc… L’église évangélique de Lens met en œuvre tous les moyens dont elle dispose, pour assurer une information fiable et une mise à jour fiable du contenu de ce site internet. Toutefois, des erreurs ou omissions peuvent survenir. L’internaute devra donc s’assurer de l’exactitude des informations et signaler (via notre page contact) toutes modifications du site qu’il jugerait utile.
                        </span>
                    </div><br/>
                    <div>
                        <h2 className="wow fadeInUp" data-wow-delay="0.7s">Propriété intellectuelle</h2>
                        <span className="wow fadeInUp" data-wow-delay="0.8s">Tout le contenu du présent site, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont soumis à des droits d’auteurs.
                        <br/>
                        Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l’accord exprès par écrit de l’église évangélique de Lens. Une représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle. Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur.</span>
                    </div><br/>
                    <div>
                        <h2 className="wow fadeInUp" data-wow-delay="0.8s">Données personnelles</h2>
                        <span className="wow fadeInUp" data-wow-delay="0.9s">
                            Pour avoir des informations détaillées sur la façon dont nous traitons vos données, veuillez consulter notre <NavLink style={{color:"#fff", fontWeight:"bold"}} to="/donnees-personnelles">politique de protection des données personnelles</NavLink>
                        </span>
                    </div>
                </div>
                </div>
                <Footer/>
            </section>
            </React.Fragment>
        )
    }
}

export default Mentions