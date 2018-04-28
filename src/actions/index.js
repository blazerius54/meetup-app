import { ADD_MEETUP, USERS_SET, GO_ON_MEETUP } from '../consts';

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

export const goOnMeetup = (user, index) => {
    const action = {
        type: GO_ON_MEETUP,
        user,
        index
    }
    console.log(action)
    return action
}