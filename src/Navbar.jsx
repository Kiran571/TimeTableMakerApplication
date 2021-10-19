import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <>

        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">

                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand" to="#">TimeTableMaker</NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                </li>

                                <li className="nav-item">
                                <NavLink activeClassName="menu_active" className="nav-link" to="/about">About </NavLink>
                                </li>

                                <li className="nav-item">
                                <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
                                </li>

                                <li className="nav-item">
                                <NavLink activeClassName="menu_active" className="nav-link" to="/feedback">Feedback</NavLink>
                                </li>
                                
                            </ul>
                            <form classNameName="d-flex">
                                <button type="button" className="btn btn-info">Login</button>
                                <button classNameName="btn btn-style btn-style-border" type="submit">Sign Up</button>
                             </form>   
                            </div>
                            </div>
                            </nav>
                            </div>
                        </div>
                        </div>
        </>
    );
};

export default Navbar;


























//Old Navbar

//     const [show, setShow] =useState(false);


//     return (
//         <>
//             <section classNameName="navbar-bg">
//                 <nav classNameName="navbar navbar-expand-lg navbar-light">
//                     <div classNameName="container">
//                         <NavLink classNameName="navbar-brand" to="/">Time Table Maker</NavLink>

//                         <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
//                         onClick={() => setShow(!show)}>
//                         <span classNameName="navbar-toggler-icon"></span>
//                         </button>
                        
//                         <div classNameName={`collapse navbar-collapse ${show ? "show" : ""}`} >
//                         <ul classNameName="navbar-nav ms-auto mb-2 mb-lg-0">
//                             {/* <li classNameName="nav-item">
//                             <a classNameName="nav-link active" aria-current="page" to="#">Home</a>
//                             </li> */}
//                             <li classNameName="nav-item">
//                             <NavLink activeclassNameName='menu_active' exact classNameName="nav-link active" to="/">Home</NavLink>
//                             </li>
//                             <li classNameName="nav-item">
//                             <NavLink activeclassNameName='menu_active' exact classNameName="nav-link active" to="/contact">Contact</NavLink>
//                             </li>
//                             <li classNameName="nav-item">
//                             <NavLink activeclassNameName='menu_active' exact classNameName="nav-link active" to="/about">About us</NavLink>
//                             </li>
//                             <li classNameName="nav-item">
//                             <NavLink activeclassNameName='menu_active' exact classNameName="nav-link active" to="/feedback">Feedback</NavLink>
//                             </li>
                            
                           
//                         </ul>
//                         <form classNameName="d-flex">
//                             <button classNameName="btn btn-style" type="submit">Login</button>
//                             <button classNameName="btn btn-style btn-style-border" type="submit">Sign Up</button>
//                         </form>
//                         </div>
//                     </div>
//                 </nav>
//             </section>
//         </>       
//     );
// };

//Basic

// <div className="container-fluid nav_bg">
// <div className="row">
//     <div className="col-10 mx-auto">
        
//     </div>
// </div>
// </div>





