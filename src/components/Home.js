import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Image1 from '../img/exam.png';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';


class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
      this.setState({
          collapse: !this.state.collapse,
      });
  }
  render() {
    return (


      <nav id="menu" className="navbar navbar-default navbar-expand-lg navbar-expand-sm navbar-expand-md navbar-expand-xs ">


          <MDBNavbar className='nav' dark expand="md">
              <Link to={'./'}>
            <img className='img ' src={Image1} alt="Logo" />
                
              </Link>
          <MDBNavbarToggler onClick={this.onClick} />
                <MDBCollapse isOpen={this.state.collapse} navbar>
                    <MDBNavbarNav right>
                        <MDBNavItem className='MDBNavLink'>
                            <MDBNavLink to="/introduction" className='dashbrd'>introduction</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem className='MDBNavLink'>
                            <MDBNavLink to="/objectif" className='dashbrd'>objectif</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem className='MDBNavLink'>
                            <MDBNavLink to="/atelier" className='dashbrd'>atelier</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>

          <label className="admin">
              <Link to={'./connect'}>
                admin
              </Link>  
          </label> 
      </nav>
    );
  }
}

export default Home;

