import React from 'react'

class Footer extends React.Component{
    render(){
        return(
          <section>
            <footer id="footer">
            <div className="container">
              <div className="copyright">
                <ul>
                  <li><a href="#">MENTIONS LÉGALES</a> |</li>
                  <li><a href="#">DONNÉES PERSONNELLES</a> |</li>
                  <li><a href="#">MODALITÉS</a> |</li>
                  <li><a href="#">FAQ</a></li>
                </ul>
                RESTAURANT FATBOAR™ & © 2011 - 2020. Tous droits réservés.
              </div>
              <div className="credits">
              </div>
            </div>
          </footer>
          <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
          </section>
        )
    }
}

export default Footer