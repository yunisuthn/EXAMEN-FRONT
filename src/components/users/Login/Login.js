import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { MDBContainer } from 'mdbreact';
import Home from '../../Home';
import Footer from '../../Footer';
import API from '../../utils/API';
import Bienvenu from '../../Bienvenu';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            email: "",
            password: "",
            redirect: false
        }
        this.handleChange.bind(this);
        this.send.bind(this);
    }
    send = event => {

        if (this.state.email.length === 0) {
            return;
        }
        if (this.state.password.length === 0) {
            return;
        }
        API.login(this.state.email, this.state.password).then(function (data) {
            //localStorage.setItem('token', data.data.token, 'id', data.data.id);
            localStorage.setItem('id', data.data.id);
            window.location = '/admin'
        }, function (error) {
            console.log(error);
            document.getElementById("error").innerHTML = "Email ou mot de passe incorrect !"
            return;
        })

    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    render() {
        return (
            <div >
                <div id="page-top" data-spy="scroll" data-target=".navbar-fixed-top" >
                    <Home />
                </div>

                <div class="intro-a">
                    <div class="overlay-b">
                        <div class="container">
                            <div className="row">

                                <div className=' col-md-6'>
                                    <Bienvenu />
                                </div>
                                <div className='col-md-6'>
                                    <MDBContainer className='login'>

                                        <FormGroup controlId="email" bsSize="large">
                                            <FormLabel className='couleur'>Email</FormLabel>
                                            <FormControl autoFocus className=' col-md-6' type="email" value={this.state.email} onChange={this.handleChange} />
                                        </FormGroup>
                                        <FormGroup controlId="password" bsSize="large">
                                            <FormLabel className='couleur'>Password</FormLabel>
                                            <FormControl className=' col-md-6' value={this.state.password} onChange={this.handleChange} type="password" />
                                        </FormGroup>

                                        <FormGroup bsSize="large">
                                            <FormLabel id='error'></FormLabel>
                                        </FormGroup>
                                        <Button variant="primary"
                                            onClick={this.send}
                                            className='couleur boutton'
                                            type="submit">
                                            Connexion
                                    </Button>


                                    </MDBContainer>
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

export default Login;

