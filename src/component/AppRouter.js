import React, { Component } from "react";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import firebase from "./FireBaseConfig";

import Home from "./Home";
import AboutPage from "./AboutPage";

import Header from "./Header";
import Couleurs from "./couleurs";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Reservation from "./Reservation";
import Add from "./Add";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";
import Reserv from "./Reserv";
import Carousell from "./Carousell";
import UserTable from "./UserTable"
import voucher from "./voucher"
import "./Loading.css";





class AppRouter extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
             <Route path="/about" component={AboutPage} />
             <Route path="/Carousell" component={Carousell} />
             <Route path="/couleurs" component={Couleurs} />
             <Route path="/SignUp" component={SignUp} />
             <Route path="/SignIn" component={SignIn} />
             <Route path="/Reservation" component={Reservation} />
             <Route path="/Add" component={Add} />
<Route path="/Reserv" component={Reserv}/>
<Route path="/AddUserForm" component={AddUserForm}/>
<Route path="/EditUserForm" component={EditUserForm}/>
<Route path="/UserTable" component={UserTable}/>
<Route path="/voucher" component={voucher}/>
               {/* <Route path="/book" exa component={BookPage} />
              <Route component={PageNotFound} /> */}
            </Switch>
          </div>

          {/* <HomePage />
        <BookPage />
        <AboutPage /> */}
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default AppRouter;