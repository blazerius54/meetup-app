import { ADD_MEETUP, USERS_SET, TOGGLE_MEETUP, DELETE_MEETUP, ADD_COMMENT } from '../consts';

export const addMeetup = (place, description, author, date, img) => {
    const action = {
        type: ADD_MEETUP,
        place,
        description,
        author,
        date,
        img,
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

export const addComment = (author, comment, index) => {
    const action = {
        type: ADD_COMMENT,
        author,
        comment,
        index
    }
    console.log(action)
    return action
}