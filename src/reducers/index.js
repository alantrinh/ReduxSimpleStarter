import { combineReducers } from 'redux';
import RainfallReducer from './reducer_rainfall';

const rootReducer = combineReducers({
    rainfall: RainfallReducer
});

export default rootReducer;
