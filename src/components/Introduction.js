import React, { Component } from 'react';
import Home from './Home';
import Footer from './Footer';

class Introduction extends Component {
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

                                     <p>

                                     <h2 className='robot'>BIENVENU</h2>
                                        Nous sommes un centre de formation de cuisine qui propose des ateliers à nos élèves à
                                        partir de 12 ans, mais aussi à des particuliers.
                                     
                                        Les cours proposés aux particuliers permettent de financer l’achat de matériels et de
                                        matières premières.
                                     
                                        C’est la raison pour laquelle nous souhaitons booster cette activité.
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

export default Introduction;
