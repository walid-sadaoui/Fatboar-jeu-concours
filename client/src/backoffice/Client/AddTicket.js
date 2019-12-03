import React from 'react';
import NavClient from './NavClient';
import TitreConnexion from '../../../public/img/titres/connexion.png'
import {NavLink} from 'react-router-dom';

class AddTicket extends React.Component {
    render() {
        return (
            <React.Fragment>
            <NavClient/>
            <div className="AddTicketBody">
            <div className="container">
              <div className="App">
              <form className="AddTicketForm wow fadeInUp" data-wow-delay="0.1s">
              <img src={TitreConnexion} alt="" width="400px" className="img-fluid"/>
              <br/>       
                  <div className="form-row widthForm">
                    <div id="label-connexion" className="form-group col-md-12">
                    <label htmlFor="inputEmail3">ENTREZ VOTRE N° À 10 CHIFFRES</label>
                      <input type="number" className="form-control" id="inputEmail3" placeholder="Entrez le N° du ticket..."/>
                    </div>
                  </div> 
                  <br/>                             
                <div className="centre"><NavLink to="/client"><button type="submit" className="btn facebook hvr-grow">Soumettre</button></NavLink></div>
                </form>
          </div>   
         </div>
      </div>
      </React.Fragment>
        )
    }
}

export default AddTicket
