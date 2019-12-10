import React, {Component} from 'react';
import axios from 'axios';
const API_URL = "http://localhost:5001";

export default class Dashboard extends Component {
    state = {
        users: []
    }

    componentDidMount(){
        this.callApi();
    }

    callApi() {
        const url = `${API_URL}/users/`;
        const token = localStorage.getItem('token');
        axios.get(url, {
            method: 'Get',
            headers: {
                'Authorization': 'Bearer '+token
            }
        })
        .then(response => response.data)
        .then((data) => this.setState({ users: data.userList }))
        .catch(err => console.log(err));
    }

    render(){
        return (

            <div className="content-wrapper">

                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Liste des utilisateurs</h1>
                            </div>

                        </div>

                    </div>

                </div>


                <section className="content">


                    <div className="card card-solid">
                        <div className="card-body pb-0">
                            <div className="row d-flex align-items-stretch">
                                {this.state.users.map(user =>
                                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
                                    <div className="card bg-light">
                                        <div className="card-header text-muted border-bottom-0">
                                            {user.role}
                                        </div>
                                        <div className="card-body pt-0">
                                            <div className="row">
                                                <div className="col-7">
                                                <h2 className="lead"><b>{user.lastName} {user.firstName}</b></h2>
                                                    <ul className="ml-4 mb-0 fa-ul text-muted">
                                                        <li className="small"><span className="fa-li"><i
                                                            className="fas fa-envelope"></i></span> {user.email}
                                                        </li>
                                                        <li className="small"><span className="fa-li"><i
                                                            className="fas fa-lg fa-phone"></i></span> Phone #: {user.phone}
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-5 text-center">
                                                    <img src="http://www.web-soluces.net/webmaster/avatar/AvatarMakerCom-Garcon.png" alt=""
                                                         className="img-circle img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="text-right">
                                                <a href="/#" className="btn btn-sm bg-teal">
                                                    <i className="fas fa-comments"></i>
                                                </a>
                                                <a href="/#" className="btn btn-sm btn-primary">
                                                    <i className="fas fa-user"></i> View Profile
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )}
                            </div>
                        </div>

                        <div className="card-footer">
                            <nav aria-label="Contacts Page Navigation">
                                <ul className="pagination justify-content-center m-0">
                                    <li className="page-item active"><a className="page-link" href="/#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="/#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="/#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="/#">4</a></li>
                                    <li className="page-item"><a className="page-link" href="/#">5</a></li>
                                    <li className="page-item"><a className="page-link" href="/#">6</a></li>
                                    <li className="page-item"><a className="page-link" href="/#">7</a></li>
                                    <li className="page-item"><a className="page-link" href="/#">8</a></li>
                                </ul>
                            </nav>
                        </div>

                    </div>


                </section>

            </div>




    )
    }
}