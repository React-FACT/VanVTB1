const express = require("express");
const UserRouting = express.Router();
const {getAll, getByID, addUser, updateUser, deleteUser, upAvatar} = require("../controllers/user.controller");
UserRouting.use(express.json())

/**
 * @swagger
 * /api/v1/user:
 *   get:
 *     summary: Get all users
 *     tag: User
 *     description: Get all data
 *     responses:
 *       200:
 *         description: Successful!
 *
 */
UserRouting.get("", getAll);

/**
 * @swagger
 * /api/v1/user/{id}:
 *   get:
 *     summary: Get user by ID
 *     parameters:
 *     - in: path
 *       name: id
 *       description: user ID
 *       required: true
 *       type: integer
 *     responses:
 *       200:
 *          description: OK
 *       404:
 *          description: A user with the specified ID was not found.
 *
 */
UserRouting.get('/:id', getByID);

/**
 * @swagger
 * /api/v1/user/new:
 *  post:
 *      summary: Creates a new user.
 *      parameters:
 *          - in: body
 *            name: user
 *            schema:
 *                $ref: '#/definitions/User'
 *      responses:
 *          200:
 *            description: Added a new user!
 *          500:
 *            description: Cannot add user!.
 */
UserRouting.post('', addUser);

/**
 * @swagger
 * /api/v1/user/update/{id}:
 * put:
 *      summary: Updates a user.
 *      parameters:
 *          - in: path
 *            name: id
 *            description: user ID
 *            required: true
 *            type: integer
 *          - in: body
 *            name: updateuser
 *            description: data to update
 *            schema:
 *                $ref: '#/definitions/User'
 *      responses:
 *          200:
 *            description: Updated a user!
 *          500:
 *            description: Cannot update user!.
 *      
 */
UserRouting.put('/:id', updateUser);

/**
 * @swagger
 * /api/v1/user/delete/{id}:
 *   delete:
 *     summary: Delete user by ID
 *     parameters:
 *     - in: path
 *       name: id
 *       description: user ID
 *       required: true
 *       type: integer
 *     responses:
 *       200:
 *          description: OK
 *       404:
 *          description: A user with the specified ID was not found.
 *
 */
UserRouting.delete('/delete/:id', deleteUser);

UserRouting.post('/avatar', upAvatar);

module.exports = {UserRouting};