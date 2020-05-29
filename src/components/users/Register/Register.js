import React from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { MDBContainer, MDBCol } from 'mdbreact';
import Home from '../../Home';
import Footer from '../../Footer';
import API from '../../utils/API';
import Bienvenu from '../../Bienvenu';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nom: "",
            prenom: "",
            email: "",
            specialite: "",
            password: "",
            cpassword: ""
        }
        this.handleChange.bind(this);
        this.send.bind(this);
    }
    send = event => {
        if (this.state.email.length === 0) {
            document.getElementById("error").innerHTML = "Inserez l'email !"
            return;
        }
        if (this.state.nom.length === 0) {
            document.getElementById("error").innerHTML = "Inserez le nom !"
            return;
        }
        if (this.state.prenom.length === 0) {
            document.getElementById("error").innerHTML = "Inserez le prenom !"
            return;
        }
        if (this.state.password.length === 0 || this.state.password !== this.state.cpassword) {
            document.getElementById("error").innerHTML = "Email ou mot de passe incorrect !"
            return
        }

        var _send = {
            nom: this.state.nom,
            prenom: this.state.prenom,
            email: this.state.email,
            password: this.state.password,
            specialite: this.state.specialite
        }
        API.signup(_send).then(function (data) {
            //localStorage.setItem('token', data.data.token);
            localStorage.setItem('id', data.data.id);
            if (!data.data.id) {
                //window.location = '/register'
                document.getElementById("error").innerHTML = "Email déjà utiliser !"   
            } else {
                window.location = '/admin'
            }

            // window.location = `/dashboard/${data.data.id}`
        }, function (error) {
            console.log(error);
            return;
        })
    }
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    signin = event => {
        window.location = "/connect"
    }

    render() {
        return (
            <div >
                <div id="page-top" data-spy="scroll" data-target=".navbar-fixed-top" >
                    <Home />
                </div>

                <div className="intro-a">
                    <div className="overlay-b">
                        <div className="container">
                            <div className="row" >


                                <div className=' col-md-6'>
                                    <Bienvenu />
                                </div>
                                <div className='col-md-6'>
                                    <MDBContainer className='center-block' >
                                        <MDBCol >
                                            <FormGroup className='row' controlId="nom" bsSize="large">
                                                <FormLabel className='couleur col-md-4'>Nom</FormLabel>
                                                <FormControl autoFocus className=' col-md-6' type="text" value={this.state.nom} onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className='row' controlId="prenom" bsSize="large">
                                                <FormLabel className='couleur col-md-4'>Prénom</FormLabel>
                                                <FormControl autoFocus className=' col-md-6' type="text" value={this.state.prenom} onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className='row' controlId="email" bsSize="large">
                                                <FormLabel className='couleur col-md-4'>Email</FormLabel>
                                                <FormControl autoFocus className=' col-md-6' type="email" value={this.state.email} onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className='row' controlId="specialite" bsSize="large">
                                                <FormLabel className='couleur col-md-4'>Spécialité</FormLabel>
                                                <FormControl autoFocus className=' col-md-6' type="text" value={this.state.specialite} onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className='row' controlId="password" bsSize="large">
                                                <FormLabel className='couleur col-md-4'>Password</FormLabel>
                                                <FormControl className=' col-md-6' value={this.state.password} onChange={this.handleChange} type="password" />
                                            </FormGroup>
                                            <FormGroup className='row' controlId="cpassword" bsSize="large">
                                                <FormLabel className='couleur col-md-4'>Confirm Password</FormLabel>
                                                <FormControl className=' col-md-6' value={this.state.cpassword} onChange={this.handleChange} type="password" />
                                            </FormGroup>

                                            <FormGroup bsSize="large">
                                                <FormLabel id='error'></FormLabel>
                                            </FormGroup>
                                            <FormGroup bsSize="large">
                                                <Button variant="primary"
                                                    className='couleur boutton'
                                                    type="submit"
                                                    onClick={this.send}
                                                >
                                                    Inscription
                                                </Button>

                                            </FormGroup>
                                        </MDBCol>
                                    </MDBContainer>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="  " id='div'>
                    <Footer />
                </div>
            </div>
        );
    }

}

export default Register;                        