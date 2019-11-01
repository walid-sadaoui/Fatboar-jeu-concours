import React from 'react';
import Banner from './Banner';
import HomeConcours from './HomeConcours';
import Contact from './Contact';

class Home extends React.Component{
    render(){
        return(
            <div>
            <Banner/>
            <HomeConcours/>
            <Contact/>
            </div>
        )
    }
}

export default Home