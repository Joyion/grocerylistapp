import React from 'react';
import { Router, Switch, Route, } from "react-router-dom";
import { createBrowserHistory } from 'history';
import StorePage from "../components/StorePage";
import ViewListPage from "../components/ViewListPage";
// import {Provider} from "react-redux";
// import store from "react-redux";
export const history = createBrowserHistory();
import Navbar from "../components/Navbar";



const AppRouter = () => (

    <Router history={history}>
        <Navbar />
        <Switch>
            <Route exact path="/">
                <ViewListPage/>
            </Route>
            <Route path="/findItems">
                <StorePage />
            </Route>
        </Switch>

    </Router>
)

export default AppRouter;