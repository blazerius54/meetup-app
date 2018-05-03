import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMeetup, setUsers, toggleMeetup, deleteMeetup, addComment } from '../actions';
import Meetup from './Meetup';

class SingleMeetup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
        }
    }

    handleToggleMeetup(index) {    
        this.props.toggleMeetup(this.props.authUser.displayName, index);
    }

    handleAddComment(e, index) {
        e.preventDefault();
        this.props.addComment(this.props.authUser.displayName, this.state.comment, index)
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
                {
                    comments[index].map((item, index)=>{
                        return <p key={index}>{item.author}: {item.comment}</p>
                    })
                }
                <form onSubmit={(e) => this.handleAddComment(e, index)}>
                    <input type="text"
                    placeholder='Add your comment'
                    onChange={(e)=>{this.setState({comment: e.target.value})}}
                    />
                    <button type='submit'>
                        Add Comment
                    </button>
                </form>
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
    return bindActionCreators({ addMeetup, setUsers, toggleMeetup, deleteMeetup, addComment }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleMeetup);