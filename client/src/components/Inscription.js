import React from 'react';
import logo from '../../public/img/logofatboar.png';
import TitreInscription from '../../public/img/titres/inscription.png'


class Inscription extends React.Component{
render() {
      return(
        <div className="FormBody">
        <br/>
        <div className="container">
          <img className="LogoConnexion" src={logo} alt="" width="15%"/>    
              <form className="formulaire">
              <img src={TitreInscription} alt="" width="400px" class="img-fluid"/>
                <div className="form-group">
                      <label htmlFor="inputAddress">ENTREZ LE N° À 10 CHIFFRES </label>
                    <input type="text" className="form-control" id="inputAddress4"  placeholder="Entrez le numéro à 10 chiffres" />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputEmail4">NOM</label>
                      <input type="nom" className="form-control" id="inputNom4"   placeholder="Nom"/>
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
                  <div className="centre"><button type="button" className="btn btn-primary">S'inscrire</button></div>
                  <p className="centre">ou</p>
                  <div className="centre"><button type="button" className="btn btn-primary">f | S'inscrire avec Facebook</button></div><p></p>
                  <div className="centre"><button type="button" className="btn btn-primary">G | S'inscrire avec Google</button></div>
                </form>
              </div>           
              </div>
              );
}

}

export default Inscription;
