import React from 'react'

class Footer extends React.Component{
    render(){
        return(
          <section>
            <footer id="footer">
            <div class="container">
              <div class="copyright">
                 <strong>&copy; Copyright 2019 FATBOAR</strong> - Tous droits réservés
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