import React from 'react';
import axios from 'axios';
import MenuD from "./MenuD";

export default class Profil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            leftOpen: true,
            profil: [],
            user: []
        };
        this.onClick = this.onClick.bind(this);
    }

    sideBar = (event) => {
        let key = `${event.currentTarget.parentNode.id}Open`;
        this.setState({ [key]: !this.state[key] })
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    componentDidMount() {
       
        axios.get(`https://simplonony.herokuapp.com/user/${localStorage.id}`)
            .then(response => {
                this.setState({ user: response.data });                
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    render() {
        let leftOpen = this.state.leftOpen ? 'closed' : 'open';
        return (
            <div className="skin-default-dark  fixed-layout" id="layout1" >

                <div id="left" className={leftOpen} className="div">
                    <div className='icon'
                        onClick={this.sideBar} >
                        <i class="fa fa-align-justify"></i>
                    </div>
                    <div className={`sidebar ${leftOpen}`} >
                        <MenuD />
                    </div>
                </div>

                <div id='main'>
                    <div className='header'>
                        <h3 className={` title ${'left-' + leftOpen} `}>
                            Cuisinez plus !
                        </h3>
                    </div>
                    <div className='content'>

                        <div class="page-wrapper">
                            <div class="container-fluid">
                                <div class="row page-titles">
                                    <div class="col-md-5 align-self-center">
                                        <h4 class="text-themecolor">Profile</h4>
                                    </div>
                                    <div class="col-md-7 align-self-center text-right">
                                        <div class="d-flex justify-content-end align-items-center">
                                            <ol class="breadcrumb">
                                                <li class="breadcrumb-item">Home</li>
                                                <li class="breadcrumb-item active">Profile</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-4 col-xlg-3 col-md-5">
                                        <div class="card">
                                            <div class="card-body">
                                                <center class="m-t-30"> 
                                                    <h4 class="card-title m-t-10">{this.state.user.nom} {this.state.user.prenom}</h4>
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 col-xlg-9 col-md-7">
                                        <div class="card">
                                            <div class="card-body">
                                                <form class="form-horizontal form-material">
                                                    <div class="form-group">
                                                        <label class="col-md-12">Mon nom</label>
                                                        <div class="col-md-12">
                                                            <input type="text" placeholder={this.state.user.nom} class="form-control form-control-line" />
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-md-12">Mon prénom</label>
                                                        <div class="col-md-12">
                                                            <input type="text" placeholder={this.state.user.prenom} class="form-control form-control-line" />
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="example-email" class="col-md-12">Mon email</label>
                                                        <div class="col-md-12">
                                                            <input type="email" placeholder={this.state.user.email} class="form-control form-control-line" name="example-email" id="example-email" />
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="example-email" class="col-md-12">Spécialité</label>
                                                        <div class="col-md-12">
                                                            <input type="email" placeholder={this.state.user.specialite} class="form-control form-control-line" name="example-email" id="example-email" />
                                                        </div>
                                                    </div>
                                                   {/*  <div class="form-group">
                                                        <div class="col-sm-12">
                                                            <button class="btn btn-success">Update Profile</button>
                                                        </div>
                                                    </div> */}
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}