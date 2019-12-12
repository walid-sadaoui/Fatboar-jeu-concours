import React, {Component} from 'react';
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

export default class Content extends Component {
    state = {
        tickets: []
    }

    componentDidMount(){
        this.callApi();
    }

    callApi() {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('idUser');
        const url = `${API_URL}/users/${id}/tickets`;
        axios.get(url, {
            method: 'Get',
            headers: {
                'Authorization': 'Bearer '+token
            }
        })
        .then(response => response.data)
        .then(res => {
            this.setState({ tickets: res.tickets});
        })
        .catch(err => console.log(err));
    }

    render(){
        return (


               <div className="content-wrapper">
                   <div className="content">

                       <div className="content-header">
                           <div className="container-fluid">
                               <div className="row mb-2">
                                   <div className="col-sm-6">
                                       <h1 className="m-0 text-dark">Liste de vos gains</h1>
                                   </div>

                               </div>

                           </div>

                       </div>
                <div className="row">
                    {this.state.tickets.map(ticket =>
                            <div className="col-md-3">

                                <div className="card card-widget widget-user">

                                    <div className="widget-user-header bg-gradient-blue">
                                        <h3 className="widget-user">{ticket.gain.description}</h3>
                                        {/* <h5 className="widget-user-desc">Le Seigneur Des Burgers</h5> */}
                                    </div>
                                    <div className="widget-user-image">
                                        <img className="img-circle elevation-2" src="../dist/img/food/02.png"
                                             alt="User Avatar" />
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">

                                            <div className="col-sm-6 border-right">
                                                <div className="description-block">
                                                    <h5 className="description-header">{ticket.ticketNumber}</h5>
                                                    <span className="description-text">TICKET</span>
                                                </div>

                                            </div>

                                            <div className="col-sm-6">
                                                <div className="description-block">
                                                    <h5 className="description-header">{ticket.idGain}</h5>
                                                    <span className="description-text">GAINS</span>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                   )}
                   </div>
                   </div>
               </div>





    )
    }
}