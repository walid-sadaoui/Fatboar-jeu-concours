import React from 'react'
import {NavLink} from 'react-router-dom'

class Footer extends React.Component{
    render(){
        return(
          <section>
            <footer id="footer">
            <div className="container">
              <div className="copyright">
                <ul>
                  <li><a href="/mentions-legales">MENTIONS LÉGALES</a> |</li>
                  <li><a href="/donnees-personnelles">DONNÉES PERSONNELLES</a> |</li>
                  <li><a href="/modalites">MODALITÉS</a></li>
                </ul>
                RESTAURANT FATBOAR™ & © 2011 - 2020. Tous droits réservés.
              </div>
              <div className="credits">
              </div>
            </div>
          </footer>
          <NavLink to="#" className="back-to-top"><i className="fa fa-chevron-up"></i></NavLink>
          </section>
        )
    }
}

export default Footer