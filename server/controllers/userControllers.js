const {StatusCodes} = require('http-status-codes');

const login = async (req, res, next) =>{
    //try to log user in
    console.log(req.body);
    res.status(StatusCodes.OK).send("User logged in");
}

module.exports = {
    login
}