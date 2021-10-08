import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Header from './Header';
import Footer from './Footer';
import Home from "./Home";
import Contact from "./Contact";
import Feedback from "./Feedback";
import About from "./About";
import { Switch, Route, Redirect } from "react-router-dom";



const App = () => {
  return (
    <>
    <Navbar />
    <Switch>
         <Route path="/" component={Home} />
         <Route path="/about" component={About} />
         <Route path="/contact" component={Contact} />
         <Route path="/feedback" component={Feedback} />
         <Redirect to="/" />
    </Switch>
    <Footer />
    </>
  );
};

export default App;
