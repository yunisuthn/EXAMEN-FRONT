import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import MenuD from "./MenuD"

import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { MDBContainer } from 'mdbreact';

class Ajout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      leftOpen: true,
      titre: '',
      description: '',
      date: '',
      debut: '',
      duree: '',
      placedispo: '',
      placeres: '',
      prix: '',
      user: '',
      photo_profil: '',
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this)
    this.handleUploadImage = this.handleUploadImage.bind(this);

  }

  sideBar = (event) => {
    /* console.log("event : ", event.currentTarget.parentNode); */

    let key = `${event.currentTarget.parentNode.id}Open`;
    console.log("key ==== ", key);

    this.setState({ [key]: !this.state[key] })

  }
  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleUploadImage(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.append('photo_profil', this.uploadInput.files[0]);
    data.append('titre', this.state.titre);
    data.append('description', this.state.description)
    data.append('date', this.state.date);

    data.append('debut', this.state.debut);
    data.append('duree', this.state.duree);
    data.append('placedispo', this.state.placedispo);
    data.append('placeres', this.state.placeres)

    data.append('prix', this.state.prix);
    data.append('user', localStorage.id)



    fetch('https://simplonony.herokuapp.com/article', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        console.log('this.state.titre == ', body);
        this.setState({ photo_profil: `https://simplonony.herokuapp.com/article/${body.photo_profil}` });
        console.log('ity ilay body.fil', body);

      });
    });
    this.props.history.push('./liste');
  }

  componentDidMount() {
    console.log('this.props.location.pathname', localStorage.id);
  }
  render() {
    let leftOpen = this.state.leftOpen ? 'closed' : 'open';
    return (
      <div className="skin-default-dark  fixed-layout" id="layout1" >

        <div id="left" className={leftOpen} className="div">
          <div className='icon'
            onClick={this.sideBar} >
            <i className="fa fa-align-justify"></i>
          </div>
          <div className={`sidebar ${leftOpen}`} >
            <MenuD />
          </div>
        </div>

        <div id='main'>
          <div className='header'>
            <h3 className={`title ${'left-' + leftOpen}`}>
              Cuisinez plus !
            </h3>
          </div>
          <div className='content'>
            <div className="row page-titles">
              <div className="col-md-5 align-self-center">
                <h4 className="text-themecolor">Ajout</h4>
              </div>
              <div className="col-md-7 align-self-center text-right">
                <div className="d-flex justify-content-end align-items-center">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                    <li className="breadcrumb-item active">Ajout</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="row">

              <MDBContainer className=" margin span">

                <FormGroup className='row ' controlId="titre" bsSize="large">
                  <FormLabel className='couleur col-md-4'>Titre:</FormLabel>
                  <FormControl autoFocus className=' col-md-4' type="text"
                    value={this.state.value}
                    onChange={this.onChange}
                    name="titre" />
                </FormGroup>
                <FormGroup className='row' controlId="description" bsSize="large">
                  <FormLabel className='couleur col-md-4'>Description:</FormLabel>
                  <FormControl type="textarea" className=' col-md-4' rows="5"
                    value={this.state.value}
                    onChange={this.onChange}
                    name="description" />
                </FormGroup>
                <FormGroup className='row' controlId="date" bsSize="large">
                  <FormLabel className='couleur col-md-4'>Date:</FormLabel>
                  <FormControl type="date"
                    className=' col-md-4'
                    value={this.state.value}
                    onChange={this.onChange}
                    name="date" />
                </FormGroup>

                <FormGroup className='row' controlId="debut" bsSize="large">
                  <FormLabel className='couleur col-md-4'>Horaire début:</FormLabel>
                  <FormControl type="heure"
                    className=' col-md-4'
                    value={this.state.value}
                    onChange={this.onChange}
                    name="debut" />
                </FormGroup>
                <FormGroup className='row' controlId="duree" bsSize="large">
                  <FormLabel className='couleur col-md-4'>Durée:</FormLabel>
                  <FormControl type="text"
                    className=' col-md-4'
                    value={this.state.value}
                    onChange={this.onChange}
                    name="duree" />
                </FormGroup>
                <FormGroup className='row' controlId="placedispo" bsSize="large">
                  <FormLabel className='couleur col-md-4'>Nombre place disponible:</FormLabel>
                  <FormControl type="text"
                    className=' col-md-4'
                    value={this.state.value}
                    onChange={this.onChange}
                    name="placedispo" />
                </FormGroup>
                <FormGroup className='row' controlId="placeres" bsSize="large">
                  <FormLabel className='couleur col-md-4'>Nbre place reservé:</FormLabel>
                  <FormControl type="text"
                    className=' col-md-4'
                    value={this.state.value}
                    onChange={this.onChange}
                    name="placeres" />
                </FormGroup>
                <FormGroup className='row' controlId="prix" bsSize="large">
                  <FormLabel className='couleur col-md-4'>Prix:</FormLabel>
                  <FormControl type="text"
                    className=' col-md-4'
                    value={this.state.value}
                    onChange={this.onChange}
                    name="prix" />
                </FormGroup>

                <FormGroup controlId="file" bsSize="large">
                  <FormControl
                    ref={(ref) => { this.uploadInput = ref; }}
                    type="file"
                    name="photo_profil" />
                </FormGroup>


                <FormGroup bsSize="large">
                  <Button variant="primary" className='couleur boutton'
                    onClick={this.handleUploadImage}
                    type="submit">
                    Ajouter
        </Button>
                </FormGroup>


              </MDBContainer>

            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Ajout;
