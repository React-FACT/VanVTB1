import {
    GET_ALL_USER, 
    GET_ALL_USER_SUCCESS,
    GET_USER_BY_ID,
    CREATE_USER,
    UPDATE_USER,
    DELETE_USER
} from './../type';

export const getAllUser = () => {
    return {
        type: GET_ALL_USER
    }
};

export const receiveAllUser = () => (payload) => {
    return {
        type: GET_ALL_USER_SUCCESS,
        payload
    }
};

// export const getAllUser = () => async (dispatch) => {
//     try {
//         const result = await fetchAllUser();
//         // console.log("Result:", result.data);
//         dispatch({
//             type: GET_ALL_USER,
//             payload: result.data
//         })
//     } catch (err) {
//         console.log(err)
//     }
// };

// export const receiveAllUser = () => async (dispatch) => {
//     try {
//         const result = await fetchAllUser();
//         // console.log("Result:", result.data);
//         dispatch({
//             type: GET_ALL_USER_SUCCESS,
//             payload: result.data
//         })
//         console.log("Receive data: ", payload);
//     } catch (err) {
//         console.log(err)
//     }
// };

// export const getUserByID = (id) => async (dispatch) => {
//     try {
//         const result = await fetchUserbyID(id);
//         console.log("Result by ID:", result.data);
//         dispatch({
//             type: GET_USER_BY_ID,
//             payload: result.data
//         })
//     } catch (err) {
//         console.log(err)
//     }
// };

// export const createUser = (newUser) => async (dispatch) => {
//     try {
//         const result = await addNewUser(newUser);
//         console.log("Add user:", result.data);
//         dispatch({
//             type: CREATE_USER,
//             payload: result.data
//         })
//     } catch (err) {
//         console.log(err)
//     }
// };

// export const updateUser = (id, updatedata) => async (dispatch) => {
//     try {
//         const result = await updateUserByID(id, updatedata);
//         console.log("Update:", result.data);
//         dispatch({
//             type: UPDATE_USER,
//             payload: result.data
//         })
//     } catch (err) {
//         console.log(err)
//     }
// };

// export const deleteUser = (id) => async (dispatch) => {
//     try {
//         const result = await deleteUserbyID(id);
//         console.log("Delete:", result.data);
//         dispatch({
//             type: DELETE_USER,
//             payload: result.data
//         })
//     } catch (err) {
//         console.log(err)
//     }
// };