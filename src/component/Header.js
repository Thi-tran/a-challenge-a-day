import React, { useState, useEffect } from 'react';
import fire from '../img/fire.png';
const Header = () => (
    <div className="App">
        <h1>A Challenge A Day</h1>
        <h4><img src={fire} alt={fire} className="icon"/><span className="sub-title"> Challenge yourself to the ultimate </span> <img src={fire} alt={fire} className="icon"/></h4>
    </div>
)

export default Header;