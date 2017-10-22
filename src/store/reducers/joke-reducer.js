import { FETCH_JOKE } from '../constants/constants.js';

const initialState = {
    joke: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
    case FETCH_JOKE:
        const newState = state;
        newState.joke = action.payload.joke;
        return newState;
    default:
        return state;
    }
};
