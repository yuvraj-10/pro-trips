import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'
import {
       faHome,
       faCalendarPlus,
       faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navigation(){  //making link to various routes
       return(<div className="symbols">
       <div class = "HELLO"><Link to="/" ><FontAwesomeIcon icon={faHome} style={{ fontSize: '35px', color:'white'}} /></Link></div>
       <div class = "HELLO"><Link to="/add" > <FontAwesomeIcon icon={faCalendarPlus} style={{ fontSize: '35px' , color:'white'}} /></Link></div>
       <div class = "HELLO"><Link to="/list" > <FontAwesomeIcon icon={faCalendarAlt} style={{ fontSize: '35px', color:'white' }} /></Link></div>
       </div>)
}
export default Navigation;


// import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//        faHome,
//        faCalendarPlus,
//        faCalendarAlt,
// } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';

// export default class Navigation extends Component {
//        render() {
//               return (
//                      <div className="symbols">
//                             <div className="hello">
//                                    <Link to="/">
//                                           <FontAwesomeIcon icon={faHome} style={{ fontSize: '35px' }} />
//                                    </Link>
//                             </div><br></br>
//                             <div className="hello">
//                                    <Link to="/add">
//                                           <FontAwesomeIcon icon={faCalendarPlus} style={{ fontSize: '35px' }} />
//                                    </Link></div><br></br>
//                             <div className="hello">
//                                    <Link to="/list">
//                                           <FontAwesomeIcon icon={faCalendarAlt} style={{ fontSize: '35px' }} />
//                                    </Link>
//                             </div>
//                      </div>
//               );
//        }
// }