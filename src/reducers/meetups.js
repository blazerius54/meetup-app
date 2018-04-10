import { ADD_MEETUP } from '../consts'
import meetUps from '../data'

const initialState = meetUps

export function meetupReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_MEETUP: {
            return [
                ...state, {place: action.place, description: action.description, id: action.id, author: action.author}
            ];
        }
        default: return state;
    }
}