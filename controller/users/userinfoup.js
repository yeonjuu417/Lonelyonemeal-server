const { users } = require('../../models');
const crypto = require('crypto');
const user = require('../../models/user');

module.exports = {
    put: async (req, res) => {
        const {username,password} = req.body
        // const {username,password,userImg} = req.body
        if(req.session.userId && username){
            await users.findOne({
                where : {id : req.session.userId}
            })
            .then(data =>{
                users.update({username : username},{where : {id : req.session.userId}})
                res.status(302).send({data: users.username})
            }).catch(err => {
                res.status(404).send({message: "user not found"});
            })
        }
        if(req.session.userId && password){

            const createSalt = () =>
            new Promise((resolve, reject) => {
                crypto.randomBytes(64, (err, buf) => {
                    if (err) reject(err);
                    resolve(buf.toString('base64'));
                });
            });

            const createHashedPassword = (plainpassword) =>
            new Promise(async (resolve, reject) => {
                const salt = await createSalt();
                crypto.pbkdf2(plainpassword, salt, 1000, 64, 'sha512', (err, key) => {
                    if (err) reject(err);
                    resolve({ hashPwd: key.toString('base64'), salt });
                });
            });

            const { hashPwd, salt } = await createHashedPassword(password);

            await users.findOne({
                where : {id : req.session.userId}
            })
            .then(data =>{
                users.update({password : hashPwd, salt: salt},{where : {id : req.session.userId}})
                res.status(302).send({data: user.username})
            }).catch(err => {
                res.status(404).send({message: "user not found"});
            })
        }
        // if(userImg){
        //     await users.findOne({
        //         where : {userImg : userImg}
        //     })
        //     .then(data => {
        //         users.update({userImg : data.userImg},{where : {userImg : userImg}})
        //         res.status(302).send()
        //     })
        // }
    }   
}
