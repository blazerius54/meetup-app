import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMeetup, setUsers, toggleMeetup } from '../actions';
import { firebase, db, auth } from '../firebase';

class Meetup extends Component {

    render() {
        const { item, index, isAuthor } = this.props;
        console.log(isAuthor)
        return (
            <div className='single-meetup'>
                <p>Location: {item.place}</p>
                <p>Discription: {item.description}</p>
                <p>Author: {item.author}</p>
                {item.members.map((member, index) => {
                    return <span key={index}>{member}</span>
                })}
                {
                    isAuthor
                    ? <button onClick={() => this.props.handleToggleMeetup(firebase.auth.currentUser.displayName, index)}>Decline</button>
                    : <button onClick={() => this.props.handleToggleMeetup(firebase.auth.currentUser.displayName, index)}>Go</button>
                }
            </div>

        )
    }
}


export default Meetup;