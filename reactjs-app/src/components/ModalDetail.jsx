import React from 'react';
import './../assets/css/App.css';
import moment from 'moment';

const ModalDetail = ({closeModalDetail, userdetail}) => {
    return (
        <div className='detail-class'>
            <div className='container' id='modaldetail'>
                <div className="modal-title">
                    <h2 className="modal-text">user detail</h2>
                    <span   className="modal-close" 
                            id="modal-close"
                            onClick={() => closeModalDetail(false)}>
                        &times;
                    </span>
                </div>
                <div className='row' id='rowdetail'>
                    <div className="col-md-6">
                        <div className="img-class">
                            <img src="./../assets/img/user.png" alt="" className='img-user'/>
                        </div>
                        <div className='u-name'>
                            <h2 className='name-text'>{userdetail.Fullname}</h2>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <span className="modal-frm-text">Username</span>
                            <input type="text" className="username" id="username" value={userdetail.Fullname} />
                        </div>
                        <div className="row">
                            <span className="modal-frm-text">Email</span>
                            <input type="email" name="email" id="email" value={userdetail.Email} />
                        </div>
                        <div className="row">
                            <span className="modal-frm-text">Date of birth</span>
                            <input type="text" name="dob" id="dob" value={moment.utc(userdetail.Dob).format('DD/MM/YYYY')} />
                        </div>
                        <div className="row">
                            <span className="modal-frm-text">Role</span>
                            <input type="text" name="role" id="role" value={userdetail.RoleID === 1 ? 'Admin' : 'Member'} />
                        </div>
                        <div className="row">
                            <span className="modal-frm-text">Phone</span>
                            <input type="number" name="phone" id="phone" value={userdetail.Phone} />
                        </div>
                        <div className="row">
                            <span className="modal-frm-text">Address</span>
                            <input type="text" name="address" id="address" value={userdetail.Address} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDetail;