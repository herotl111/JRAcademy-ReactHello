import axios from 'axios';

export const GET_WELCOME = 'GET_WELCOME';
export const GET_WELCOME_SUCCESS = 'GET_WELCOME_SUCCESS';
export const GET_WELCOME_FAIL = 'GET_WELCOME_FAIL';

export function getWelcome(){
    return {
        type: GET_WELCOME
    };
}

export function getWelcomeFail(){
    return {
        type: GET_WELCOME_FAIL
    };
}

export function getWelcomeSuccess(welcomeList) {
    return {
        type: GET_WELCOME_SUCCESS,
        payload: {welcomeList},
    };
}

//1. dispatch getWelcome
//2. dispatch getWelcomeSuccess
export function getWelcomeAsync() {
    return (dispatch) => {
        dispatch(getWelcome());
        return axios.get('https://jr-posts.herokuapp.com/v1/posts')
        .then(res=> {
            dispatch(getWelcomeSuccess(res.data));
        })
        .catch(err => dispatch(getWelcomeFail()));
    };
}

export function postWelcomeAsync() {}
    