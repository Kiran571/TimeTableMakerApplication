import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/img2.jpg";

const Home = () => {
    return (
      <>
        
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                {/* <div className="row"> */}
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                
                                <h1> A Perfect Timetable don't CHANGE itself, It changes the person according to it! <strong className="brand-name"> TimeTableMaker</strong> </h1>
                                <h2 className="my-3">
                                    We are here to schedule your time!!
                                </h2>
                                <div className="mt-3">
                                    <NavLink to="" className="btn-get-started">Let's Start</NavLink>                              
                                </div>
                            </div>
                        
                            <div className="col-lg-6 order-1 order-lg-2 header-img">                           
                                <img src= {web} className="img-fluid animated " alt= "home img" />                              
                            </div>
                        </div> 
                        
                    </div>     
                {/* </div> */}
            </div>
          </section>
      </>
    )
}

export default Home;
