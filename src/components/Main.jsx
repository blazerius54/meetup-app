import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMeetup, setUsers } from '../actions';
import { firebase, db } from '../firebase';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: '',
      description: '',
      users: [],
      author: ''
    }
  }

  handleAddMeetup(e) {
    e.preventDefault()
    this.props.addMeetup(this.state.place, this.state.description, this.state.author)
    // console.log(this.props.authUser.uid)
    this.readAuthor()
  }

  readAuthor() {
    const { setUsers } = this.props;

    db.onceGetUsers().then(snapshot =>
      setUsers(snapshot.val())
    );

    console.log(this.props.users)

    for(let i in this.props.users) {
      if(i === this.props.authUser.uid) {
        this.setState({
          author: this.props.users[i].username
        })
        console.log(this.state.author)
      }
    }
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
                        <p>Location: {item.location}</p>
                        <p>Discription: {item.description}</p>
                        <p>{item.author}</p>
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
  console.log(state)
  return {
    authUser: state.sessionState.authUser,
    meetUps: state.meetUps,
    users: state.sessionState.users
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addMeetup, setUsers }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);