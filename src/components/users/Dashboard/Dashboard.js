import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import MenuD from "./MenuD"

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            leftOpen: true
        };
        this.onClick = this.onClick.bind(this);
    }

    sideBar = (event) => {
        /* console.log("event : ", event.currentTarget.parentNode); */

        let key = `${event.currentTarget.parentNode.id}Open`;
        
        this.setState({ [key]: !this.state[key] })

    }
    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
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
                        <h3 className={`
                      title
                      ${'left-' + leftOpen}
                  `}>
                            Cuisinez plus !
                              </h3>
                    </div>
                    <div className='content'>
                        <div className="row page-titles">
                            <div className="col-md-5 align-self-center">
                                <h4 className="text-themecolor">Dashboard</h4>
                            </div>
                            <div className="col-md-7 align-self-center text-right">
                                <div className="d-flex justify-content-end align-items-center">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                        <li className="breadcrumb-item active">Dashboard</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                    <div className="col-lg-8">
                        <div className="card oh">
                            <div className="card-body">
                                <div className="d-flex m-b-30 align-items-center no-block">
                                    <h5 className="card-title ">Yearly Sales</h5>
                                    <div className="ml-auto">
                                        <ul className="list-inline font-12">
                                            <li><i className="fa fa-circle text-info"></i> Iphone</li>
                                            <li><i className="fa fa-circle text-primary"></i> Ipad</li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="morris-area-chart" /* style="height: 350px;" */></div>
                            </div>
                            <div className="card-body bg-light">
                                <div className="row text-center m-b-20">
                                    <div className="col-lg-4 col-md-4 m-t-20">
                                        <h2 className="m-b-0 font-light">6000</h2><span className="text-muted">Total sale</span>
                                    </div>
                                    <div className="col-lg-4 col-md-4 m-t-20">
                                        <h2 className="m-b-0 font-light">4000</h2><span className="text-muted">Iphone</span>
                                    </div>
                                    <div className="col-lg-4 col-md-4 m-t-20">
                                        <h2 className="m-b-0 font-light">2000</h2><span className="text-muted">Ipad</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Today's Schedule</h5>
                                <h6 className="card-subtitle">check out your daily schedule</h6>
                                <div className="steamline m-t-40">
                                    <div className="sl-item">
                                        <div className="sl-left bg-success"> <i className="fa fa-user"></i></div>
                                        <div className="sl-right">
                                            <div className="font-medium">Meeting today <span className="sl-date"> 5pm</span></div>
                                            <div className="desc">you can write anything </div>
                                        </div>
                                    </div>
                                    <div className="sl-item">
                                        <div className="sl-left bg-info"><i className="fa fa-image"></i></div>
                                        <div className="sl-right">
                                            <div className="font-medium">Send documents to Clark</div>
                                            <div className="desc">Lorem Ipsum is simply </div>
                                        </div>
                                    </div>
                                    <div className="sl-item">
                                        <div className="sl-left"> <img className="img-circle" alt="user" src="../assets/images/users/1.jpg"/> </div>
                                        <div className="sl-right">
                                            <div className="font-medium">John Doe <span className="sl-date"> 5pm</span></div>
                                            <div className="desc">Call today with gohn doe </div>
                                        </div>
                                    </div>
                                    <div className="sl-item">
                                        <div className="sl-left"> <img className="img-circle" alt="user" src="../assets/images/users/2.jpg"/> </div>
                                        <div className="sl-right">
                                            <div className="font-medium">Go to the Doctor <span className="sl-date">5 minutes ago</span></div>
                                            <div className="desc">Contrary to popular belief</div>
                                        </div>
                                    </div>
                                    <div className="sl-item">
                                        <div className="sl-left"> <img className="img-circle" alt="user" src="../assets/images/users/3.jpg"/> </div>
                                        <div className="sl-right">
                                            <div><a href="#">Tiger Sroff</a> <span className="sl-date">5 minutes ago</span></div>
                                            <div className="desc">Approve meeting with tiger
                                                <br/><a href="javascript:void(0)" className="btn m-t-10 m-r-5 btn-rounded btn-outline-success">Apporve</a> <a href="javascript:void(0)" className="btn m-t-10 btn-rounded btn-outline-danger">Refuse</a> </div>
                                        </div>
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

export default Dashboard;
