import React from 'react';
import "./Header.css";
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <Avatar
                    className="header_avatar"
                    alt="hello"
                    
                    src=""
                />
                {/* Avatars for logged in user */}
                <AccessTimeIcon />
                {/* Time icon */}
            </div>
            <div className="header__search">
                <SearchIcon />
                {/* search icon */}
                <input placeholder="search slack"/>
                {/* input */}
            </div>
            <div className="header__right">
                <HelpOutlineIcon />
                {/* help icon */}
            </div>
        </div>
    )
}

export default Header
