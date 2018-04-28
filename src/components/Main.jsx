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

  handleToggleMeetup (user, index) {
    // console.log(user, index)
    this.props.toggleMeetup(user, index)
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
                      // <div key={index} className='single-meetup'>
                      //   <p>Location: {item.place}</p>
                      //   <p>Discription: {item.description}</p>
                      //   <p>Author: {item.author}</p>
                      //   {/* <p>Members: {item.members}</p> */}
                      //   {item.members.map((member, index)=>{
                      //     return <span key={index}>{member}</span>
                      //   })}
                      //   {
                      //     item.members.includes(firebase.auth.currentUser.displayName)
                      //     ?<button onClick={()=>this.props.toggleMeetup(firebase.auth.currentUser.displayName, index)}>Decline</button>
                      //     :<button onClick={()=>this.props.toggleMeetup(firebase.auth.currentUser.displayName, index)}>Go</button>
                      //   }
                      // </div>
                      <Meetup key={index} index={index} item={item} isAuthor={item.members.includes(firebase.auth.currentUser.displayName)}
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