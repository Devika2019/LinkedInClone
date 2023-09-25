import { Avatar } from '@material-ui/core'
import React ,{forwardRef}from 'react';
import InputOptions from './InputOptions';
import './Post.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatIcon from '@material-ui/icons/Chat';
import SendIcon from '@material-ui/icons/Send';
import ShareIcon from '@material-ui/icons/Share';
const Post =forwardRef(({name,description, message,photoURL},ref)=> {
    return (
        <div ref={ref}className='post'>
            <div className='post__header'>
                <Avatar src={photoURL} >{name[0]}</Avatar>
                <div className='post__info'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
                </div>
                <div className='post__body'>
                    <p>
                        {message}
                    </p>
                </div>
                <div className='post__button'>
                    <InputOptions Icon={ThumbUpAltIcon} title="like" color="gray" />
                    <InputOptions Icon={ChatIcon} title="comment" color="gray" />
                    <InputOptions Icon={ShareIcon} title="share" color="gray" />
                    <InputOptions Icon={SendIcon} title="send" color="gray" />

            </div>
                </div>
        
    )
});

export default Post
