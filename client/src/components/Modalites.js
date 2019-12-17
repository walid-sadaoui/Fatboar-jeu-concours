import React from 'react';
import TitreModalites from 'public/img/titres/modalites.png'
import Navbar from './Navbar';
import Footer from './Footer';

class Modalites extends React.Component{
    render(){
        return(
            <React.Fragment>
            <Navbar/>
            <section id="Modalites">
                <div className="container">
                <div className="section-header" style={{paddingBottom: "180px", paddingTop: "180px"}}>
                <img src={TitreModalites} alt="" width="400px" class="img-fluid wow fadeInUp"/>
                <div class="accordion wow fadeInUp" id="accordionExample">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                        <span class="mb-0 btn btn-link">
                            <h4 style={{fontWeight: "bold", color:"#333"}} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            ARTICLE 1 - Société organisatrice du Jeu-Concours
                            </h4>
                        </span>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                            <p style={{color:"#333", textAlign:"justify"}}>La société FATBOAR, société exerçant dans le secteur de restauration rapide de capital de 750 000 euros, dont le siège social est situé 1Bis Rue Gustave Eiffel, 78280 Guyancourt, immatriculée au registre du commerce et des sociétés de Paris, sous le numéro 781 55516557 organise un jeu avec obligation d’achat d’un menu à partir de 18€ dans tous les restaurants de FATBOAR.
                            Le présent règlement définit les règles juridiques et modalités applicables au Jeu concours.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                        <span class="mb-0 btn btn-link collapsed">
                            <h4 style={{fontWeight: "bold", color:"#333"}} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            ARTICLE 2 - Les conditions de participation au Jeu Concours
                            </h4>
                        </span>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                            <p style={{color:"#333", textAlign:"justify"}}>Préalablement à toute participation au Jeu, les Joueurs doivent prendre connaissance et accepter le présent règlement. Tout contrevenant à l'un ou plusieurs des articles du présent règlement sera privé de son gain qu'il aura pu éventuellement gagner.
                            La participation au Jeu concours est ouverte exclusivement aux personnes physiques majeures (À partir de 18 ans) résidant dans toute le France.
                            La participation est limitée à un ticket de caisse par personne, et ce, pendant toute la durée du Jeu concours.
                            <br/><br/><b>Ne peuvent pas participer au Jeu :</b>
                            <ul>
                                <li>Les personnes physiques mineures de moins de 18 ans</li>
                                <li>Les personnes morales</li>
                                <li>Les membres du personnel de la société FATBOAR et de ses employés</li>
                                <li>Les membres du personnel de la société FATBOAR et de ses employés</li>
                                <li>La participation des Joueurs ne respectant pas les stipulations énoncées ci-dessus ne sera pas prise en compte.</li>
                            </ul>
                            Le Joueur s’engage à fournir des informations complètes et exactes. Tout Joueur ayant donné des indications incomplètes ou incorrectes peut voir sa participation au Jeu concours invalidée. En cas de doute sur les renseignements fournis par un Joueur, Fatboar pourra requérir de sa part la communication d'une copie de documents attestant de ces renseignements. Si le Joueur refuse de communiquer ces copies, s’abstient de répondre à FATBOAR ou communique des informations insuffisantes, Fatboar pourra refuser de prendre en compte sa participation.
                            <br/><br/>
                            Toute inscription incomplète ou reçue après la date et l'heure limite de participation (date et heure de réception de l'inscription sur le site internet faisant foi), ou ne remplissant pas les conditions du présent règlement, ne sera pas prise en compte. La participation au Jeu se fait exclusivement par internet, selon les modalités du jeu concours. Toute participation sur papier libre ou sous toute autre forme est exclue.
                            <br/><br/>
                            Il est rigoureusement interdit, par quelque procédé que ce soit, de modifier ou de tenter de modifier les dispositifs du Jeu concours proposé (numéro de ticket de caisse … etc. ), notamment afin d'en modifier les résultats ou tout élément déterminant le gagnant ou les gains qui leur sont attribuées.
                            <br/><br/>
                            FATBOAR se réserve le droit de refuser toute demande de remboursement à toute personne ayant tenté toute sorte de fraude en rapport avec Jeu concours.
                            </p>
                            
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingThree">
                        <span class="mb-0 btn btn-link collapsed">
                            <h4 style={{fontWeight: "bold", color:"#333"}} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            ARTICLE 3 - Les modalités de participation au Jeu Concours
                            </h4>
                        </span>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div class="card-body">
                            <p style={{color:"#333", textAlign:"justify"}}>Le Jeu concours est accessible sur internet à l’adresse suivante : jeu.fatboar.site 
                            <br/><br/>
                            Pour participer, le Joueur doit se connecter sur le Site du serveur utilisé par ou pour le compte de FATBOAR faisant foi et remplir le formulaire d’inscription au Jeu-concours en indiquant son nom, prénom, adresse email, numéro de téléphone (portable ou fixe) Le Joueur doit ensuite :
                            <ul>
                                <li>Prendre connaissance des règlements et modalités de participation au jeu concours</li>
                                <li>Être contacter pour confirmer ses coordonnées et pour recevoir des informations sur les offres promotionnelles de FATBOAR</li>
                                <li>En validant sa participation au Jeu concours, le Joueur :
                                    <ul>
                                        <li>Certifie avoir 18 ans ou plus,</li>
                                        <li>Déclare avoir lu et accepté le règlement de jeu.</li>
                                    </ul>
                                </li>
                                <li>Prendre connaissance que pour le tirage au sort du véhicule, le nombre de participations d’un client n'augmente pas ses chances de gagner le véhicule. Tous les tickets du jeu-concours étant gagnant sur les lots intermédiaires plus un client joue plus il gagne.</li>
                                <li>Prendre connaissance que 100% des tickets sont gagnants, voici la répartition des gains :
                                    <ul>
                                        <li> 60% des tickets offrent une entrée ou un dessert au choix.</li>
                                        <li>20% des tickets offrent un burger au choix.</li>
                                        <li>10% des tickets offrent un menu du jour.</li>
                                        <li>6% des tickets offrent un menu au choix.</li>
                                        <li>4% des tickets offrent 70% de réduction.</li>
                                    </ul>
                                </li>
                                <li>ARTICLE 4 - Les modalités de désignation du Gagnant au tirage au sort pour la Range Rover Evoque de 59 900€</li>
                                4.1. Un tirage au sort sera organisé à la fin du jeu concours, sous le contrôle de Maître Arnaud Rick huissier de justice à Paris pour désigner le gagnant parmi l’ensemble des Joueurs remplissant les conditions fixées à l’article 2 et ayant validé leur inscription pendant la durée du Jeu concours selon les modalités prévues à l’article 3.
                                <br/><br/>Le gagnant au tirage au sort recevra une Range Rover d’une valeur de 59 900€.
                                <br/><br/>Si un gagnant ne respecte pas les conditions de confirmation du gain stipulées au présent règlement, pour quelque cause que ce soit, le gain ne lui sera pas attribué et le tirage au sort peut être de nouveau recommencé.
                                <br/><br/>4.2. Le gagnant sera contacté par FATBOAR par téléphone et par email au numéro de téléphone et à l’adresse email indiqués dans le formulaire d’inscription au Jeu, au plus tard 30 (trente) jours ouvrés à compter de la date du tirage au sort et seront informés des modalités d’expédition ou de mise à disposition de son Range Rover. Les Joueurs qui n’ont pas gagné ne seront pas contactés pour être informés du résultat du tirage au sort.
                                <br/><br/>Avant la remise de la Range Rover, les gagnants devront, dans un délai maximum de 10 (dix) jours à compter de la date de réception de l’email annonçant leur gain, justifier de leur identité selon les modalités qui lui seront précisées par FATBOAR et indiquer à FATBOAR l’adresse postale complète à laquelle ils souhaitent que leur Range Rover soit envoyée.
                                <br/><br/>Si l'inscription, la participation au Jeu du gagnant et les documents et informations précités fournis par le gagnant sont conformes aux stipulations du présent règlement, FATBOAR adressera au gagnant, par courriel ou selon les modalités convenues avec lui, sa Range Rover dans un délai de quinze (15) jours environ à compter de la date de réception par FATBOAR des informations ou documents permettant de vérifier l’identité du gagnant et l’adresse postale à laquelle il souhaite recevoir son gain.
                                <br/><br/>La responsabilité de FATBOAR ne saurait, en aucun cas, être engagée directement ou indirectement en cas d'envoi de la dotation à une adresse inexacte du fait d'une indication erronée du Joueur, en cas de mauvais acheminement du courrier et/ou des envois postaux, en cas de destruction totale ou partielle de la dotation.
                                <br/><br/>FATBOAR ou toute société mandatée par elle contactera les gagnants par téléphone et par email aux coordonnées indiquées dans le formulaire d’inscription. Dans le cas où FATBOAR ou toute société mandatée par elle ne parviendrait pas à joindre les gagnants après une tentative par email (aux coordonnées indiquées dans le formulaire d'inscription), le gagnant n'ayant pas réclamé son gain dans un délai de dix (10) jours suivant la date de l’email lui notifiant son gain, sera considéré comme ayant renoncé purement et simplement à son gain.
                                <br/><br/>Le gain ne sera alors pas attribué et ne pourra en aucun cas être réclamé ultérieurement. Il restera la propriété de FATBOAR. La responsabilité de FATBOAR ne pourra en aucun cas être engagée dans ce cas.
                                <br/><br/>Les gains ne sont ni reprises, ni échangées ni remplacées par un autre objet ou valeur ou service pour quelque cause que ce soit. Il ne sera attribué aucune contre-valeur en espèce en échange des gains gagnées.
                            </ul>
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

export default Modalites;