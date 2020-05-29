import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MenuD from "./MenuD";

export default class Liste extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            leftOpen: true,
            profil: []
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
        axios.get(`https://simplonony.herokuapp.com/${localStorage.id}`)
            .then(response => {
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    activer() {
        axios.post(`https://simplonony.herokuapp.com/${localStorage.id}`)
            .then(response => {
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    ajout = event => {
        window.location = "/dashboard";
    }

    getInitialState = () => {
        return { checked: true }
    }

    handleCheck = (id) => {
        localStorage.setItem('checked', id);
    }

    liste() {
        var msg;
        if (this.state.checked) {
            msg = "checked";
        } else {
            msg = "unchecked";
        }
        return <table className="table">
            <thead>
                <tr>
                    <th>TITRE</th>
                    <th>PRIX</th>
                    <th>DESCRIPTION</th>
                    <th>PHOTO</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {

                        return <tr key={obj._id}>
                            <td>{obj.titre}</td>
                            <td>{obj.prix}</td>
                            <td>{obj.description}</td>
                            <td>
                                <img width="150px" height="50px" src={'https://simplonony.herokuapp.com/photos/' + obj.photo_profil} alt="pdp" />
                            </td>
                             <td>
                                <Link to={"/editer/" + obj._id} className="btn btn-primary">Edit</Link>
                            </td>
                            <td>
                                {
                                    (obj.affiche === true) ? (
                                        <button
                                            onClick={this.activer}>Activer</button>
                                    ) : (
                                            <button
                                                onClick={this.activer} >Desactiver</button>
                                        )
                                }
                            </td>
                        </tr>

                    })) : ('')
                }
            </tbody>
        </table>
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
                        <h3 className={`
                      title
                      ${'left-' + leftOpen}
                  `}>
                            Cuisinez plus !
                              </h3>
                    </div>
                    <div className='content'>
                        <div class="container-fluid">
                            <div class="row page-titles">
                                <div class="col-md-5 align-self-center">
                                    <h4 class="text-themecolor">Liste</h4>
                                </div>
                                <div class="col-md-7 align-self-center text-right">
                                    <div class="d-flex justify-content-end align-items-center">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><a >Home</a></li>
                                            <li class="breadcrumb-item active">Liste</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="card-title">Mes cours</h4>
                                            <div class="table-responsive">

                                                {this.liste()}
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