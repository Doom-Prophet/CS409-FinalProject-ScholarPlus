var secrets = require('../config/secrets');

module.exports = function (router) {

    var homeRoute = router.route('/');

    homeRoute.get(function (req, res) {
        var connectionString = secrets.token;
        // res.json({ message: 'My connection string is not ' + connectionString });
        
        const name = req.query.user;
        res.send(name+"!");
    });

    return router;
}
