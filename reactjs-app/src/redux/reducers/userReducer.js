import {
    GET_ALL_USER,
    GET_ALL_USER_SUCCESS, 
    GET_USER_BY_ID,
    CREATE_USER,
    UPDATE_USER,
    DELETE_USER
} from './../type';

const initialState = {
    users: []
};
const userReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_ALL_USER_SUCCESS:
            console.log("Payload DATA:", payload); 
            return {
                users: payload
            };
        case GET_USER_BY_ID:
            console.log("Payload ID:", payload[0]);
            return payload;
        default:
            return state;
    }
}

export default userReducer;