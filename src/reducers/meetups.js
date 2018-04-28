import { ADD_MEETUP, GO_ON_MEETUP } from '../consts'
import meetUps from '../data'

const initialState = meetUps

export function meetupReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_MEETUP: {
            return [
                ...state, 
                { place: action.place, description: action.description, id: action.id, author: action.author, members: [action.author] }
            ];
        }
        case GO_ON_MEETUP: {
            return [
                ...state.slice(0, action.index),
                state[action.index] = {
                    ...state[action.index],
                    members: [...state[action.index].members, action.user]
                },
                ...state.slice(action.index+1),
            ]
        }
        default: return state;
    }
}