const { users } = require('../../models');

module.exports = {
  put: async (req, res) => {
    console.log(req.session.userId);
	  console.log(req.file);
    if(req.session.userId) {
      const update = await users.update({ userImg: req.file.filename}, {
        where: { id: req.session.userId }
      })
      const img = await users.findOne({
	      where: {id: req.session.userId }
      })
      res.status(200).send({ data : img })
    } else {
      res.status(401).send({ message : 'Unauthorized' })
    }
  }
}
