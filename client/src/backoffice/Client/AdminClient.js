import React from 'react';
import NavClient from './NavClient';
import GainsClient from './GainsClient';
import { API_URL } from '../config';

class Client extends React.Component {

  constructor(props) {
    super(props);
    this.state = { gains: [] };
  }

  componentWillMount() {
    console.log("called");
    this.fetchData();
  }

  render() {
    return (
      <div>
        <NavClient/>
        <GainsClient gains={this.state.gains}/>
      </div>
    )
  }

  fetchData() {
    fetch(`${API_URL}/gains`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ gains: data })
      });
  }
}

export default Client
