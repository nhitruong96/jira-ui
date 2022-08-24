import {applyMiddleware, combineReducers, createStore} from 'redux';
import reduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
    //reducer 
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;