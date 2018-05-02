import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Meetup extends Component {
    render() {
        const { item, index, isGoing, handleToggleMeetup, handleDeleteMeetup, isAuthor } = this.props;
        return (
            <div className='single-meetup'>
                <Link to={process.env.PUBLIC_URL + '/place-' + index}>
                    <p>Location: {item.place}</p>
                </Link>
                <p>Discription: {item.description}</p>
                <p>Author: {item.author}</p>
                {
                    item.members.map((member, index) => {
                        return <span key={index}>{member}</span>
                    })
                }
                {
                    isGoing
                        ? <button onClick={() => handleToggleMeetup(index)}>Decline</button>
                        : <button onClick={() => handleToggleMeetup(index)}>Go</button>
                }
                {
                    isAuthor
                        ? <button onClick={() => {
                            this.props.history.push('/');
                            handleDeleteMeetup(index)
                        }}>Delete</button>
                        : null
                }
            </div>
        )
    }
}

export default withRouter(Meetup)