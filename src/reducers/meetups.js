import { ADD_MEETUP, TOGGLE_MEETUP } from '../consts'
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
        case TOGGLE_MEETUP: {
            state[action.index].members.includes(action.user)?
                 state = [
                    ...state.slice(0, action.index),
                    state[action.index] = {
                        ...state[action.index],
                        members: state[action.index].members.filter(member=>{
                            return member !== action.user
                        })
                    },
                    ...state.slice(action.index+1),
                ]
             : 
                state = [
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