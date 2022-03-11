import {GET_ALL_USER} from './../type';

export const getAllUser = () => {
    return dispatch => {
        fetch("http://localhost:9000/api/v1/user")
        .then( res => {
            dispatch({
                type: GET_ALL_USER,
                payload: res.data
            });
        })
        .catch( err => console.log(err))
    }
};