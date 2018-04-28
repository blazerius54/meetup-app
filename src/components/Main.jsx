import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMeetup, setUsers, toggleMeetup } from '../actions';
import { firebase, db, auth } from '../firebase';
import Meetup from './Meetup';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: '',
      description: '',
      users: [],
      isAuthor: null
    }
  }

  // componentDidMount () {
  //   this.setState({
  //     isAuthor: 
  //   })
  // }

  handleAddMeetup(e) {
    e.preventDefault()
    this.props.addMeetup(this.state.place, this.state.description, firebase.auth.currentUser.displayName)
  }

  handleToggleMeetup (index) {
    this.props.toggleMeetup(firebase.auth.currentUser.displayName, index)
  }
  render() {
    
    return (
      <div className='main-page'>
        {
          this.props.authUser ?

            <div>
              <form onSubmit={(e) => this.handleAddMeetup(e)}>
                <input placeholder='location' onChange={e => this.setState({ place: e.target.value })} type="text" />
                <input placeholder='description' onChange={e => this.setState({ description: e.target.value })} type="text" />
                <button type="submit">
                  Create Meetup
                </button>
              </form>
              <div className='meetups-container'>
                {
                  this.props.meetUps.map((item, index) => {
                    return (
                      <Meetup key={index} index={index} item={item} isGoing={item.members.includes(firebase.auth.currentUser.displayName)}
                      handleToggleMeetup = {this.handleToggleMeetup.bind(this)}
                      />
                    )
                  })
                }
              </div>
            </div>
            :
            null
        }


      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authUser: state.sessionState.authUser,
    meetUps: state.meetUps,
    users: state.sessionState.users
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addMeetup, setUsers, toggleMeetup }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);