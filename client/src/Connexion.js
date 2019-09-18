import React from 'react';
import soso from './images/soso.jpg';

class Connexion extends React.Component{


render(){

	return(

		 <div className="#">
      <div className="container">
      <div className="App">
       <img src={soso} height="80%" width="10%"/>    
           <form className="toto">
             <h3>FORMULAIRE CONNEXION</h3>                     
                <div className="form-group row">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">ADRESSE E-MAIL</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                  </div>
                </div>
                <div className="form-group row">
                  <label for="inputPassword3" className="col-sm-2 col-form-label">PASSWORD</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
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