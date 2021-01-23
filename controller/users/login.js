const crypto = require('crypto');
const { users } = require('../../models');

module.exports = {// When login, send userInfo and recipeLog all information ... ? 
    post: async (req, res) => {
        //Get information from the database via email and password
        const {email,password} = req.body;
        const userInfo = await users.findOne({
            where: { email: email },
        });
        if(!userInfo){ //Failed
            res.status(400).send({data: null, message : "not authorized"})
        }else{ //Successful
            const { salt } = userInfo;
            const createHashedPassword = (plainpassword) =>
            new Promise(async (resolve, reject) => {
                crypto.pbkdf2(plainpassword, salt, 1000, 64, 'sha512', (err, key) => {
                    if (err) reject(res.status(400).send({message: "hashPwd exists"}));
                    resolve(key.toString('base64'));
                });
            });
            const hashPwd = await createHashedPassword(password);
            await users.findOne({
                where: { password: hashPwd },
            }).then(data => {
                req.session.userId = data.id;
                res.send({message : "Login successfully" })
            })
        }
    }
}
