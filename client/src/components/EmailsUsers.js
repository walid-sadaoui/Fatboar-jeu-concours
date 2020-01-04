import React, {Component} from 'react';
import Sidebar from './SideBar';
import AdminBar from './AdminBar';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

class EmailsUsers extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: [],
            copied: ''
        }
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

    copiedAlert = e =>{
        e.preventDefault();
        this.setState({ copied: e.target.id})
    }

    render(){
        return (
            <React.Fragment>
            <AdminBar/>
            <Sidebar/>
            <div className="content-wrapper backoffice">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Adresses e-mail des users</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content wow fadeInUp">
                    <div className="container-fluid">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Prénom</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Téléphone</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        {this.state.users.map(user =>
                            <tbody>
                                <tr>
                                    <th scope="row">{user.idUser}</th>
                                    <td>{user.lastName}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td class="align-middle pr-4">
                                        <CopyToClipboard text={[user.idUser, user.lastName, user.firstName, user.email, user.phone]}>
                                            <button type="button" class="btn btn-primary" onClick={this.copiedAlert} id={user.idUser}><FontAwesomeIcon icon={faCopy}></FontAwesomeIcon></button>
                                        </CopyToClipboard>  
                                    </td>
                                    <td>{this.state.copied == user.idUser? <span style={{color: 'red'}}>Copied.</span> : null}</td>
                                </tr>
                            </tbody>
                            
                        )}
                    </table>
                 
                    </div>
                </div>
            </div>
            </React.Fragment>

    )
    }
}

export default EmailsUsers