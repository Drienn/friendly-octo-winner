import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SideNav from './components/SideNav';
import Home from './components/Home';
import { WorkOrders, WorkOrderDetails, WorkOrderStore } from './components/WorkOrders';
import { AppWrapper, MainWrapper } from './styles/app';
import './App.css'

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <SideNav />
        <MainWrapper>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <WorkOrderStore>
              <Route exact path="/workOrders">
                <WorkOrders />
              </Route>
              <Route path="/workOrders/:id">
                <WorkOrderDetails />
              </Route>
            </WorkOrderStore>
          </Switch>
        </MainWrapper>
      </AppWrapper>
    </Router>
  );
}

export default App;