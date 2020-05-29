import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';
import Home from './Home';
import Footer from './Footer';
import axios from 'axios';
class Atelier extends Component {
    constructor(props) {
        super(props);
        this.state = { profil: [] };
    }
    componentDidMount() {
        axios.get('https://simplonony.herokuapp.com/article')
            .then(response => {
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    inscrire = (x) => {
        localStorage.setItem('atel', x);
        this.props.history.push('/inscrire');
    }

    render() {
        return (
            <div >
                <div id="page-top" data-spy="scroll" data-target=".navbar-fixed-top" >
                    <Home />
                </div>
                <div className="">
                <div class="intro-a">
                    <div class="overlay-a">
                        <div class="container">
                            <div className='row margin-a' >
                                {
                                    (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {

                                        return (
                                            <div className='col-md-3'>
                                                <MDBCard id='carte' key={obj._id} onClick={() => this.inscrire(obj._id)}>
                                                    <MDBCardImage id='photos' className=" img-fluid" src={'http://localhost:8081/photos/' + obj.photo_profil} alt="pdp" />
                                                    <MDBCardBody cascade>
                                                        <MDBCardTitle className="titre">{obj.titre}</MDBCardTitle>
                                                        <MDBCardText>{obj.description}</MDBCardText>
                                                        <MDBCardText>DATE : {obj.date}</MDBCardText>
                                                        <MDBCardText>A PARTIR DE {obj.debut} HEURE</MDBCardText>
                                                        <MDBBtn className="btn" >
                                                            plus d'information
                                                        </MDBBtn>
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </div>
                                        )

                                    })) : ('')
                                }
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

export default Atelier;
