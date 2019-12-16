import React from 'react';
import logo from '../../public/img/logofatboar.png';
import TitreInscription from '../../public/img/titres/inscription.png';
import Navbar from './Navbar';

class Inscription extends React.Component{
render() {
      return(
        <React.Fragment>
        <Navbar/>
        <div className="FormBody" style={{paddingBottom: "180px", paddingTop: "120px"}}>
        <div className="container">
          <img className="LogoConnexion wow fadeInUp" src={logo} alt="" width="15%"/>    
              <form className="formulaire wow fadeInUp" data-wow-delay="0.1s">
              <img src={TitreInscription} alt="" width="400px" class="img-fluid"/>
              <div className="form-row widthForm">
                <div className="form-group col-md-12">
                    <label htmlFor="inputAddress">ENTREZ LE N° À 10 CHIFFRES </label>
                    <input type="text" className="form-control" id="inputAddress4"  placeholder="Entrez le numéro à 10 chiffres" />
                </div>
                </div>
                  <div className="form-row widthForm">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputEmail4">NOM</label>
                      <input type="nom" className="form-control" id="inputNom4"  placeholder="Nom"/>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputPassword4">PRÉNOM</label>
                      <input type="prénom" className="form-control" id="inputPrenom4"  placeholder="Prénom"/>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputEmail4">ADRESSE E-MAIL</label>
                      <input type="email" className="form-control" id="inputEmail4" placeholder="Adresse e-mail"/>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputPassword4">MOT DE PASSE</label>
                      <input type="password" className="form-control" id="inputPassword4" placeholder="Mot de passe"/>
                    </div>
                  </div>
                  <br/>
                  <div className="centre"><button type="submit" className="btn btn-primary btn-block">login in</button></div>
                  <p className="centre">- OU -</p>
                  <div className="centre">
                    <a href="#" className="btn btn-block btn-primary">
                    <i className="fab fa-facebook mr-2"></i> Inscription par Facebook
                    </a>
                    <a href="#" className="btn btn-block btn-danger">
                    <i className="fab fa-google mr-2"></i> Inscription par Google
                    </a>
                  </div>
                 
                </form>
              </div>           
              </div>
              </React.Fragment>
              );
}

}

export default Inscription;