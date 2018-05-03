import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMeetup, setUsers, toggleMeetup, deleteMeetup } from '../actions';
import Meetup from './Meetup';

class SingleMeetup extends Component {

    handleToggleMeetup(index) {
        
        this.props.toggleMeetup(this.props.authUser.displayName, index);
    }

    render() {
        const index = this.props.match.params.name;
        const meetup = this.props.meetUps[index];
        const { authUser, deleteMeetup, comments } = this.props;
        
        return (
            <div className='meetups-container-column'>
                <Meetup key={index} index={index} item={meetup}
                handleToggleMeetup={this.handleToggleMeetup.bind(this)}
                isGoing={meetup.members.includes(authUser.displayName)}
                handleDeleteMeetup={deleteMeetup.bind(this)}
                isAuthor={meetup.author === authUser.displayName}
                />
                <p>{comments[index].author}: {comments[index].comment}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        authUser: state.sessionState.authUser,
        meetUps: state.meetUps,
        // users: state.sessionState.users
        comments: state.comments
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addMeetup, setUsers, toggleMeetup, deleteMeetup }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleMeetup);