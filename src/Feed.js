import React, { useEffect, useState } from 'react';
import './Feed.css';
import CreateIcon from "@material-ui/icons/Create";
import InputOptions from './InputOptions';
import ImageIcon from '@material-ui/icons/Image';
import Event from '@material-ui/icons/Event';
import Camera from '@material-ui/icons/Camera';
import Book from '@material-ui/icons/Book'
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useSelector } from 'react-redux';
import {  selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const user = useSelector(selectUser);

    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState();

    useEffect(() => {
        db.collection("posts").orderBy("timestamp","desc").
        onSnapshot((snapshot) =>
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            ));
    },[]);
    const sendPost = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: '',
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput("");
    }
    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input'>

                    <CreateIcon />
                    <form>
                        <input value={input} placeholder='Start a post' onChange={e => setInput(e.target.value)} type='text' />
                        <button onClick={sendPost} type='Submit'>Send</button>
                    </form>
                </div>
                <div className='feed__inputOptions'>
                    <InputOptions Icon={ImageIcon} title='photo' color='#70B5F9' />
                    <InputOptions Icon={Camera} title='video' color='#70B5F9' />
                    <InputOptions Icon={Event} title='event' color='#70B5F9' />
                    <InputOptions Icon={Book} title='write article' color='#70B5F9' />
                </div>
            </div>
            <FlipMove>
            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (<Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
            />))}
</FlipMove>
        </div>
    )
}

export default Feed
