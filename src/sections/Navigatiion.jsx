import React from 'react';
import './Navigation.css';

function Navigatiion() {
    return (
        <div>
            <nav className="navigation-menu">
                <ul className="menus">
                    <li className="nav-menu">Home</li>
                    <li className="nav-menu">African History</li>
                    <li className="nav-menu">African Literature</li>
                    <li className="nav-menu">Black Achievers</li>
                    <li className="nav-menu">About Us</li>
                </ul>

                <div className="search-field">
                    <input type="text" name="search" id="search" placeholder='Search' className='search-input' />

                    <box-icon name='search' size="xxlg"></box-icon>

                </div>
            </nav>
        </div>
    )
}

export default Navigatiion
