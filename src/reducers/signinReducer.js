import { combineReducers } from 'redux';
import * as types from '../constants/actionTypes';

const initialState = {
    username: '',
    email: '',
    password: '',
    fullName: '',
};

const signinReducer = (state = initialState, action) => {
    let updatedState = Object.assign({}, initialState);
    switch(action.type) { 
        case types.ENTER_USERNAME:
            return {
                ...state,
                username: action.payload,
            };

        case types.ENTER_PASSWORD:
            return { 
                ...state,
                password: action.payload,
            }

        default:
            return state;
    }
}

export default combineReducers({
    signin: signinReducer,
})