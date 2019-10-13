import React from 'react';
import TitreContact from '../../public/img/titres/contact.png';

class Contact extends React.Component {
    render(){
        return(
            <section id="contact" class="section-bg">
            <div class="container">
      
              <div class="section-header">
              <img src={TitreContact} alt="" width="350px" class="img-fluid wow fadeInUp" data-wow-delay="0.1s"/>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
              </div>
      
              <div class="form wow fadeInUp" data-wow-delay="0.1s">
                <div id="sendmessage">Your message has been sent. Thank you!</div>
                <div id="errormessage"></div>
                <form action="" method="post" role="form" class="contactForm">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <input type="text" name="name" class="form-control" id="name" placeholder="Nom" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                      <div class="validation"></div>
                    </div>
                    <div class="form-group col-md-6">
                      <input type="email" class="form-control" name="email" id="email" placeholder="E-mail" data-rule="email" data-msg="Please enter a valid email" />
                      <div class="validation"></div>
                    </div>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Sujet" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                    <div class="validation"></div>
                  </div>
                  <div class="form-group">
                    <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                    <div class="validation"></div>
                  </div>
                  <div class="text-center"><button type="submit">Envoyer</button></div>
                </form>
              </div>
      
            </div>
          </section>
        )
    }
}

export default Contact