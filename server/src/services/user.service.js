const {mysqlConnection} = require("./../configs/db.config");

const getAllUser = () => {
    const data = mysqlConnection.query("SELECT * FROM users");
    return data;
};

const getuserbyid = (userID) => {
    
};

const addnewuser = (user) => {
    
};

const updateuserbyid = (userID, updatedata) => {
    
};

const deleteuserbyid = (userID) => {
    
};

module.exports = {
    getAllUser,
    getuserbyid,
    addnewuser,
    updateuserbyid,
    deleteuserbyid
}