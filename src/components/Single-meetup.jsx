import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMeetup, setUsers, toggleMeetup, deleteMeetup } from '../actions';


class SingleMeetup extends Component {

  render() {
    const index = this.props.match.params.name;
    const meetup = this.props.meetUps[index]
    console.log(index)
    return (
      <div>
          {meetup.place}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    // authUser: state.sessionState.authUser,
    meetUps: state.meetUps,
    // users: state.sessionState.users
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addMeetup, setUsers, toggleMeetup, deleteMeetup }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleMeetup);