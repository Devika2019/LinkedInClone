import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import  BusinessCenterIcon from '@material-ui/icons/Business';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { Notifications } from '@material-ui/icons';
import ChatIcon from '@material-ui/icons/Chat'
import HeaderOptions from './HeaderOptions';
import { logout } from './features/userSlice';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';

function Header() {
const dispatch = useDispatch();
  const logOutofApp =()=>{
    dispatch(logout());
    auth.signOut();
  }
  return (
    <div className='header'>
      <div className='header__left'>
        <img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1657860471~hmac=395385390edbb0f8e86b4a2f7d68cb1c" alt='' />
        <div className='header__search'>
          <SearchIcon />
          <input type="text" placeholder='search' />
        </div>
      </div>
      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Networks" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={ChatIcon} title="Messaging" />
        <HeaderOptions Icon={Notifications} title="Notifications" />
        <HeaderOptions onClick={logOutofApp} avatar="https://www.w3schools.com/howto/img_avatar2.png" title="me" />
      </div>

    </div>
  )
}

export default Header
