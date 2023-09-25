import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css';

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => {
      return(  <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>);
    }
    return (
        <div className="sidebar">
            <div className='sidebar__top'>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" alt="" />
                <Avatar src={user.photoUrl?user.photoUrl:''} className='sidebar__avatar'>{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>who viewed you</p>
                    <p className='sidebar_statnumber'>25435</p>
                </div>
                <div className='sidebar__stat'>
                    <p>views on post</p>
                    <p className='sidebar_statnumber'>25435</p>
                </div>

            </div>
            <div className='sidebar__bottom'>
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('reactjs')}
                {recentItem('reactjs')}
                {recentItem('reactjs')}
            </div>
        </div>
    )
}

export default Sidebar

