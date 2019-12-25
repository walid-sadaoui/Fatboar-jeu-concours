import React from 'react';
import TitreDonnees from '../assets/img/titres/donnees.png'
import Navbar from './Navbar';
import Footer from './Footer';

class Donnees extends React.Component{
    render(){
        return(
            <React.Fragment>
            <Navbar/>
            <section id="Donnees">
                <div className="container">
                <div className="section-header" style={{paddingBottom: "180px", paddingTop: "180px"}}>
                <img src={TitreDonnees} alt="" width="450px" class="img-fluid wow fadeInUp"/><br/>
                <div class="accordion wow fadeInUp" id="accordionExample">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                        <span class="mb-0 btn btn-link">
                            <h4 style={{fontWeight: "bold", color:"#333"}} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            1. À propos des données que nous collectons
                            </h4>
                        </span>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                            <p style={{color:"#333", textAlign:"justify"}}>Nous sommes susceptibles de collecter des données personnelles vous concernant lorsque vous fréquentez nos restaurants, utilisez nos sites Internet ou nos applications mobiles (les « services en ligne ») ou interagissez de toute autre manière avec nous (ces différentes interactions étant collectivement désignées les « services »). Les données que nous collectons relèvent de trois catégories : (a) les données que vous nous communiquez, (b) les données que nous collectons par le biais de moyens automatisés, et (c) les données que nous collectons à partir d'autres sources.</p>
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                        <span class="mb-0 btn btn-link collapsed">
                            <h4 style={{fontWeight: "bold", color:"#333"}} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            2. Nos modalités de partage des données collectées
                            </h4>
                        </span>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                            <p style={{color:"#333", textAlign:"justify"}}>Nous ne vendons aucune de vos données personnelles et les partageons uniquement selon les modalités stipulées dans la présente politique de protection des données personnelles. 
                            <br/><br/>Nous sommes susceptibles de partager vos données personnelles avec des prestataires qui nous fournissent des services tels que : honorer des commandes, assurer des services de traitement de données et autres services liés aux technologies de l'information, gérer des promotions, des jeux-concours, des tombolas et des loteries, réaliser des études et des analyses, offrir une expérience personnalisée à chaque client de <b>FATBOAR</b>. Nous leur interdisons d'utiliser ou de partager ces informations à d'autres fins que celle de fournir des services pour notre compte.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingThree">
                        <span class="mb-0 btn btn-link collapsed">
                            <h4 style={{fontWeight: "bold", color:"#333"}} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            3. Communications marketing
                            </h4>
                        </span>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div class="card-body">
                            <p style={{color:"#333", textAlign:"justify"}}>Si vous avez accepté de recevoir des communications marketing de notre part, vous avez la possibilité de revenir sur cette décision ultérieurement en suivant les instructions contenues dans les communications en question. En principe, vous avez également la possibilité d'accéder à vos préférences en matière de communications et de retrouver ces instructions dans la rubrique « Mon compte » des services en ligne que vous utilisez. Vous pouvez aussi modifier vos préférences dans les paramètres de votre téléphone, ou encore renoncer à recevoir ces communications en contactant notre bureau mondial chargé de la protection des données personnelles ou le bureau local compétent, dont les coordonnées sont indiquées plus loin. Si vous choisissez de contacter un bureau local, veuillez vous adresser à celui du pays dans lequel vous êtes client.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingThree">
                        <span class="mb-0 btn btn-link collapsed">
                            <h4 style={{fontWeight: "bold", color:"#333"}} data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseTwo">
                            4. Cookies et autres technologies
                            </h4>
                        </span>
                        </div>
                        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                        <div class="card-body">
                            <p style={{color:"#333", textAlign:"justify"}}>Nos prestataires de services et nous-mêmes utilisons des cookies, des balises Web et d'autres technologies analogues dans le cadre de nos services en ligne ainsi que dans d'autres domaines liés à nos activités (tels que la publicité en ligne) à l'effet de collecter des informations et de vous fournir les services ou les produits que vous avez demandés.
                            <br/><br/>Un « cookie » désigne un petit fichier texte enregistré dans le navigateur ou l'appareil d'un internaute, qui permet de reconnaître ce dernier et/ou d'obtenir des informations le concernant. Certains de nos pays d'implantation possèdent une politique spécifique aux cookies (voir les annexes propres à chaque pays).
                            <br/><br/>Une « balise Web » désigne un petit objet ou une petite image intégré(e) dans une page Web, une application ou un e-mail, qui permet de suivre l'activité de l'utilisateur. On parle également de « pixel » ou de « tag ».
                            <br/><br/>Nous utilisons des cookies, des balises Web et d'autres technologies analogues pour collecter des informations aux fins énoncées dans la présente politique de protection des données personnelles. Nous pouvons également combiner les informations collectées à l'aide de ces technologies avec des informations vous concernant recueillies par nos soins par le biais d'autres moyens décrits dans la présente politique de confidentialité.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingFive">
                        <span class="mb-0 btn btn-link collapsed">
                            <h4 style={{fontWeight: "bold", color:"#333"}} data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                            5. Protection des données personnelles
                            </h4>
                        </span>
                        </div>
                        <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                        <div class="card-body">
                            <p style={{color:"#333", textAlign:"justify"}}>Nous nous engageons à prendre des mesures adéquates pour protéger vos données personnelles. Nos procédures techniques, organisationnelles et physiques visent à protéger les données personnelles contre tout accès ou toute perte, divulgation, utilisation, altération ou destruction accidentel(le), illicite ou non autorisé(e). Malgré les efforts déployés pour protéger nos systèmes d'information, aucun site Internet, aucune application mobile, aucun système informatique, ni aucune transmission d'informations via Internet ou tout autre réseau public ne peut être garanti comme étant totalement sécurisé.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingSix">
                        <span class="mb-0 btn btn-link collapsed">
                            <h4 style={{fontWeight: "bold", color:"#333"}} data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                            6. Conservation des données personnelles
                            </h4>
                        </span>
                        </div>
                        <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                        <div class="card-body">
                            <p style={{color:"#333", textAlign:"justify"}}>Nous conservons vos informations pendant la durée nécessaire pour mener à bien les activités énoncées dans la présente politique et respecter nos règles en matière de conservation des données personnelles (sauf si la législation impose une durée de conservation plus longue). Ces règles respectent les lois applicables. Nous conserverons et utiliserons vos données dans la mesure nécessaire pour remplir nos obligations légales (telles que l'obligation de conserver vos informations conformément aux lois fiscales applicables), résoudre des litiges, faire appliquer nos accords et mener à bien toute autre activité prévue par la présente politique.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingSeven">
                        <span class="mb-0 btn btn-link collapsed">
                            <h4 style={{fontWeight: "bold", color:"#333"}} data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseThree">
                            7. Modifiaction de notre politique de protection des données personnelles
                            </h4>
                        </span>
                        </div>
                        <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                        <div class="card-body">
                            <p style={{color:"#333", textAlign:"justify"}}>La présente politique de confidentialité prend effet à compter de la date indiquée sur la première page. Elle peut être ponctuellement actualisée. En pareil cas, nous publierons la nouvelle version et modifierons la « date de la dernière mise à jour » (c'est-à-dire la date à laquelle elle prend effet) figurant en tête du document. Nous vous recommandons de vérifier régulièrement si une nouvelle version est disponible
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingEight">
                        <span class="mb-0 btn btn-link collapsed">
                            <h4 style={{fontWeight: "bold", color:"#333"}} data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                            8. Nous contacter
                            </h4>
                        </span>
                        </div>
                        <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
                        <div class="card-body">
                            <p style={{color:"#333", textAlign:"initial"}}>Si vous avez la moindre question concernant les pratiques de McDonald's en matière de protection des données personnelles, vous pouvez à tout moment contacter notre bureau mondial chargé de la protection des données ou l'un de nos bureaux locaux. Ces derniers sont compétents pour toute question ou information se rapportant à leur pays d'implantation. Leurs coordonnées respectives sont indiquées dans les annexes propres à chaque pays.
                            <br/><br/>Vous pouvez contacter le Délégué à la Protection Des Données de <b>FATBOAR</b> France par email à l'adresse <em>donnees.personnelles@fatboar.com</em>.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                <Footer/>
            </section>
            </React.Fragment>
        )
    }
}

export default Donnees