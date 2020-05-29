import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Acceuil from './components/Accueil';
import Atelier from './components/Atelier';
import Objectif from './components/Objectif';
import Introduction from './components/Introduction';
import Login from './components/users/Login/Login';
import Register from './components/users/Register/Register';
/* import Dashboard from './components/users/Dashboard/Dashboard'; */
import Profil from './components/users/Dashboard/Profil';
import Liste from './components/users/Dashboard/Liste';
import Ajout from './components/users/Dashboard/Ajout';
import Edit from './components/users/Dashboard/Edit';
import { PrivateRoute } from './components/users/PrivateRoute.js';

function App() {
  return (
    <div className="">
      <Switch>

        <Route exact path='/' component={Acceuil} />
        <Route exact path='/atelier' component={Atelier} />
        <Route exact path='/Objectif' component={Objectif} />
        <Route exact path='/Introduction' component={Introduction} />
        <Route exact path='/connect' component={Login} />
        <Route exact path='/register' component={Register} />
        {/* <PrivateRoute path="/admin" component={Dashboard} /> */}
        <PrivateRoute path="/admin" component={Profil} />
        <PrivateRoute path="/liste" component={Liste} />
        <PrivateRoute path="/ajout" component={Ajout} />
        <PrivateRoute path="/editer/:id" component={Edit} />

      </Switch>
    </div>
  );
}

export default App;
