import {
    FETCH_GREETING,
    FETCH_GREETING_FAILURE,
    FETCH_GREETING_SUCCESS
} from '../actions/action';

const initialState = [];

const greetingReducer = (state = initialState, {type, payload }) => {
    switch (type) {
        case FETCH_GREETING_SUCCESS:
            return payload;
            break;
        case FETCH_GREETING_FAILURE:
            return state
            break;
        default:
            return state
            break;
    }
}

export default greetingReducer;