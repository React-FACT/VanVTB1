import './../assets/css/App.css';
import React from 'react';

const Modal = ({closeModal}) => {
    return (
        <div className='modal-class'>
            <div className="modal-box" id="modal-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <div className="modal-title">
                                <h2 className="modal-text">add user</h2>
                                <span   className="modal-close" 
                                        id="modal-close"
                                        onClick={() => closeModal(false)}>
                                    &times;
                                </span>
                            </div>
                            <form action="#" id="frmAdduser">
                                {/* <!-- Row 1 --> */}
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="modal-frm-control">
                                            <div className="col-md-2">
                                                <span className="modal-frm-text">Username</span>
                                            </div>
                                            <div className="col-md-3">
                                                <input type="text" className="username" id="username" />
                                                <div className="mess-error">
                                                    <span  id="mess-error1">
                                                        <i className="fas fa-exclamation-circle"></i>
                                                        Please check again your username!
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="modal-frm-control">
                                            <div className="col-md-2">
                                                <span className="modal-frm-text">Password</span>
                                            </div>
                                            <div className="col-md-3">
                                                <input type="password" name="password" id="password" />
                                                <div className="mess-error">
                                                    <span  id="mess-error2">
                                                        <i className="fas fa-exclamation-circle"></i>
                                                        Please check again your password!
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        
                                {/* <!-- Row 2 --> */}
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="modal-frm-control">
                                            <div className="col-md-2">
                                                <span className="modal-frm-text">First name</span>
                                            </div>
                                            <div className="col-md-3">
                                                <input type="text" className="firstname" id="firstname" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="modal-frm-control">
                                            <div className="col-md-2">
                                                <span className="modal-frm-text">Last name</span>
                                            </div>
                                            <div className="col-md-3">
                                                <input type="text" name="lastname" id="lastname" />
                                                <div className="mess-error">
                                                    <span  id="mess-error3">
                                                        <i className="fas fa-exclamation-circle"></i>
                                                        Please check again your last name!
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        
                                {/* <!-- Row 3 --> */}
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="modal-frm-control">
                                            <div className="col-md-2">
                                                <span className="modal-frm-text">Role</span>
                                            </div>
                                            <div className="col-md-3">
                                                <select name="role" id="role" >
                                                    <option value="1" id="op-role">Administrator</option>
                                                    <option value="2" id="op-role">Member</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="modal-frm-control">
                                            <div className="col-md-2">
                                                <span className="modal-frm-text">Status</span>
                                            </div>
                                            <div className="col-md-3">
                                                <select name="status" id="status" >
                                                    <option value="0" id="op-stt">Active</option>
                                                    <option value="1" id="op-stt">InActive</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        
                                {/* <!-- Row full form --> */}
                                <div className="row">
                                    <div className="modal-frm-control">
                                        <div className="col-md-1">
                                            <span className="modal-frm-text">Email</span>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="email" name="email" id="email" />
                                            <div className="mess-error">
                                                <span  id="mess-error4">
                                                    <i className="fas fa-exclamation-circle"></i>
                                                    Please check again your email!
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-3"></div>
                                    </div>
                                    <div className="modal-frm-control">
                                        <div className="col-md-1">
                                            <span className="modal-frm-text">Phone</span>
                                        </div>
                                        <div className="col-md-1">
                                            <select name="firstphone" id="firstphone" >
                                                <option value="0" id="op-phone">+84</option>
                                                <option value="1" id="op-phone">+82</option>
                                            </select>
                                        </div>
                                        <div className="col-md-7">
                                            <input type="number" name="phone" id="phone" />
                                            <div className="mess-error">
                                                <span  id="mess-error5">
                                                    <i className="fas fa-exclamation-circle"></i>
                                                    Please check again your phone number!
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-3"></div>
                                    </div>
                                    <div className="modal-frm-control">
                                        <div className="col-md-1">
                                            <span className="modal-frm-text">Address</span>
                                        </div>
                                        <div className="col-md-8" id="modal-select">
                                            <div className="s-modal-select">
                                                <select name="country" id="country" defaultValue={""}>
                                                    <option value="" >Choose country</option>
                                                </select>
                                                <div className="mess-error">
                                                    <span  id="mess-error6">
                                                        <i className="fas fa-exclamation-circle"></i>
                                                        Please select your country!
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="s-modal-select">
                                                <select name="city" id="city" defaultValue={""}>
                                                    <option value="" >Choose city</option>
                                                </select>
                                                <div className="mess-error">
                                                    <span  id="mess-error7">
                                                        <i className="fas fa-exclamation-circle"></i>
                                                        Please select your city!
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="s-modal-select">
                                                <select name="district" id="district" defaultValue={""}>
                                                    <option value="" >Choose district</option>
                                                </select>
                                                <div className="mess-error">
                                                    <span  id="mess-error8">
                                                        <i className="fas fa-exclamation-circle"></i>
                                                        Please select your district!
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="s-modal-select">
                                                <select name="ward" id="ward" defaultValue={""}>
                                                    <option value="" >Choose ward</option>
                                                </select>
                                                <div className="mess-error">
                                                    <span  id="mess-error9">
                                                        <i className="fas fa-exclamation-circle"></i>
                                                        Please select your ward!
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3"></div>
                                    </div>
                                    <div className="modal-frm-control">
                                        <div className="col-md-1"></div>
                                        <div className="col-md-8">
                                            <input type="text" name="address" id="address" />
                                            <div className="mess-error">
                                                <span  id="mess-error10">
                                                    <i className="fas fa-exclamation-circle"></i>
                                                    Please check again your address!
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-3"></div>
                                    </div>
                                    <div className="modal-frm-control">
                                        <div className="col-md-1">
                                            <span className="modal-frm-text">Note</span>
                                        </div>
                                        <div className="col-md-8">
                                            <textarea name="note" id="note"></textarea>
                                        </div>
                                        {/* <!-- <div className="col-md-3"></div> --> */}
                                    </div>
                                </div>
            
                                {/* <!-- Row button --> */}
                                <div className="row">
                                    <div className="col-md-1"></div>
                                    <div className="col-md-8">
                                        <div className="modal-btn-control">
                                            <button className="cancelAdd" id="cancelAdd" type="submit">CANCEL</button>
                                            <button className="submitAdd" id="submitAdd" type="reset">SAVE</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;