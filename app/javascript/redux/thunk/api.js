import axios from 'axios';
import _ from 'lodash';

import {
    fetchGreeting,
    fetchGreetingSuccess,
    fetchGreetingFailure,
} from '../actions/action';

const baseURL = 'http://127.0.0.1:3000/api/v1/greetings'

export const fetchGreetings = () => (dispatch) => {
    axios
    .get(baseURL)
    .then((res) =>{
        const greets = res.data;
        console.log('API =>', greets)
        dispatch(fetchGreetingSuccess(greets))
    })
    .catch((err) => {
        dispatch(fetchGreetingFailure(err.message));
    });
}