import {FETCH_RAINFALL} from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_RAINFALL:
            return [action.payload.data, ...state]; //return state.concat([action.payload.data]);
    }
    return state;
}
