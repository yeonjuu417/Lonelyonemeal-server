const { recipeLogs } = require('../../models');

module.exports = {

    post : async (req, res) => {

        const { userId } = req.session;
        const { id } = req.body;
        
        if (!userId) {
            res.status(422).send({ message: "insufficient parameters supplied" })
        } else {
            await recipeLogs.destroy({
                where: {
                    id: id,
                    userId: userId
                }
            });
            res.status(200).json({ message: "Completed recipeLog delete" })
        }
    }
}
