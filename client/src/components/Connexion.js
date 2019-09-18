import React from 'react';
import logo from '../../public/img/logofatboar.png';
import TitreConnexion from '../../public/img/titres/connexion.png'

class Connexion extends React.Component{
    render(){
    	return(
		    <div className="FormBody">
          <div className="container">
            <div className="App">
            <img className="LogoConnexion" src={logo} width="15%" alt="#"/>
            <br/>
            <form className="formulaire">
            <img src={TitreConnexion} alt="" width="400px" class="img-fluid"/>
            <br/>                    
                <div className="form-group row">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">E-MAIL</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail3" placeholder="Adresse e-mail"/>
                  </div>
                </div>
                <div className="form-group row">
                  <label for="inputPassword3" className="col-sm-2 col-form-label">MOT DE PASSE</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword3" placeholder="Mot de passe"/>
                  </div>
                </div>
                                                  
              <div className="centre"><button type="submit" className="btn btn-primary">Se connecter</button></div>
               <p className="centre">ou</p> 
               <div className="centre"><button type="button" className="btn btn-primary">f | Se connecter avec Facebook</button></div><p></p>
              <div className="centre"><button type="button" className="btn btn-primary">G | Se connecter avec Google</button></div> 
            </form>
        </div>   
       </div>
    </div>


		);
}

}
export default Connexion;