import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMeetup, setUsers, toggleMeetup, deleteMeetup } from '../actions';
import { firebase, db, auth } from '../firebase';
import Meetup from './Meetup';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: '',
      description: '',
      error: ''
    }
  }


  handleAddMeetup(e) {
    e.preventDefault()
    if(this.state.place === '' || this.state.description === '' || firebase.auth.currentUser.displayName === '') {
      this.setState({
        error: 'Please, enter correct info'
      });
    } else {
      this.setState({
        place: '',
        description: '',
        error: '',
      });
      this.inputPlace.value = '';
      this.inputDescription.value = '';
      this.props.addMeetup(this.state.place, this.state.description, firebase.auth.currentUser.displayName);
    }
  }

  handleToggleMeetup (index) {
    this.props.toggleMeetup(firebase.auth.currentUser.displayName, index)
  }

  render() {
    const { authUser, deleteMeetup} = this.props;
    const { error } = this.state;
    return (
      <div className='main-page'>
        {
          this.props.authUser ?

            <div>
              <form onSubmit={(e) => this.handleAddMeetup(e)}>
                <input placeholder='location'
                className={error?'danger':null}
                ref={ref => {
                  this.inputPlace = ref;
                }}
                onChange={e => this.setState({ place: e.target.value })} type="text" />
                <input placeholder='description'
                className={this.state.error?'danger':null}
                ref={ref => {
                  this.inputDescription = ref;
                }}
                onChange={e => this.setState({ description: e.target.value })} type="text" />
                <button type="submit">
                  Create Meetup
                </button>
                {
                  error && <p>{error}</p> 
                }
              </form>
              <div className='meetups-container'>
                {
                  this.props.meetUps.map((item, index) => {
                    return (
                      <Meetup key={index} index={index} item={item} 
                      isGoing={item.members.includes(authUser.displayName)}
                      handleToggleMeetup={this.handleToggleMeetup.bind(this)}
                      handleDeleteMeetup={deleteMeetup.bind(this)}
                      isAuthor={item.author === authUser.displayName}
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
  return bindActionCreators({ addMeetup, setUsers, toggleMeetup, deleteMeetup }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);