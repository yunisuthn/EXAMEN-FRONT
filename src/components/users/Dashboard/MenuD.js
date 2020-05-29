import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import Logo from '../images/exam.png';
import API from '../../utils/API';

class MenuD extends Component {
    
    disconnect = event => {
        API.logout();
        window.location = "/";
    }
    render() {
        return (
            <aside class="sidebar" >

            <div class="d-flex no-block nav-text-box align-items-center">
                <span className="nav-1">
                    <img className='img1' src={Logo} alt="elegant admin template" />
                </span>
            </div>

            <div class="scroll-sidebar">

                <nav class="sidebar-nav">
                    <ul id="sidebarnav">
                        {/* <li> <Link to={'./admin'}><i class="fa fa-tachometer"></i><span class="hide-menu">Dashboard</span></Link></li> */}
                        <li> <Link to={'./admin'}><i class="fa fa-user-circle-o"></i><span class="hide-menu">Profile</span></Link></li>
                        <li> <Link to={'./ajout'}><i class="fa fa-plus-circle"></i><span class="hide-menu"></span>Ajout</Link></li>
                        <li> <Link to={'./liste'}><i class="fa fa-table"></i><span class="hide-menu"></span>Tables</Link></li>
                        <li> <Link onClick={this.disconnect}> <i class="fa fa-power-off"></i><span class="hide-menu"></span>Déconnecter</Link></li>
                        
                    </ul>
                </nav>

            </div>

        </aside>

           );
    }
}

export default MenuD;
