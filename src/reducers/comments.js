import comments from '../data/comments'
import { ADD_MEETUP, DELETE_MEETUP, ADD_COMMENT } from '../consts'

const initialState = comments

export function commentsReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_MEETUP: {
            return [...state, [] ];
        }
        case DELETE_MEETUP: {
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index+1)
            ]
        }
        case ADD_COMMENT: {
            return [
                ...state.slice(0, action.index),
                state[action.index] = [
                    ...state[action.index], { author: action.author, comment: action.comment}
                ],
                ...state.slice(action.index+1)
            ]
        }
        default: return state;
    }
}
