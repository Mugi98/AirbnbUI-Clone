import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import {Link} from 'react-router-dom';
function Header() {
    return (
        <div className='header'>
            <Link to = '/'>
            <img className="header-icon" src="https://i.pinimg.com/564x/a1/f8/39/a1f839553c1f57e2298e44df771ca6aa.jpg" alt=""/>
            </Link>
                <div className="header-center">
                <input type='text' />
                <SearchIcon />
            </div>
            <div className='header-right'>
                <p>Become a Host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
