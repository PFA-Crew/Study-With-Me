const express = require('express')
const path = require('path')
const router = express.Router();
const userController = require('../controllers/userController.js')
const cookieController = require('../controllers/cookieController.js')
const sessionController = require('../controllers/sessionController.js')
// const client_id = require(path.resolve('keys.js'))


router.post('/create',userController.createUser,sessionController.startSession, (req,res) => {
    res.sendStatus(201)
    
})

router.post('/login', userController.verifyUser,cookieController.setSSIDCookie, (req,res,next) => {

    //find data in db and return json layouts
    
    res.status(201).json(res.locals.layouts)

})



module.exports = router