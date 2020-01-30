import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from './auth';


//Função de autenticação de rotas
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route { ...rest } render={ props =>(

        isAuthenticated() ? (
            <Component { ...props } />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )

    ) } />
);

//Definindo Rotas
const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ () => <h1>Hello World</h1> } />
            <PrivateRoute path="/app" component={ ()=> <h1>Voce esta logado</h1> } />
        </Switch>
    </BrowserRouter>
);

export default Routes;