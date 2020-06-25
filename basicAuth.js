function authUser(req, res, next) {
    if(req.user == null){
        res.status(403) //not logged in
        return res.send('You need to sign in')
    }

    next()
}

function authRole(role){
    return (req, res, next) => {
        if(req.user.role !== role){
            res.status(401) //You do not have acces
            return res.send('Not allowed')
        }
        next()
    }
}

module.exports = {
    authUser,
    authRole 
}