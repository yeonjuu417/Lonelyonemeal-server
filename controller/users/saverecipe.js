const { recipeLogs } = require('../../models');


module.exports = {
    post: async (req, res) => {
        const { foodName, foodImg, link } = req.body;
        if (!foodName || !foodImg || !link) {
            res.status(422).send({ message: "insufficient parameters supplied" })
        }
        const resave = await recipeLogs.findOne({
            where: {foodName: foodName , userId : req.session.userId}
        });

        if (!resave) {
            await recipeLogs.create({
                userId: req.session.userId,
                foodName: foodName,
                foodImg: foodImg,
                link: link,
            })
            res.status(200).send();
        } else {
            res.status(409).send({ message: "recipe exists" })
        }
    }
}
