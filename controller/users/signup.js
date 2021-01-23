const crypto = require('crypto');
const { users } = require('../../models');

module.exports = {
    post: async (req, res) => {
        const { email, password, username } = req.body;
        if (!email || !password || !username) {
            res.status(422).send({ message: "insufficient parameters supplied" })
        }
        const isemail = await users.findOne({
            where: { email: req.body.email }
        })
        if(isemail){
            res.status(409).send({message : "email exists"})
        }else{
            //Rainbow Table Attack을 막기위한 hash값에 salt값을 추가
            const createSalt = () =>
            new Promise((resolve, reject) => {
                crypto.randomBytes(64, (err, buf) => {
                    if (err) reject(err);
                    resolve(buf.toString('base64'));
                });
            });
            /**
             * pbkdf2 메소드를 사용하여 HashPwd 생성
             * pbkdf2(기존 비밀번호, createSalt로 생성한 salt값, 해싱횟수, 출력될 바이트 수, 해시 알고리즘)
             */
            const createHashedPassword = (plainpassword) =>
            new Promise(async (resolve, reject) => {
                const salt = await createSalt();
                crypto.pbkdf2(plainpassword, salt, 1000, 64, 'sha512', (err, key) => {
                    if (err) reject(err);
                    resolve({ hashPwd: key.toString('base64'), salt });
                });
            });
            const { hashPwd, salt } = await createHashedPassword(password);
            await users.create({
                email: email,
                password: hashPwd,
                username: username,
                salt: salt
            })
            res.status(201).send({ message :"Sign successfully" })
        }
    }
}
