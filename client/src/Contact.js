import React from 'react';
import './style/bootstrap.min.css';
import './index.css';
import Inscription from './Inscription';
import Footer from './Footer';




class Contact extends React.Component{


	render(){


		return(

		<div className="#">
         	 
      		 <div className="container">
      		 <p></p>
			<div><h3>Contactez-nous</h3>	
			<p >Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p></div>
			<div className="App">
				<form className="toto">
		 			<div className="form-group">
		 				<label htmlFor="inputName">NOM</label>
		                <input type="nom" className="form-control" id="inputNom1"   placeholder="Nom"/>
					    <label for="exampleFormControlInput1">ADRESSE E-MAIL</label>
					    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
				  	</div>		  
				  	<div className="form-group">
					    <label for="exampleFormControlTextarea1">MESSAGE</label>
					    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
				  	</div>
				   <div className="centre"><button type="button" className="btn btn-primary">Envoyer</button></div>
				</form>
			</div>
			</div>
			       <Footer />

		</div>	


			);
	}
}
export default Contact;