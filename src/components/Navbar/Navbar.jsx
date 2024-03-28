import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/navbar.css';

const Navbar = () => {
    return (
        
            <nav className="sticky-nav">
                <div className="container nav_container">
                    <Link to="/" className='logo'>
                        <p className='f1'>F1</p>
                        <p className='peeps'>peeps</p>
                    </Link>
             
                </div>
               
            </nav>
            
           

    );
};

export default Navbar;
