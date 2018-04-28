import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMeetup, setUsers, goOnMeetup } from '../actions';
import { firebase, db, auth } from '../firebase';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: '',
      description: '',
      users: [],
    }
  }

  handleAddMeetup(e) {
    e.preventDefault()
    this.props.addMeetup(this.state.place, this.state.description, firebase.auth.currentUser.displayName)
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
                      <div key={index} className='single-meetup'>
                        <p>Location: {item.place}</p>
                        <p>Discription: {item.description}</p>
                        <p>Author: {item.author}</p>
                        <p>Members: {item.members}</p>
                        {console.log(item.members.includes(firebase.auth.currentUser.displayName))}
                        {
                          item.members.includes(firebase.auth.currentUser.displayName)
                          ?<div>In list</div>
                          :<button onClick={()=>this.props.goOnMeetup(firebase.auth.currentUser.displayName, index)}>Go</button>
                          
                        }
                      </div>
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
  return bindActionCreators({ addMeetup, setUsers, goOnMeetup }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);