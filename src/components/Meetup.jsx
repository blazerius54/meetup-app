import React, { Component } from 'react';
import { firebase } from '../firebase';

const Meetup = (props) => {
    const { item, index, isGoing, handleToggleMeetup, handleDeleteMeetup, isAuthor } = props;
    console.log(isAuthor)
    return (
        <div className='single-meetup'>
            <p>Location: {item.place}</p>
            <p>Discription: {item.description}</p>
            <p>Author: {item.author}</p>
            {
                item.members.map((member, index) => {
                    return <span key={index}>{member}</span>
                })
            }
            {
                isGoing
                ? <button onClick={() => handleToggleMeetup(index)}>Decline</button>
                : <button onClick={() => handleToggleMeetup(index)}>Go</button>
            }
            {
                isAuthor
                ? <button onClick={() => handleDeleteMeetup(index)}>Delete</button>
                : null
            }
        </div>
    )
}

export default Meetup