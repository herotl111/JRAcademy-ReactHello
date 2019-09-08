import {GET_WELCOME, GET_WELCOME_SUCCESS, GET_WELCOME_FAIL} from '../actions/welcomeAction';
 
const defaultState = {
    welcomeList: [],
    isFetching: false,
}

const welcome = (state=defaultState, action) => {
    if(action.type === GET_WELCOME) {
        return Object.assign({},state, {
            isFetching:true,
        });
    } else if (action.type === GET_WELCOME_SUCCESS) {
        return Object.assign({},state, {
            isFetching:false,
            welcomeList: action.payload.welcomeList,
        });
    } else if (action.type === GET_WELCOME_FAIL) {
        return Object.assign({},state, {
            isFetching:false,
        });
    }
    return state;
}

export default welcome;