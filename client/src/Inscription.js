import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style/bootstrap.min.css';
import './index.css';
import soso from './images/soso.jpg';





 

class Inscription extends React.Component{



render() {

      return(
  
<div>
<div className="container">
   <img src={soso} alt=""  height="80%" width="10%"/>    
       <form className="toto">
        <h3>FORMULAIRE D'INSCRIPTION</h3>
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
              <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">MOT DE PASSE</label>
              <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
            </div>

          </div>
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
