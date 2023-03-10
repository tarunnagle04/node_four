const express = require('express');
const RegisterApi = require('../Api/register');
const router = express.Router();

router.post('/register', RegisterApi, async (req,res)=>{
    res.send('response')
})

module.exports = router;