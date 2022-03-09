import React, { useState } from 'react';
import './../assets/css/App.css';
import Modal from './Modal';
import axios from 'axios';

const AdminPage = () => {

    var users = [];

    axios.get("http://localhost:9000/api/v1/user")
    .then(res => {
        users = res.data;
        setData(users);
      })
    .catch(error => console.log(error));

    // users = [
    //     {
    //         id: 1,
    //         fullname: "Nguyen Van A",
    //         email: "nguyenvana@gmail.com",
    //         dob: "1-1-1990",
    //         firstlogin: new Date().toLocaleString() + "",
    //         lastlogin: new Date().toLocaleString() + "",
    //         role: "Admin",
    //         status: true
    //     },
    //     {
    //         id: 2,
    //         fullname: "Nguyen Van B",
    //         email: "nguyenvanb@gmail.com",
    //         dob: "1-1-1991",
    //         firstlogin: new Date().toLocaleString() + "",
    //         lastlogin: new Date().toLocaleString() + "",
    //         role: "",
    //         status: false
    //     },
    //     {
    //         id: 3,
    //         fullname: "Nguyen Van Vo",
    //         email: "nguyenvanvo@gmail.com",
    //         dob: "1-1-1991",
    //         firstlogin: new Date().toLocaleString() + "",
    //         lastlogin: new Date().toLocaleString() + "",
    //         role: "",
    //         status: true
    //     },
    //     {
    //         id: 4,
    //         fullname: "Nguyen Van C",
    //         email: "nguyenvanc@gmail.com",
    //         dob: "1-1-1992",
    //         firstlogin: new Date().toLocaleString() + "",
    //         lastlogin: new Date().toLocaleString() + "",
    //         role: "",
    //         status: false
    //     },
    //     {
    //         id: 5,
    //         fullname: "Nguyen Van D",
    //         email: "nguyenvand@gmail.com",
    //         dob: "1-1-1993",
    //         firstlogin: new Date().toLocaleString() + "",
    //         lastlogin: new Date().toLocaleString() + "",
    //         role: "",
    //         status: true
    //     }
    // ];

    const [data, setData] = useState([]);
    console.log(data);

    const [openModal, setOpenModal] = useState(false);
    const isOpenning = () => setOpenModal(true);


    return (
        <div className="ad-page" id="ad-page">
            <div className="ad-title">
                <h1 className="ad-text">dashboard</h1>
            </div>
            <div className="container">
                <div className="tab-title">
                    <i className="fas fa-users"></i>
                    <p className="tab-text">User Management</p>
                </div>
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
                            data.map((user, index) => (
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
                </div>
            </div>
            {/* Modal */}
            { openModal && <Modal closeModal={setOpenModal} />}
        </div>
    )
}

export default AdminPage