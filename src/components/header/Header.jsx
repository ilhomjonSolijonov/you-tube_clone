import React from 'react'
import './Header.scss'
// icons
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
// imgs
import avatar from '../../assets/imgs/avatar.png'
import { Avatar } from '@mui/material';


const Header = () => {
  return (
    <div className='header'>
        <div className='header__left'>
            <MenuIcon/>
            <img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="" />
        </div>
        <div className='header__input'>
            <input placeholder='Search' type="text" />
            <SearchIcon className='header__inputButton'/>
        </div>
        <div className='header__icons'>
            <VideoCallIcon className='header__icon'/>
            <AppsIcon className='header__icon'/>
            <NotificationsIcon className='header__icon'/>
            <Avatar src={avatar} alt="not-found" />
        </div>
    </div>
  )
}

export default Header
