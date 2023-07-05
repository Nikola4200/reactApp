import React from 'react'
import { Link } from 'react-router-dom'
 
 

function Navbar() {
 
  return (
    <div >
     
        <div className="topnav">

            <Link to="/"   >Početna strana</Link>   
            <Link to="/kontakt"   >Kontakt strana</Link>   
            <Link to="/kursevi"   >Kursevi</Link>   

       
      
 
        </div>
    </div>
  );
}

export default Navbar;