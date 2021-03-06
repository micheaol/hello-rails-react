import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import greetingReducer from '../reducers/greeting';


const reducer = combineReducers({
    message: greetingReducer,
  });

const store = createStore(reducer, applyMiddleware(logger, thunk))

export default store;