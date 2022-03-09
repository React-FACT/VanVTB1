
const {getAllUser, getuserbyid, addnewuser, updateuserbyid, deleteuserbyid} = require("./../services/user.service");
const {mysqlConnection} = require("./../configs/db.config");


const getAll = (req, res) => {
    try {
        mysqlConnection.query("SELECT * FROM users", (err, data) => {
            if (err) throw err;
            // console.log(data);
            res.status(200).send(data);
        });

        // const users = await getAllUser();
        // console.log(users);
        // res.status(200).send(users);
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

const getByID = (req, res) => {
    try {
        const userID = req.params.id;
        mysqlConnection.query(`SELECT * FROM users WHERE UserID = ${userID}`, (err, data) => {
            if (err) {
                throw err;
            }
            if (userID) {
                res.status(200).send(data);
            } else {
                res.status(404).send("Cannot found!");
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

const addUser = (req, res) => {
    try {
        const newUser = {...req.body};
        mysqlConnection.query("INSERT INTO users SET ?", newUser, (err, data) => {
            if (err) {
                throw err;
            }
            console.log(data);
            res.status(201).send(newUser);
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

const updateUser = (req, res) => {
    try {
        const UserID = req.params.id;
        const updatedata = {
            ...req.body
        };
        mysqlConnection.query(`UPDATE users SET ? WHERE UserID = ${UserID}`, updatedata, (err, data) => {
            if (err) {
                throw err;
            }
            console.log(data);
            res.status(200).send(data);
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

const deleteUser = (req, res) => {
    try {
        const userID = req.params.id;
        mysqlConnection.query(`DELETE FROM users WHERE UserID = ${userID}`, (err, data) => {
            if (err) {
                throw err;
            }
            console.log(data);
            res.status(200).send(data);
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

const upAvatar = (req, res) => {
    try {
        const file = req.file;
        res.set('Content-Type', 'multipart/form-data');
        res.status(200).send(uploadAvt(file));
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

module.exports = {
    getAll,
    getByID,
    addUser,
    updateUser,
    deleteUser,
    upAvatar
};