import React, { Component } from 'react';
import Home from './Home';
import Footer from './Footer';
class Objectif extends Component {
    render() {
        return (
            <div>
                <div id="page-top" data-spy="scroll" data-target=".navbar-fixed-top" >
                    <Home />
                </div>
                <div className="">
                    <div class="intro ">
                        <div class="overlay">
                            <div class="container">
                                <div class="row">
                                    <div class="intro-text">
                                    <p>
                                        Vous êtes des jeunes actifs entre 25 - 35 ans.
                                        Des personnes qui veulent apprendre à
                                        cuisiner afin de manger correctement.
                                        Nous sommes ici pour vous aider.
                                        Veuillez regarder nos ateliers et inscrivez-vous.
                                    </p>
                
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

export default Objectif;
