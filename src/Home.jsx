import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/img2.jpg";
import Common from './Common';

const Home = () => {
    return (
      <>
        <Common name="A Perfect Timetable don't CHANGE itself, It changes the person according to it! 
        " imgsrc={web} visit="/contact" btname="Get Started"/>
       
      </>
    )
}

export default Home;
