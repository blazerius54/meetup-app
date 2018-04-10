import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firebase } from '../firebase/index';
import { auth } from '../firebase';
import { AUTH_USER_SET } from '../consts';

class Navigation extends Component {
  componentDidMount() {
    const { onSetAuthUser } = this.props;

    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? onSetAuthUser(authUser)
        : onSetAuthUser(null);
    });
  }
  
  render() {
    const NavigationAuth = () =>
      <ul className='nav-main'>
        <li><Link className='categ-title' to={process.env.PUBLIC_URL + '/'}> Main </Link></li>
        <li>{this.props.authUser.email}</li>
        {/* <li><SignOutButton /></li> */}
        <li>
          <button
          type="button"
          onClick={auth.doSignOut}
        >
            Sign Out
          </button>
        </li>
      </ul>

    const NavigationNonAuth = () =>
      <ul className='nav-main'>
        <li><Link className='categ-title' to={process.env.PUBLIC_URL + '/SignIn'}> Sign In </Link></li>
        <li><Link className='categ-title' to={process.env.PUBLIC_URL + '/SignUp'}> Sign Up </Link></li>
      </ul>
    
    return (
      <div>
          {
            this.props.authUser 
            ? <NavigationAuth />    
            : <NavigationNonAuth />
          }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authUser: state.sessionState.authUser
  }
};

const mapDispatchToProps = (dispatch) => ({
  onSetAuthUser: (authUser) => dispatch({ type: AUTH_USER_SET, authUser }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);