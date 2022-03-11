import React, { useEffect, useState } from 'react';
import './../assets/css/App.css';
import Modal from './Modal';
import axios from 'axios';
import { getAllUser } from '../redux/actions/userAction';
import {useSelector, useDispatch} from 'react-redux';

const TableUser = () => {

    const users = useSelector(state => state.userReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUser())
    },[dispatch]);
    console.log('User data', users);

    const [openModal, setOpenModal] = useState(false);
    const isOpenning = () => setOpenModal(true);

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
                            <td>{user.Dob}</td>
                            <td>{user.Firstlogin}</td>
                            <td>{user.Lastlogin}</td>
                            <td>
                                <input type="checkbox" name="role" id="role" value="Admin" />
                            </td>
                            <td>
                                <div className='stt-class'>
                                    <input type="radio" name="status" id="status" value="Active" />
                                    <span><p id="Active">Active</p></span>
                                    <span><p id="InActive">InActive</p></span>
                                </div>
                            </td>
                            <td><a href="./fragment/detail.html" className="btnDetail"><i className="fas fa-info-circle"></i></a></td>
                            <td><a href="./fragment/edit.html" className="btnEdit"><i className="fas fa-user-edit"></i></a></td>
                            <td><button className="btnDel"><i className="fas fa-trash"></i></button></td>
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
        </div>
    )
}

export default TableUser