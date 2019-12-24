import React, {Component} from 'react';
import Sidebar from './SideBar';
import {NavLink} from 'react-router-dom';
import AdminBar from './AdminBar';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelopeOpenText, faHourglassEnd } from '@fortawesome/free-solid-svg-icons';

const API_URL = process.env.REACT_APP_API_URL;

class Tirage extends Component {
    render(){
        return (
            <React.Fragment>
            <AdminBar/>
            <Sidebar/>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark"><b><FontAwesomeIcon icon={faHourglassEnd}></FontAwesomeIcon> Tirer au sort le gagnant final</b></h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content wow fadeInUp">
                    <div className="container-fluid">
                        <div className="row">
                            <div id="wrapper" style={{marginTop:"-150px"}}>
                                <NavLink to="/gagnant-final" class="my-super-cool-btn hvr-shrink">
                                    <div class="dots-container">
                                    <div class="dot"></div>
                                    <div class="dot"></div>
                                    <div class="dot"></div>
                                    <div class="dot"></div>
                                    </div>
                                    <span>Go!</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>

    )
    }
}

export default Tirage