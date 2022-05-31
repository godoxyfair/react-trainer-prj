import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/posts">Stickers</Link>
            </div>
        </div>
    );
};

export default Navbar;