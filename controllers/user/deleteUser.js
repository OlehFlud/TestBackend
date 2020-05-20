const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {

        const User = dataBase.getModel('User');
        const id = req.params.user_id;

        await User.destroy({
            where: {
                id:id
            }
        });
        res.json('User was deleted');

    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
