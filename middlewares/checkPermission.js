

function checkPermission(req, res, next) {
    const {role} = req.user;
    if (role == 'admin') {
    } else if (req.baseUrl !== '/api/user' && role == 'moderator') {
    } else {
        res.send({ message: "You can not access in URL" })
    }
    // console.log(req.baseUrl);
    
    next()
}
module.exports = {
    checkPermission
}