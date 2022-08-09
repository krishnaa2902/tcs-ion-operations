import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import React from "react";
import {Link} from 'react-router-dom';
import '../App.css';


function ColorSchemesExample() {
  return (
    <div className="navpos">



      <ul>
          <li>
            <Link to="/"> Dashboard</Link>
          </li>
  
          <li>
            <Link to="/inventory">Inventory</Link>
          </li>
  
          <li> 
            <Link to="/sales">Sales</Link>
          </li>
  
          <li>
            <Link to="/purchases">Purchases</Link>
          </li>

          

          <h3 className="title">OPERATIONS MANAGEMENT</h3>
        </ul>

        

    </div>
  );
}

export default ColorSchemesExample;