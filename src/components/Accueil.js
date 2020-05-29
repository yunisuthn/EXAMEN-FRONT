import React, { Component } from 'react';
import Home from './Home';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import API from './utils/API';

class Accueil extends Component {
    componentDidMount() {
        API.logout();
    }
    render() {
        return (
            <div >
                <div id="page-top" data-spy="scroll" data-target=".navbar-fixed-top" >
                    <Home />
                </div>


                <div className="">
                    <div class="intro ">
                        <div class="overlay">
                            <div class="container">
                                <div class="row">
                                    <div class="intro-text">
                                        <h1>Cuisinez plus, formation pour vous</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="  " id='div'>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Accueil;
