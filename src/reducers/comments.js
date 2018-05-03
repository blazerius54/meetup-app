import comments from '../data/comments'
import { ADD_MEETUP, DELETE_MEETUP } from '../consts'

const initialState = comments

export function commentsReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_MEETUP: {
            return [
                ...state, 
                {
                    author: 'Vova 2',
                    comment: 'Lets,go 2'
                }
            ];
        }
        case DELETE_MEETUP: {
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index+1)
            ]
        }
        default: return state;
    }
}
