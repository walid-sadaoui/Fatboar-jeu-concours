import React from 'react';
import NavClient from './NavClient'
import GainsClient from './GainsClient'

class Client extends React.Component {
    render() {
        return (
          <div>    
            <NavClient/>
            <GainsClient/>
          </div>
        )
    }
}

export default Client
