import { FETCH_JOKE } from '../constants/constants.js';
import axios from 'axios';

export const fetchNewJoke = () => dispatch => {
    axios.get('http://api.icndb.com/jokes/random').then(res => {
        dispatch({
            type: FETCH_JOKE,
            payload: {
                joke: res.data.value.joke
            }
        });
    });
};
