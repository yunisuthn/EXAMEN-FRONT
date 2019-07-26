import React from 'react';

import TopNavigation from './TopNavigation';
import SideNavigation from './SlideNavigation';
import Footer from '../../../Components/Footer';

import API from '../../../utils/API';

export default class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.disconnect.bind(this);
    }
    disconnect = event => {
        API.logout();
        window.location = "/";
    }
    render() {
        return(
            <div className="dash">
                <div className='col-md-3 divA '>
                    <SideNavigation />
                </div>
                <div className=' col-md-8 divB'>
                    <TopNavigation />
                <div className='row divC container span1  '>
                  <div id="content " className="mx-auto ">
                    <h1>BIENVENU SUR VOTRE PAGE </h1> 
                    <h3> Cher cuisinier,</h3>
                    <p>vous pouvez :</p>
                    <p>- ajouter des ateliers</p>
                    <p>- voir vos ateliers</p>
                  </div>
                </div>
                <div className='row divD container span3 cher'>
          <Footer />
                </div>
                </div>
                
            </div>
        )
    }
}