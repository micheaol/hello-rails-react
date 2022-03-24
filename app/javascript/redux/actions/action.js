export const FETCH_GREETING = 'FETCH_GREETING_REQUEST';
export const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';
export const FETCH_GREETING_FAILURE = 'FETCH_GREETING_FAILURE';

export const fetchGreeting = (payload) => ({
    type: FETCH_GREETING,
    payload
});

export const fetchGreetingFailure = (payload) => ({
    type: FETCH_GREETING_FAILURE,
    payload
});

export const fetchGreetingSuccess = (payload) => ({
    type: FETCH_GREETING_SUCCESS,
    payload
});