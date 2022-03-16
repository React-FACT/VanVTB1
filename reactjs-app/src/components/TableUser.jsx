import React, { useEffect, useState } from 'react';
import './../assets/css/App.css';
import Modal from './Modal';
import ModalDetail from './ModalDetail';
import { getAllUser, getUserByID } from '../redux/actions/userAction';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';


const TableUser = () => {

    const users = useSelector(state => state.userReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUser())
    },[users]);
    // console.log('User data', users);

    const [openModal, setOpenModal] = useState(false);
    const isOpenning = () => setOpenModal(true);

    // Modal Detail
    const [openModalDetail, setOpenModalDetail] = useState(false);
    const [userDetail, setuserDetail] = useState({});

    function isOpenningDetail(e) {
        const id = e.target.value;
        console.log("Detail: ", id);
        // if (id === '' || id === undefined) {
        //     alert("Cannot find user!");
        //     window.location.reload(true);
        // } else {
        //     dispatch(getUserByID(id))
        //     .then( result2 => {
        //         setuserDetail(result2);
        //         setOpenModalDetail(true);
        //     })
        //     .catch( error => console.log(error))
        // }
    };
    console.log("Detail data:", users[0]);

    // Modal Edit User
    function isOpenningEdit(e) {
        const id = e.target.value;
        console.log("Update ID: ", id);
    }

    // Delete User
    function deleteCurrentUser(e) {
        const id = e.target.value;
        console.log("Delete ID: ", id);
    }

    return (
        <div className="tab-content">
            <table cellSpacing="0" cellPadding="5" border="2" id="tab-users">
                <thead>
                    <tr>
                        <th rowSpan="2">STT</th>
                        <th rowSpan="2">UserID</th>
                        <th rowSpan="2">Fullname</th>
                        <th rowSpan="2">Email</th>
                        <th rowSpan="2">Birthday</th>
                        <th colSpan="2">Activity Date</th>
                        <th rowSpan="2">Admin</th>
                        <th rowSpan="2">Status</th>
                        <th colSpan="3" rowSpan="3">
                            <button className="btnOpenModal" 
                                    onClick={isOpenning}>Add
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th>First login date</th>
                        <th>Last login date</th>
                    </tr>
                </thead>
                <tbody>
                {
                    users.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.UserID}</td>
                            <td>{user.Fullname}</td>
                            <td>{user.Email}</td>
                            <td>{moment.utc(user.Dob).format('DD/MM/YYYY')}</td>
                            <td>{user.Firstlogin}</td>
                            <td>{user.Lastlogin}</td>
                            <td>
                                <input type="checkbox" name="role" id="role" value="Admin" />
                            </td>
                            <td>
                                <div className='stt-class'>
                                    <input type="radio" name="status" id="status" value="Status" />
                                    <span>{user.status === 1 ? 'Active' : 'InActive'}</span>
                                </div>
                            </td>
                            <td>
                                <button className="btnDetail" onClick={isOpenningDetail} value={user.UserID}>
                                    <i className="fas fa-info-circle"></i>
                                </button>
                            </td>
                            <td>
                                <button className="btnEdit" onClick={isOpenningEdit} value={user.UserID}>
                                    <i className="fas fa-user-edit"></i>
                                </button>
                            </td>
                            <td>
                                <button className="btnDel" onClick={deleteCurrentUser} value={user.UserID}>
                                    <i className="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="8" className="sum-title">Count users is active</td>
                        <td colSpan="4" className="sum-text">6</td>
                    </tr>
                </tfoot>
            </table>
            {/* Modal */}
            { openModal && <Modal closeModal={setOpenModal} />}
            { openModalDetail && <ModalDetail userdetail={users[0]} closeModalDetail={setOpenModalDetail} />}
        </div>
    )
}

export default TableUser