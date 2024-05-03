import React, { useState } from 'react';
import "./SlideOut.css"
import {Link} from "react-router-dom"

const SlideOutMenuContainer = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div id="slide_nav">
        <p id="slide_nav_button" onClick={() => setVisible(!visible)}>☰</p>
      </div>
      <div>
        <ul id="slide_menu" style={{ display: (visible ? 'block' : 'none') }}>
        <li><a href="#">Dashboard</a></li>
          <li><a href="#">All rides</a></li>
          <li><a href="#">Add Driver</a></li>
          <li><a href="#">Add Vehicle</a></li>
          <li><a href="#">Earnings</a></li>
          <li><a href="#">Complaints</a></li>
          <li><a href="#">Terms and Conditions</a></li>
          <li><a href="#">Policy</a></li>
          <li><a href="#">Log Out</a></li>
 
 
 
 
 
        </ul>
      </div>
    </div>
  );
};

export default SlideOutMenuContainer;