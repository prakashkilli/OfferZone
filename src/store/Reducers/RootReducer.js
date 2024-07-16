import {combineReducers} from '@reduxjs/toolkit';
import UserReducer from '../UserSlice';

const reducer = combineReducers({
    user:UserReducer,
});

export default reducer;