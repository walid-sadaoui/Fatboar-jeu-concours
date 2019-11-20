import React from 'react';
import logo from '../../public/img/logofatboar.png';
import TitreConnexion from '../../public/img/titres/connexion.png'
import {NavLink} from 'react-router-dom';
import Navbar from './Navbar';

class Connexion extends React.Component{
    render(){
    	return(
        <React.Fragment>
        <Navbar/>
		    <div className="FormBody">
          <div className="container">
            <div className="App">
            <img className="LogoConnexion wow fadeInUp" src={logo} width="15%" alt="#"/>
            <br/>
            <form className="formulaire wow fadeInUp" data-wow-delay="0.1s">
            <img src={TitreConnexion} alt="" width="400px" class="img-fluid"/>
            <br/>       
                <div className="form-row widthForm">
                  <div id="label-connexion" className="form-group col-md-12">
                  <label htmlFor="inputEmail3">VOTRE ADRESSE E-MAIL</label>
                    <input type="email" className="form-control" id="inputEmail3" placeholder="Adresse e-mail"/>
                  </div>
                </div>
                <div className="form-row widthForm">
                <div className="form-group col-md-12">
                  <label htmlFor="inputPassword3">MOT DE PASSE</label>
                    <input type="password" className="form-control" id="inputPassword3" placeholder="Mot de passe"/>
                </div>
                </div>  
                <br/>                             
              <div className="centre"><NavLink to="/ajout-ticket"><button type="submit" className="btn facebook hvr-grow">Se connecter</button></NavLink></div>
               <p className="centre">ou</p> 
               <div className="centre"><button type="button" className="btn facebook hvr-grow">f | Se connecter avec Facebook</button></div><p></p>
              <div className="centre"><button type="button" className="btn google hvr-grow">G | Se connecter avec Google</button></div> 
            </form>
        </div>   
       </div>
    </div>
    </React.Fragment>

		);
}

}
export default Connexion;