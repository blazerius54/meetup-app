import { ADD_MEETUP, USERS_SET, TOGGLE_MEETUP, DELETE_MEETUP } from '../consts';

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
        type: USERS_SET,
        users
    }
    return action
}

export const toggleMeetup = (user, index) => {
    const action = {
        type: TOGGLE_MEETUP,
        user,
        index
    }
    return action
}

export const deleteMeetup = (index) => {
    const action = {
        type: DELETE_MEETUP,
        index
    }
    return action
}