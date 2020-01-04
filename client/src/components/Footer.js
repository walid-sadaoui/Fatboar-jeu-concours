import React from 'react'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

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
          <NavLink to="#" className="back-to-top"><FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon></NavLink>
          </section>
        )
    }
}

export default Footer