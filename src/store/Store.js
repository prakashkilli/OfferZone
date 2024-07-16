import {configureStore} from '@reduxjs/toolkit';
import reducer from './Reducers/RootReducer';

const store = configureStore({
       reducer:reducer,

});
export default store;