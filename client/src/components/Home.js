import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';
// import HomeConcours from './HomeConcours';

class Home extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Banner/>
            </div>
        )
    }
}

export default Home