const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

const { usersController } = require('../controller');

// multer setting
const upload = multer({
    storage: multer.diskStorage({
      // set a localstorage destination
      destination: (req, file, cb) => {
        cb(null, './controller/users/userImg');
      },
      // convert a file name
      filename: (req, file, cb) => {
        cb(null, new Date().valueOf() + path.extname(file.originalname));
      },
    }),
  });

// * POST /users/login
router.post('/login', usersController.login.post);
// * POST /users/logout
router.post('/logout', usersController.logout.post);
// * POST /users/signup
router.post('/signup', usersController.signup.post);
// * get /users/userinfo
router.get('/userinfo', usersController.userinfo.get);
// * get /users/userinfoup
router.put('/userinfoup', usersController.userinfoup.put);
// * post /users/userimgup
router.put('/userimgup', upload.single('img'), usersController.userimgup.put);
// * get /recipe/resultrecipe
router.post('/resultrecipe', usersController.resultrecipe.post);
// * post /users/saverecipe
router.post('/saverecipe', usersController.saverecipe.post);
// * delete /users/deleterecipe
router.post('/deleterecipe', usersController.deleterecipe.post);

module.exports = router;
