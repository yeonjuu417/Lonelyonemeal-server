const { users, recipeLogs } = require('../../models');

module.exports = {
    get: async (req, res) => {
        if (req.session.userId) {
            let userInfo = await users.findOne({
                where: {
                    id: req.session.userId
                }
            })
            let recipelog = await recipeLogs.findAll({
                where: {
                    userId: req.session.userId
                }
            })
            res.status(200).json({
                data: {
                    id: userInfo.id,
                    userImg: userInfo.userImg,
                    email: userInfo.email,
                    username: userInfo.username
                },
                log: recipelog
            })
        } else {
            res.status(401).send({
                message: 'Unauthorized'
            })
        }
    }
}
