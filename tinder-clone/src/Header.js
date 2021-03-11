import React from 'react'
import './Header.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from "@material-ui/icons/Forum";
function Header() {
    return (
        <div className="header">
           <IconButton>
           <AccountCircleIcon fontSize="large" className="header__icon"/>
           </IconButton>
           <img 
           className="header__logo"
           src="https://i.pcmag.com/imagery/reviews/02ibIXDUJNJ3V7KL8jhUNFf-7.1569480464.fit_scale.size_1028x578.png"
           alt=""
           />
           <IconButton>
             <ForumIcon fontSize="large" className="header__icon"/>
           </IconButton>
        </div>
    )
}

export default Header
