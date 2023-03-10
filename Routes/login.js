const express = require('express');
const LoginApi = require('../Api/login');
const router = express.Router();

router.post('/login', LoginApi, async (req,res)=>{
    res.send('response')
})

module.exports = router;