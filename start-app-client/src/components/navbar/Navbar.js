import React from 'react';
import { Link } from 'react-router-dom';

const navBar = ()=>{
    return (
        <nav>
            <ul>
                <li><Link to="/projects"> Projects </Link> </li>
            </ul>
        </nav>
    );
};

export default navBar;