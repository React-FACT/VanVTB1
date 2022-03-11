import React from 'react';
import './../assets/css/App.css';
import TableUser from '../components/TableUser';

const AdminPage = () => {

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
                <TableUser />
            </div>
        </div>
    )
}

export default AdminPage