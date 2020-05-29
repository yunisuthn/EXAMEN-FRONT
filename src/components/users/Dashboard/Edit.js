import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MenuD from "./MenuD";

export default class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeTitre = this.onChangeTitre.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeDebut = this.onChangeDebut.bind(this);
    this.onChangeDuree = this.onChangeDuree.bind(this);
    this.onChangePlacedispo = this.onChangePlacedispo.bind(this);
    this.onChangePlaceres = this.onChangePlaceres.bind(this);
    this.onChangePrix = this.onChangePrix.bind(this);
    //this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
    axios.get('https://simplonony.herokuapp.com/article/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          titre: response.data.titre,
          description: response.data.description,
          date: response.data.date,
          debut: response.data.debut,
          duree: response.data.duree,
          placedispo: response.data.placedispo,
          placeres: response.data.placeres,
          prix: response.data.prix
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  onChangeTitre(e) {
    this.setState({
      titre: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  onChangeDate(e) {
    this.setState({
      date: e.target.value
    });
  }
  onChangeDebut(e) {
    this.setState({
      debut: e.target.value
    });
  }
  onChangeDuree(e) {
    this.setState({
      duree: e.target.value
    });
  }
  onChangePlacedispo(e) {
    this.setState({
      placedispo: e.target.value
    });
  }
  onChangePlaceres(e) {
    this.setState({
      placeres: e.target.value
    });
  }
  onChangePrix(e) {
    this.setState({
      prix: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      titre: this.state.titre,
      description: this.state.description,
      date: this.state.date,
      debut: this.state.debut,
      duree: this.state.duree,
      placedispo: this.state.placedispo,
      placeres: this.state.placeres,
      prix: this.state.prix
    };
    
    axios.post('https://simplonony.herokuapp.com/' + this.props.match.params.id, obj)
      .then(res => console.log(res.data));

    this.props.history.push('../liste');
  }


  render() {
    let leftOpen = this.state.leftOpen ? 'closed' : 'open';
    return (
      <div className="skin-default-dark  fixed-layout" id="layout1" >

        <div id="left" className={leftOpen} className="div">
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

            <div className="page-wrapper">
              <div className="container-fluid">
                <div className="row page-titles">
                  <div className="col-md-5 align-self-center">
                    <h4 class="text-themecolor">Editer</h4>
                  </div>
                  <div className="col-md-7 align-self-center text-right">
                    <div class="d-flex justify-content-end align-items-center">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item">Home</li>
                        <li class="breadcrumb-item active">Editer</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <form className="row"  onSubmit={this.onSubmit} >
                  <div className="col-lg-4 col-xlg-3 col-md-5">
                    <div className="card">
                      <div className="card-body">
                        <center className="m-t-30">
                          <h4 className="card-title m-t-10">{this.state.titre}</h4>
                           {this.state.description}
                        </center>
                      </div>
                    </div>
                    <div className="">
                      <Link to={'../liste'}><h4 className="m-t-1">retour</h4></Link>
                          
                    </div>
                  </div>
                  <div className="form col-lg-8 col-xlg-9 col-md-7">
                    <div className="row form-group">
                      <label className='couleur col-md-3'>Titre:  </label>
                      <input
                        type="text"
                        className="form-control col-md-4 "
                        value={this.state.titre}
                        onChange={this.onChangeTitre}
                      />
                    </div>
                    <div className="form-group row" >
                      <label className='couleur col-md-3'>Description: </label>
                      <input type="text"
                        className="form-control col-md-4"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                      />
                    </div>
                    <div className="form-group row">
                      <label className='couleur col-md-3'>Date: </label>
                      <input type="text"
                        className="form-control col-md-4"
                        value={this.state.date}
                        onChange={this.onChangeDate}
                      />
                    </div>

                    <div className="form-group row">
                      <label className='couleur col-md-3'>Début: </label>
                      <input type="date"
                        className="form-control col-md-4"
                        value={this.state.debut}
                        onChange={this.onChangeDebut}
                      />
                    </div>
                    <div className="form-group row">
                      <label className='couleur col-md-3'>Durée: </label>
                      <input type="text"
                        className="form-control col-md-4"
                        value={this.state.duree}
                        onChange={this.onChangeDuree}
                      />
                    </div>
                    <div className="form-group row">
                      <label className='couleur col-md-3'>Place Disponible: </label>
                      <input type="text"
                        className="form-control col-md-4"
                        value={this.state.placedispo}
                        onChange={this.onChangePlacedispo}
                      />
                    </div>
                    <div className="form-group row">
                      <label className='couleur col-md-3'>Place reserv: </label>
                      <input type="text"
                        className="form-control col-md-4"
                        value={this.state.placeres}
                        onChange={this.onChangePlaceres}
                      />
                    </div>
                    <div className="form-group row">
                      <label className='couleur col-md-3'>Prix: </label>
                      <input type="text"
                        className="form-control col-md-4"
                        value={this.state.prix}
                        onChange={this.onChangePrix}
                      />
                    </div>
                    <div className="form-group">
                      <input type="submit"
                        value="Modifier"
                        className="btn btn-primary couleur" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}