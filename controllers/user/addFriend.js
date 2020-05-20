const {userService} = require('../../service');
const {USER_STATUS} = require('../../constant');

module.exports = async (req, res) => {
    try {
        const dataToUpdate = req.params;
        dataToUpdate.statusId = USER_STATUS.FRIEND;
        const {user_id} = req.params;


        const dataBase = require('../../dataBase').getInstance();
        const UserModel = dataBase.getModel('User');

        await UserModel.update(dataToUpdate, {
            where: {
                id: user_id
            }
        });
        res.json('user was added');

    } catch (e) {
        res.status(400).json(e.message);
    }
};


