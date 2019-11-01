import React from 'react'

class Footer extends React.Component{
    render(){
        return(
          <section>
            <footer id="footer">
            <div class="container">
              <div class="copyright">
                <ul>
                  <li><a href="#">MENTIONS LÉGALES</a> |</li>
                  <li><a href="#">DONNÉES PERSONNELLES</a> |</li>
                  <li><a href="#">MODALITÉS</a> |</li>
                  <li><a href="#">FAQ</a></li>
                </ul>
                RESTAURANT FATBOAR™ & © 2011 - 2020. Tous droits réservés.
              </div>
              <div class="credits">
              </div>
            </div>
          </footer>
          <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
          </section>
        )
    }
}

export default Footer