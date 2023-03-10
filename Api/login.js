const jwt = require('jsonwebtoken');

const userLoginController = (req, res) => {
    console.log('User logging in')
    const loginData = req.body;
    console.log(loginData)
    if(loginData.username && loginData.password) {
        console.log("User logged in details => ", loginData)
        const jwtToken = jwt.sign(loginData, 'bezkoder-secret-key');
        return res.status(200).send({"token": jwtToken});
    }
    else {
        return res.status(400).send({message: "Invalid credentials"})
    }
}

module.exports = userLoginController