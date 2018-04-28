import React, { Component } from 'react';
import { firebase } from '../firebase';

const Meetup = (props) => {
    const { item, index, isGoing, handleToggleMeetup } = props;
    return (
        <div className='single-meetup'>
            <p>Location: {this.props}</p>
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
        </div>
    )
}

export default Meetup