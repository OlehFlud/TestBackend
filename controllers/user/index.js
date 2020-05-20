const createUser = require('./createUser');
const loginUser = require('./loginUser');
const getUserById = require('./getUserById');
const findAllUser = require('./findAllUser');
const deleteUser = require('./deleteUser');
const addFriend = require('./addFriend');
const cancelRequest = require('./cancelRequest');

module.exports = {
    createUser,
    loginUser,
    getUserById,
    findAllUser,
    deleteUser,
    addFriend,
    cancelRequest
};
