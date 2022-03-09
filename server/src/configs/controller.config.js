const { ControllerConstant } = require('../constants/api.constant');
const {AppRouting} = require('../routes/app.routing');
const {AuthenticationRouting} = require('../routes/authentication.routing');
const {RoleRouting} = require('../routes/role.routing');
const {UserRouting} = require('../routes/user.routing');

const registerController = (express) => {
    express.use(ControllerConstant.App, AppRouting);
    express.use(ControllerConstant.Authentication, AuthenticationRouting);
    express.use(ControllerConstant.Role, RoleRouting),
    express.use(ControllerConstant.User, UserRouting);
}

module.exports = {
    registerController
};