import React, { Component }from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import { ScheduleComponent } from '@syncfusion/ej2-react-schedule';
import Footer from './Footer';
import Home from "./Home";
import Contact from "./Contact";
import MainFrame from "./MainFrame";
import About from "./About";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import './index.css';


class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      //1--logged in , 0--not logged in
      auth: false,
    };
  }
  
  authHandler = () => {
    this.setState({ auth: !this.state.auth });
  };

  render() {
    return (
    <>
    <Navbar login={this.authHandler} status={this.state.auth} />
    <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/about" component={About} />
         <Route exact path="/contact" component={Contact} />
          <Route exact path="/mainservice" >
            {this.state.auth === false ? <Redirect to="/login" /> :
              <>
              <Redirect to="/mainservice" />
              <MainFrame />
              </>}
            
          </ Route>
          
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage}/>
         <Redirect to="/" />
    </Switch>
    <Footer />
    </>
  )
  };
};

  
export default App;
