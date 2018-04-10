import { ADD_MEETUP } from '../consts';

export const addMeetup = (place, description, author) => {
    const action = {
        type: ADD_MEETUP,
        place,
        description,
        author,
        id: Math.random()
    }
    console.log(action)
    return action
}

export const setUsers = (users) => {
    const action = {
        type: 'USERS_SET', users
    }
    return action
}